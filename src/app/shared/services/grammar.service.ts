import { Injectable } from '@angular/core';
import { GrammarRule, GrammarCategory } from '../models/grammar.model';

@Injectable({
  providedIn: 'root',
})
export class GrammarService {
  private grammarRules: GrammarRule[] = [
    {
      id: 1,
      title: 'Präsens (Gegenwart)',
      description:
        'Im Schweizerdeutschen wird das Präsens ähnlich wie im Hochdeutschen gebildet, jedoch mit leichten Abweichungen in der Aussprache und teilweise in den Endungen.',
      examples: [
        {
          germanPhrase: 'Ich gehe nach Hause',
          swissGermanPhrase: 'Ich gang hei',
          explanation:
            'Das Verb "gehen" wird zu "gang" und "nach Hause" zu "hei"',
        },
        {
          germanPhrase: 'Du hast ein Buch',
          swissGermanPhrase: 'Du hesch es Buech',
          explanation:
            'Das Verb "haben" wird zu "hesch" und "ein Buch" zu "es Buech"',
        },
        {
          germanPhrase: 'Wir essen Brot',
          swissGermanPhrase: 'Mir ässed Brot',
          explanation: 'Das Verb "essen" wird zu "ässed" und "wir" zu "mir"',
        },
      ],
      category: GrammarCategory.VERBS,
    },
    {
      id: 2,
      title: 'Personalpronomen',
      description:
        'Die Personalpronomen im Schweizerdeutschen unterscheiden sich vom Hochdeutschen und können je nach Region leicht variieren.',
      examples: [
        {
          germanPhrase: 'ich - du - er/sie/es - wir - ihr - sie',
          swissGermanPhrase: 'ich - du - er/si/es - mir - ihr - si',
          explanation:
            'Beachte besonders "mir" statt "wir" und "si" statt "sie"',
        },
        {
          germanPhrase: 'Wir gehen ins Kino',
          swissGermanPhrase: 'Mir gönd is Kino',
          explanation: '"Wir" wird zu "mir" und "gehen" zu "gönd"',
        },
      ],
      category: GrammarCategory.PRONOUNS,
    },
    {
      id: 3,
      title: 'Verben im Infinitiv',
      description:
        'Infinitive enden im Schweizerdeutschen oft auf "-e" statt auf "-en" wie im Hochdeutschen.',
      examples: [
        {
          germanPhrase: 'gehen, machen, kommen',
          swissGermanPhrase: 'gah, mache, cho',
          explanation:
            'Beachte die unterschiedlichen Endungen und teilweise komplett andere Formen',
        },
        {
          germanPhrase: 'Ich will schlafen',
          swissGermanPhrase: 'Ich will schlafe',
          explanation: 'Der Infinitiv "schlafen" wird zu "schlafe"',
        },
      ],
      category: GrammarCategory.VERBS,
    },
    {
      id: 4,
      title: 'Bestimmte und Unbestimmte Artikel',
      description:
        'Artikel unterscheiden sich im Schweizerdeutschen vom Hochdeutschen und folgen anderen Regeln.',
      examples: [
        {
          germanPhrase: 'der, die, das - ein, eine',
          swissGermanPhrase: 'de, d, s - en, e, es',
          explanation:
            'Unbestimmte Artikel variieren je nach Geschlecht: "en" (m), "e" (f), "es" (n)',
        },
        {
          germanPhrase: 'Das ist ein Haus',
          swissGermanPhrase: 'Das isch es Huus',
          explanation:
            'Der unbestimmte Artikel für Neutrum ist "es" statt "ein"',
        },
      ],
      category: GrammarCategory.ARTICLES,
    },
    {
      id: 5,
      title: 'Satzstellung bei Fragen',
      description:
        'Die Satzstellung bei Fragen im Schweizerdeutschen folgt ähnlichen Regeln wie im Hochdeutschen, mit einigen Besonderheiten.',
      examples: [
        {
          germanPhrase: 'Gehst du nach Hause?',
          swissGermanPhrase: 'Gasch du hei?',
          explanation: 'Das Verb am Anfang, dann das Subjekt',
        },
        {
          germanPhrase: 'Was machst du heute?',
          swissGermanPhrase: 'Was machsch du hüt?',
          explanation: 'Fragewort, dann Verb, dann Subjekt',
        },
      ],
      category: GrammarCategory.SENTENCE_STRUCTURE,
    },
    {
      id: 6,
      title: 'Vergangenheit (Perfekt)',
      description:
        'Im Schweizerdeutschen wird hauptsächlich das Perfekt für die Vergangenheit verwendet, das Präteritum existiert praktisch nicht.',
      examples: [
        {
          germanPhrase: 'Ich habe gegessen',
          swissGermanPhrase: 'Ich han gässe',
          explanation: '"habe" wird zu "han" und "gegessen" zu "gässe"',
        },
        {
          germanPhrase: 'Wir sind gegangen',
          swissGermanPhrase: 'Mir sind gange',
          explanation: '"Wir" wird zu "mir" und "gegangen" zu "gange"',
        },
      ],
      category: GrammarCategory.VERBS,
    },
    {
      id: 7,
      title: 'Diminutive (Verkleinerungsformen)',
      description:
        'Im Schweizerdeutschen werden Diminutive häufig mit "-li" gebildet und viel häufiger verwendet als im Hochdeutschen.',
      examples: [
        {
          germanPhrase: 'Haus → Häuschen',
          swissGermanPhrase: 'Huus → Hüüsli',
          explanation: 'Die Verkleinerungsform wird mit "-li" gebildet',
        },
        {
          germanPhrase: 'Kind → Kindchen',
          swissGermanPhrase: 'Chind → Chindli',
          explanation: 'Auch hier wird die Endung "-li" verwendet',
        },
      ],
      category: GrammarCategory.COMPARISON,
    },
    {
      id: 8,
      title: 'Präpositionen mit Ort und Richtung',
      description:
        'Präpositionen im Schweizerdeutschen folgen anderen Regeln als im Hochdeutschen, besonders bei Ortsangaben.',
      examples: [
        {
          germanPhrase: 'in die Stadt gehen',
          swissGermanPhrase: 'i d Stadt gah',
          explanation: '"in die" wird verkürzt zu "i d"',
        },
        {
          germanPhrase: 'auf dem Tisch',
          swissGermanPhrase: 'ufem Tisch',
          explanation: '"auf dem" wird zusammengezogen zu "ufem"',
        },
      ],
      category: GrammarCategory.PREPOSITIONS,
    },
  ];

  constructor() {}

  getAllGrammarRules(): GrammarRule[] {
    return [...this.grammarRules];
  }

  getGrammarRulesByCategory(category: GrammarCategory): GrammarRule[] {
    return this.grammarRules.filter((rule) => rule.category === category);
  }

  getGrammarCategories(): string[] {
    return Object.values(GrammarCategory);
  }

  getGrammarRuleById(id: number): GrammarRule | undefined {
    return this.grammarRules.find((rule) => rule.id === id);
  }
}
