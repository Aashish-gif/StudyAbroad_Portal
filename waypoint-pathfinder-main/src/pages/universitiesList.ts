export type UniversityAlias = {
  slug: string;
  names: string[];
};

export const universityAliases: UniversityAlias[] = [
  {
    slug: "stanford",
    names: ["Stanford University", "Stanford"],
  },
  {
    slug: "oxford",
    names: ["University of Oxford", "Oxford"],
  },
  {
    slug: "eth-zurich",
    names: ["ETH Zurich", "ETH", "ETH Zürich"],
  },
  {
    slug: "toronto",
    names: ["University of Toronto", "Toronto", "UofT"],
  },
  {
    slug: "nus",
    names: ["National University of Singapore", "NUS"],
  },
  {
    slug: "melbourne",
    names: ["University of Melbourne", "Melbourne"],
  },
];

export function buildUniversityNameToSlug(): Record<string, string> {
  const map: Record<string, string> = {};
  for (const entry of universityAliases) {
    for (const name of entry.names) {
      map[name] = entry.slug;
    }
  }
  return map;
}


