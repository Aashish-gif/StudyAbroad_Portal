import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  Plus, 
  Edit, 
  Trash2, 
  Save, 
  X, 
  CheckCircle,
  AlertCircle,
  Settings,
  Zap,
  Globe,
  Moon,
  Sun
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

const Availability = () => {
  const [timezone, setTimezone] = useState("America/New_York");
  const [autoAccept, setAutoAccept] = useState(false);
  const [bufferTime, setBufferTime] = useState(15);
  const [maxSessionsPerDay, setMaxSessionsPerDay] = useState(6);
  const [advanceBooking, setAdvanceBooking] = useState(30);
  const [editingSlot, setEditingSlot] = useState(null);

  // Dummy data for availability
  const [weeklySchedule, setWeeklySchedule] = useState([
    {
      day: "Monday",
      enabled: true,
      slots: [
        { id: 1, start: "09:00", end: "12:00", type: "available" },
        { id: 2, start: "14:00", end: "18:00", type: "available" }
      ]
    },
    {
      day: "Tuesday", 
      enabled: true,
      slots: [
        { id: 3, start: "10:00", end: "14:00", type: "available" },
        { id: 4, start: "16:00", end: "20:00", type: "available" }
      ]
    },
    {
      day: "Wednesday",
      enabled: false,
      slots: []
    },
    {
      day: "Thursday",
      enabled: true,
      slots: [
        { id: 5, start: "11:00", end: "15:00", type: "available" },
        { id: 6, start: "17:00", end: "21:00", type: "available" }
      ]
    },
    {
      day: "Friday",
      enabled: true,
      slots: [
        { id: 7, start: "09:00", end: "17:00", type: "available" }
      ]
    },
    {
      day: "Saturday",
      enabled: true,
      slots: [
        { id: 8, start: "10:00", end: "14:00", type: "available" }
      ]
    },
    {
      day: "Sunday",
      enabled: false,
      slots: []
    }
  ]);

  const [specialDates, setSpecialDates] = useState([
    {
      id: 1,
      date: "2024-01-20",
      type: "unavailable",
      reason: "Conference attendance",
      allDay: true
    },
    {
      id: 2,
      date: "2024-01-25",
      type: "limited",
      reason: "Limited availability",
      allDay: false,
      slots: [
        { start: "10:00", end: "12:00" }
      ]
    }
  ]);

  const timeSlots = Array.from({ length: 48 }, (_, i) => {
    const hour = Math.floor(i / 2);
    const minute = (i % 2) * 30;
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  });

  const handleToggleDay = (dayIndex: number) => {
    const newSchedule = [...weeklySchedule];
    newSchedule[dayIndex].enabled = !newSchedule[dayIndex].enabled;
    if (!newSchedule[dayIndex].enabled) {
      newSchedule[dayIndex].slots = [];
    }
    setWeeklySchedule(newSchedule);
  };

  const handleAddSlot = (dayIndex: number) => {
    const newSchedule = [...weeklySchedule];
    const newSlot = {
      id: Date.now(),
      start: "09:00",
      end: "17:00",
      type: "available"
    };
    newSchedule[dayIndex].slots.push(newSlot);
    setWeeklySchedule(newSchedule);
  };

  const handleRemoveSlot = (dayIndex: number, slotId: number) => {
    const newSchedule = [...weeklySchedule];
    newSchedule[dayIndex].slots = newSchedule[dayIndex].slots.filter(slot => slot.id !== slotId);
    setWeeklySchedule(newSchedule);
  };

  const handleUpdateSlot = (dayIndex: number, slotId: number, field: string, value: string) => {
    const newSchedule = [...weeklySchedule];
    const slot = newSchedule[dayIndex].slots.find(s => s.id === slotId);
    if (slot) {
      slot[field] = value;
    }
    setWeeklySchedule(newSchedule);
  };

  const handleSaveAvailability = () => {
    // Save to sessionStorage
    const availabilityData = {
      weeklySchedule,
      specialDates,
      settings: {
        timezone,
        autoAccept,
        bufferTime,
        maxSessionsPerDay,
        advanceBooking
      }
    };
    sessionStorage.setItem('mentorAvailability', JSON.stringify(availabilityData));
    console.log('Availability saved:', availabilityData);
  };

  const DaySchedule = ({ day, dayIndex }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: dayIndex * 0.1 }}
      className="border rounded-lg p-4"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <Switch
            checked={day.enabled}
            onCheckedChange={() => handleToggleDay(dayIndex)}
          />
          <h3 className="font-semibold">{day.day}</h3>
          {day.enabled && (
            <Badge variant="outline" className="text-xs">
              {day.slots.length} slot{day.slots.length !== 1 ? 's' : ''}
            </Badge>
          )}
        </div>
        {day.enabled && (
          <Button
            onClick={() => handleAddSlot(dayIndex)}
            size="sm"
            variant="outline"
          >
            <Plus className="h-4 w-4 mr-1" />
            Add Slot
          </Button>
        )}
      </div>

      {day.enabled ? (
        <div className="space-y-3">
          {day.slots.map((slot, slotIndex) => (
            <motion.div
              key={slot.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg"
            >
              <div className="flex items-center gap-2 flex-1">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <Select
                    value={slot.start}
                    onValueChange={(value) => handleUpdateSlot(dayIndex, slot.id, 'start', value)}
                  >
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>{time}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <span className="text-muted-foreground">to</span>
                <Select
                  value={slot.end}
                  onValueChange={(value) => handleUpdateSlot(dayIndex, slot.id, 'end', value)}
                >
                  <SelectTrigger className="w-20">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((time) => (
                      <SelectItem key={time} value={time}>{time}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button
                onClick={() => handleRemoveSlot(dayIndex, slot.id)}
                size="sm"
                variant="ghost"
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-muted-foreground">
          <Calendar className="h-8 w-8 mx-auto mb-2 opacity-50" />
          <p className="text-sm">No availability set</p>
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-bold text-foreground mb-2">Availability Management</h1>
        <p className="text-muted-foreground">Set your availability and manage your schedule</p>
      </motion.div>

      <Tabs defaultValue="schedule" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="schedule">Weekly Schedule</TabsTrigger>
          <TabsTrigger value="exceptions">Special Dates</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="schedule" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Availability
              </CardTitle>
              <CardDescription>
                Set your regular availability for each day of the week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weeklySchedule.map((day, index) => (
                  <DaySchedule key={day.day} day={day} dayIndex={index} />
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t">
                <Button onClick={handleSaveAvailability} className="btn-primary-custom">
                  <Save className="h-4 w-4 mr-2" />
                  Save Schedule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="exceptions" className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Special Dates & Exceptions
              </CardTitle>
              <CardDescription>
                Manage one-time availability changes and exceptions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {specialDates.map((date) => (
                  <motion.div
                    key={date.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between p-4 border rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        date.type === 'unavailable' ? 'bg-red-500' : 
                        date.type === 'limited' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      <div>
                        <p className="font-medium">{new Date(date.date).toLocaleDateString()}</p>
                        <p className="text-sm text-muted-foreground">{date.reason}</p>
                        {!date.allDay && date.slots && (
                          <p className="text-xs text-muted-foreground">
                            {date.slots.map(slot => `${slot.start}-${slot.end}`).join(', ')}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={date.type === 'unavailable' ? 'destructive' : 'secondary'}>
                        {date.type}
                      </Badge>
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
                
                <Button variant="outline" className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Exception
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  General Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Select value={timezone} onValueChange={setTimezone}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                      <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                      <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                      <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                      <SelectItem value="Europe/London">London (GMT)</SelectItem>
                      <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                      <SelectItem value="Asia/Tokyo">Tokyo (JST)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-accept">Auto-accept bookings</Label>
                  <Switch
                    id="auto-accept"
                    checked={autoAccept}
                    onCheckedChange={setAutoAccept}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="buffer-time">Buffer time between sessions (minutes)</Label>
                  <Input
                    id="buffer-time"
                    type="number"
                    value={bufferTime}
                    onChange={(e) => setBufferTime(parseInt(e.target.value))}
                    min="0"
                    max="120"
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Zap className="h-5 w-5" />
                  Session Limits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="max-sessions">Maximum sessions per day</Label>
                  <Input
                    id="max-sessions"
                    type="number"
                    value={maxSessionsPerDay}
                    onChange={(e) => setMaxSessionsPerDay(parseInt(e.target.value))}
                    min="1"
                    max="12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="advance-booking">Advance booking limit (days)</Label>
                  <Input
                    id="advance-booking"
                    type="number"
                    value={advanceBooking}
                    onChange={(e) => setAdvanceBooking(parseInt(e.target.value))}
                    min="1"
                    max="90"
                  />
                </div>

                <Alert>
                  <Globe className="h-4 w-4" />
                  <AlertDescription>
                    These settings help manage your workload and prevent overbooking
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>

          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Moon className="h-5 w-5" />
                Work-Life Balance
              </CardTitle>
              <CardDescription>
                Set boundaries to maintain a healthy work-life balance
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <Sun className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                  <h4 className="font-semibold mb-1">Morning Person</h4>
                  <p className="text-sm text-muted-foreground">Prefer early sessions</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Zap className="h-8 w-8 mx-auto mb-2 text-yellow-500" />
                  <h4 className="font-semibold mb-1">Flexible</h4>
                  <p className="text-sm text-muted-foreground">Available anytime</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <Moon className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                  <h4 className="font-semibold mb-1">Evening Person</h4>
                  <p className="text-sm text-muted-foreground">Prefer late sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Availability;


