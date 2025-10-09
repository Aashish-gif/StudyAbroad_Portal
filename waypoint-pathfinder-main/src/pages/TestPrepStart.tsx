import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, Timer, ArrowLeft } from "lucide-react";
import { fetchBestPlaylists } from "@/utils/youtube";
import { getPlaylistQuerySuggestion } from "@/utils/gemini";
import { useSessionState } from "@/hooks/useSessionState";

const TestPrepStart = () => {
  const { testId } = useParams();
  const [activeTab, setActiveTab] = useState("playlists");
  const [query, setQuery] = useState("");
  const [playlists, setPlaylists] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Bigger question bank: 40 questions
  const questions = useMemo(() => Array.from({ length: 40 }).map((_, i) => ({
    q: `Sample question ${i + 1} for ${(testId || '').toUpperCase()}?`,
    options: ["Option A", "Option B", "Option C", "Option D"],
    correct: i % 4,
  })), [testId]);
  const [current, setCurrent] = useSessionState<number>(`tp:${testId}:current`, 0);
  const [selected, setSelected] = useSessionState<Record<number, number | null>>(`tp:${testId}:answers`, {});
  const [timeLeft, setTimeLeft] = useSessionState<number>(`tp:${testId}:time`, 40 * 60);
  const [submitted, setSubmitted] = useSessionState<boolean>(`tp:${testId}:submitted`, false);

  useEffect(() => {
    setQuery(((testId || '').toUpperCase()) + ' preparation');
  }, [testId]);

  useEffect(() => {
    if (submitted) return;
    const t = setInterval(() => setTimeLeft((t) => (t > 0 ? t - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [submitted]);

  async function fetchWithGemini() {
    setLoading(true);
    try {
      const suggestion = await getPlaylistQuerySuggestion((testId || '').toUpperCase());
      const res = await fetchBestPlaylists(suggestion);
      setPlaylists(res);
    } catch (e) {
      console.error(e);
      alert('Failed to fetch recommendations');
    } finally {
      setLoading(false);
    }
  }

  async function fetchDirect() {
    setLoading(true);
    try {
      const res = await fetchBestPlaylists(query || ((testId || '').toUpperCase() + ' preparation'));
      setPlaylists(res);
    } catch (e) {
      console.error(e);
      alert('Failed to fetch playlists');
    } finally {
      setLoading(false);
    }
  }

  function formatTime(sec: number) {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${m}:${s.toString().padStart(2, '0')}`;
  }

  // DPP: 5 sets x 60 questions (dummy)
  const dppSets = useMemo(() => Array.from({ length: 5 }).map((_, si) => ({
    title: `Set ${si + 1}`,
    questions: Array.from({ length: 60 }).map((__, qi) => ({
      q: `DPP Q${qi + 1} of Set ${si + 1}: Sample concept check for ${(testId || '').toUpperCase()}`,
      options: [
        `Option A for Q${qi + 1}`,
        `Option B for Q${qi + 1}`,
        `Option C for Q${qi + 1}`,
        `Option D for Q${qi + 1}`,
      ],
      correct: (qi % 4),
    })),
  })), [testId]);
  const [expandedDpp, setExpandedDpp] = useSessionState<Record<number, boolean>>(`tp:${testId}:dppExpanded`, {});
  const [currentDppSet, setCurrentDppSet] = useSessionState<number>(`tp:${testId}:dppSet`, 0);
  const [dppCurrent, setDppCurrent] = useSessionState<number>(`tp:${testId}:dppCurrent`, 0);
  const [dppSelected, setDppSelected] = useSessionState<Record<string, Record<number, number | null>>>(`tp:${testId}:dppSelected`, {});

  return (
    <div className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/test-prep"><Button variant="outline"><ArrowLeft className="h-4 w-4 mr-2"/>Back</Button></Link>
          <div className="flex items-center gap-3 text-sm"><Timer className="h-4 w-4"/>{formatTime(timeLeft)}</div>
        </div>
        <h1 className="text-3xl font-bold mb-6">Start Preparation: {(testId || '').toUpperCase()}</h1>
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-3 w-full mb-6">
            <TabsTrigger value="playlists">Best Playlists</TabsTrigger>
            <TabsTrigger value="dpp">DPP</TabsTrigger>
            <TabsTrigger value="tests">Tests</TabsTrigger>
          </TabsList>
          <TabsContent value="playlists" className="space-y-4">
            <div className="flex items-center gap-2">
              <Button size="sm" onClick={fetchDirect} disabled={loading}>{loading ? 'Loading...' : 'Fetch Playlists'}</Button>
              <Button size="sm" variant="outline" onClick={fetchWithGemini} disabled={loading}>Use Gemini Suggestion</Button>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {playlists.map((p) => (
                <a key={p.id} href={`https://www.youtube.com/playlist?list=${p.id}`} target="_blank" rel="noreferrer" className="block rounded-xl border hover:shadow-lg transition overflow-hidden">
                  {p.thumbnailUrl && (<img src={p.thumbnailUrl} alt={p.title} className="w-full h-36 object-cover" />)}
                  <div className="p-3">
                    <div className="font-semibold mb-1 line-clamp-2">{p.title}</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1"><PlayCircle className="h-3 w-3" /> {p.channelTitle}</div>
                  </div>
                </a>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="dpp" className="space-y-4">
            {/* Set selector */}
            <div className="rounded-lg border p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="font-semibold">Daily Practice Problems</div>
                <div className="flex gap-2">
                  {dppSets.map((set, i) => (
                    <Button key={i} size="sm" variant={currentDppSet === i ? 'default' : 'outline'} onClick={() => { setCurrentDppSet(i); setDppCurrent(0); }}>
                      {set.title}
                    </Button>
                  ))}
                </div>
              </div>
              {/* Navigator */}
              <div className="grid grid-cols-8 sm:grid-cols-12 gap-2">
                {dppSets[currentDppSet].questions.map((_, i) => {
                  const sel = dppSelected[String(currentDppSet)]?.[i];
                  return (
                    <button key={i} className={`text-xs rounded border px-2 py-1 ${dppCurrent === i ? 'border-primary' : ''} ${sel != null ? 'bg-primary/10' : ''}`} onClick={() => setDppCurrent(i)}>
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* Current question */}
            <div className="rounded-2xl border p-5 bg-gradient-to-br from-white to-secondary">
              <div className="text-sm text-muted-foreground mb-1">{dppSets[currentDppSet].title}</div>
              <div className="text-lg font-semibold mb-3">Q{dppCurrent + 1}. {dppSets[currentDppSet].questions[dppCurrent].q}</div>
              <div className="grid sm:grid-cols-2 gap-3">
                {dppSets[currentDppSet].questions[dppCurrent].options.map((opt, oi) => {
                  const sel = dppSelected[String(currentDppSet)]?.[dppCurrent];
                  return (
                    <button
                      key={oi}
                      className={`text-left rounded-xl border p-3 transition ${sel === oi ? 'border-primary bg-primary/5' : ''}`}
                      onClick={() => {
                        const key = String(currentDppSet);
                        const setSel = dppSelected[key] || {};
                        setDppSelected({ ...dppSelected, [key]: { ...setSel, [dppCurrent]: oi } });
                      }}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button variant="outline" onClick={() => setDppCurrent((c) => Math.max(0, c - 1))}>Previous</Button>
                <Button onClick={() => setDppCurrent((c) => Math.min(dppSets[currentDppSet].questions.length - 1, c + 1))}>Next</Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="tests">
            <div className="rounded-lg border p-4 mb-3">Navigate questions:</div>
            <div className="grid grid-cols-8 gap-2 mb-4">
              {questions.map((_, i) => (
                <button key={i} className={`text-xs rounded border px-2 py-1 ${current === i ? 'border-primary' : ''}`} onClick={() => setCurrent(i)}>{i + 1}</button>
              ))}
            </div>
            <div className="rounded-lg border p-4">
              <div className="font-medium mb-3">Q{current + 1}. {questions[current].q}</div>
              <div className="grid sm:grid-cols-2 gap-2">
                {questions[current].options.map((opt, oi) => (
                  <button key={oi} className={`text-left rounded border p-2 ${selected[current] === oi ? 'border-primary' : ''}`} onClick={() => setSelected({ ...selected, [current]: oi })}>{opt}</button>
                ))}
              </div>
              <div className="flex items-center justify-between mt-4">
                <Button variant="outline" onClick={() => setCurrent((c) => Math.max(0, c - 1))}>Previous</Button>
                <Button onClick={() => setCurrent((c) => Math.min(questions.length - 1, c + 1))}>Next</Button>
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 mt-4">
              <Button onClick={() => setSubmitted(true)}>Submit</Button>
            </div>
            {submitted && (
              <div className="mt-4 rounded-lg border p-4">
                {(() => {
                  const score = questions.reduce((acc, q, i) => acc + ((selected[i] === q.correct) ? 1 : 0), 0);
                  return <div className="font-semibold">Score: {score} / {questions.length}</div>;
                })()}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TestPrepStart;


