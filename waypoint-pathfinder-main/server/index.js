import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { google } from 'googleapis';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Helpers
function buildTransport() {
  const hasSmtp = !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  if (!hasSmtp) return null;
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  });
}

async function createCalendarEvent({ title, description, startIso, endIso, attendees }) {
  const hasGoogleCreds = !!(process.env.GCAL_CLIENT_EMAIL && process.env.GCAL_PRIVATE_KEY && process.env.GCAL_CALENDAR_ID);
  if (!hasGoogleCreds) {
    // fallback: dummy meet link
    return {
      htmlLink: 'https://calendar.google.com',
      hangoutLink: `https://meet.google.com/${Math.random().toString(36).slice(2, 10)}`,
      id: Math.random().toString(36).slice(2),
    };
  }

  const jwt = new google.auth.JWT(
    process.env.GCAL_CLIENT_EMAIL,
    undefined,
    process.env.GCAL_PRIVATE_KEY?.replace(/\\n/g, '\n'),
    ['https://www.googleapis.com/auth/calendar']
  );
  const calendar = google.calendar({ version: 'v3', auth: jwt });

  const event = {
    summary: title,
    description,
    start: { dateTime: startIso },
    end: { dateTime: endIso },
    attendees: attendees?.map(email => ({ email })) || [],
    conferenceData: {
      createRequest: { requestId: `req-${Date.now()}` },
    },
  };

  const res = await calendar.events.insert({
    calendarId: process.env.GCAL_CALENDAR_ID,
    requestBody: event,
    conferenceDataVersion: 1,
  });

  return res.data;
}

app.post('/api/book', async (req, res) => {
  try {
    const { consultantName, userEmail, date, time, durationMinutes = 60, message } = req.body || {};
    if (!consultantName || !userEmail || !date || !time) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const startIso = new Date(`${date}T${time}:00Z`).toISOString();
    const endIso = new Date(new Date(startIso).getTime() + durationMinutes * 60000).toISOString();

    const event = await createCalendarEvent({
      title: `Consultation with ${consultantName}`,
      description: message || 'Consultation session',
      startIso,
      endIso,
      attendees: [userEmail, process.env.COUNSELOR_EMAIL || 'counselor@example.com'],
    });

    const meetLink = event.hangoutLink || (event.conferenceData?.entryPoints?.find(e => e.entryPointType === 'video')?.uri) || `https://meet.google.com/${Math.random().toString(36).slice(2, 10)}`;

    const transporter = buildTransport();
    const emails = [userEmail, process.env.COUNSELOR_EMAIL].filter(Boolean);
    if (transporter && emails.length > 0) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: emails.join(','),
        subject: `Booking Confirmed: Consultation with ${consultantName}`,
        html: `
          <p>Your consultation has been scheduled.</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Meet Link:</strong> <a href="${meetLink}">${meetLink}</a></p>
          <p>${message || ''}</p>
        `,
      });
    }

    res.json({
      eventId: event.id,
      calendarLink: event.htmlLink,
      meetLink,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to book session' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


