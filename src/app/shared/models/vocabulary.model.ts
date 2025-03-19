export interface VocabularyItem {
  id: number;
  germanWord: string;
  swissGermanWord: string;
  example?: string;
  category: VocabularyCategory;
}

export enum VocabularyCategory {
  GREETINGS = 'Grüße',
  EVERYDAY = 'Alltag',
  FOOD = 'Essen',
  NUMBERS = 'Zahlen',
  TRAVEL = 'Reisen',
  FAMILY = 'Familie',
  TIME = 'Zeit',
  WEATHER = 'Wetter',
}
