export interface GrammarRule {
  id: number;
  title: string;
  description: string;
  examples: GrammarExample[];
  category: GrammarCategory;
}

export interface GrammarExample {
  germanPhrase: string;
  swissGermanPhrase: string;
  explanation?: string;
}

export enum GrammarCategory {
  VERBS = 'Verben',
  ARTICLES = 'Artikel',
  PRONOUNS = 'Pronomen',
  SENTENCE_STRUCTURE = 'Satzstellung',
  PREPOSITIONS = 'Präpositionen',
  COMPARISON = 'Vergleich',
}
