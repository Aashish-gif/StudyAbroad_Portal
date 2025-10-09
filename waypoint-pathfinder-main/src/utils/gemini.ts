const GEMINI_API_KEY = "AIzaSyAFTVz_ZhNv4ESGKx9OqwYN68tFeKqiLSI";

export async function getPlaylistQuerySuggestion(testName: string): Promise<string> {
  const prompt = `Suggest an optimal YouTube search query to find the best high-quality playlists for ${testName} preparation. Return only the query text, concise.`;
  try {
    const res = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + GEMINI_API_KEY, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      })
    });
    if (!res.ok) throw new Error("Gemini API error");
    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts?.[0]?.text || "best " + testName + " preparation playlist";
    return text.trim();
  } catch (e) {
    console.error(e);
    return "best " + testName + " preparation playlist";
  }
}


