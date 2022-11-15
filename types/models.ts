export interface Votes {
  positive: number;
  negative: number;
}

export interface Personality {
  id: string;
  name: string;
  description: string;
  category: string;
  picture: string;
  lastUpdated: string;
  votes: Votes;
}

export type Direction = "up" | "down";
