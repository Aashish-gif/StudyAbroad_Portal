const YT_API_KEY = "AIzaSyC-PbE0IY2db4t-fb4opibXEfLGIUVchJk";

export type YouTubePlaylist = {
  id: string;
  title: string;
  channelTitle: string;
  thumbnailUrl?: string;
};

export async function fetchBestPlaylists(query: string, maxResults = 6): Promise<YouTubePlaylist[]> {
  const url = new URL("https://www.googleapis.com/youtube/v3/search");
  url.searchParams.set("key", YT_API_KEY);
  url.searchParams.set("part", "snippet");
  url.searchParams.set("q", `${query} best playlist`);
  url.searchParams.set("type", "playlist");
  url.searchParams.set("maxResults", String(maxResults));

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error("YouTube API error");
  const data = await res.json();
  return (data.items || []).map((item: any) => ({
    id: item.id?.playlistId,
    title: item.snippet?.title,
    channelTitle: item.snippet?.channelTitle,
    thumbnailUrl: item.snippet?.thumbnails?.medium?.url || item.snippet?.thumbnails?.default?.url,
  }));
}


