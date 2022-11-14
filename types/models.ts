export interface Personality {
    id: string;
    name: string;
    description: string;
    category: string;
    picture: string;
    lastUpdated: string;
    votes: {
      positive: number;
      negative: number;
    };
  }
  
  export type Direction = 'up' | 'down';
  