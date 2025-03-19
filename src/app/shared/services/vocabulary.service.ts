import { Injectable } from '@angular/core';
import { VocabularyItem, VocabularyCategory } from '../models/vocabulary.model';

@Injectable({
  providedIn: 'root',
})
export class VocabularyService {
  private vocabularyItems: VocabularyItem[] = [
    // Greetings
    {
      id: 1,
      germanWord: 'Hallo',
      swissGermanWord: 'Grüezi',
      category: VocabularyCategory.GREETINGS,
    },
    {
      id: 2,
      germanWord: 'Guten Tag',
      swissGermanWord: 'Grüessech',
      category: VocabularyCategory.GREETINGS,
    },
    {
      id: 3,
      germanWord: 'Auf Wiedersehen',
      swissGermanWord: 'Uf Wiederluege',
      category: VocabularyCategory.GREETINGS,
    },
    {
      id: 4,
      germanWord: 'Tschüss',
      swissGermanWord: 'Tschau / Adieu',
      category: VocabularyCategory.GREETINGS,
    },
    {
      id: 5,
      germanWord: 'Gute Nacht',
      swissGermanWord: 'Gueti Nacht',
      category: VocabularyCategory.GREETINGS,
    },

    // Everyday
    {
      id: 6,
      germanWord: 'ja',
      swissGermanWord: 'jo',
      category: VocabularyCategory.EVERYDAY,
    },
    {
      id: 7,
      germanWord: 'nein',
      swissGermanWord: 'nei',
      category: VocabularyCategory.EVERYDAY,
    },
    {
      id: 8,
      germanWord: 'danke',
      swissGermanWord: 'merci / danke',
      category: VocabularyCategory.EVERYDAY,
    },
    {
      id: 9,
      germanWord: 'bitte',
      swissGermanWord: 'bitte',
      category: VocabularyCategory.EVERYDAY,
    },
    {
      id: 10,
      germanWord: 'Entschuldigung',
      swissGermanWord: 'Exgüsi',
      category: VocabularyCategory.EVERYDAY,
    },

    // Food
    {
      id: 11,
      germanWord: 'Brot',
      swissGermanWord: 'Brot',
      category: VocabularyCategory.FOOD,
    },
    {
      id: 12,
      germanWord: 'Käse',
      swissGermanWord: 'Chäs',
      category: VocabularyCategory.FOOD,
    },
    {
      id: 13,
      germanWord: 'Milch',
      swissGermanWord: 'Milch',
      category: VocabularyCategory.FOOD,
    },
    {
      id: 14,
      germanWord: 'Wasser',
      swissGermanWord: 'Wasser',
      category: VocabularyCategory.FOOD,
    },
    {
      id: 15,
      germanWord: 'Kaffee',
      swissGermanWord: 'Kaffi',
      category: VocabularyCategory.FOOD,
    },

    // Numbers
    {
      id: 16,
      germanWord: 'eins',
      swissGermanWord: 'eis',
      category: VocabularyCategory.NUMBERS,
    },
    {
      id: 17,
      germanWord: 'zwei',
      swissGermanWord: 'zwei',
      category: VocabularyCategory.NUMBERS,
    },
    {
      id: 18,
      germanWord: 'drei',
      swissGermanWord: 'drü',
      category: VocabularyCategory.NUMBERS,
    },
    {
      id: 19,
      germanWord: 'vier',
      swissGermanWord: 'vier',
      category: VocabularyCategory.NUMBERS,
    },
    {
      id: 20,
      germanWord: 'fünf',
      swissGermanWord: 'föif',
      category: VocabularyCategory.NUMBERS,
    },

    // Travel
    {
      id: 21,
      germanWord: 'Bahnhof',
      swissGermanWord: 'Bahnhof',
      category: VocabularyCategory.TRAVEL,
    },
    {
      id: 22,
      germanWord: 'Zug',
      swissGermanWord: 'Zug',
      category: VocabularyCategory.TRAVEL,
    },
    {
      id: 23,
      germanWord: 'Auto',
      swissGermanWord: 'Auto',
      category: VocabularyCategory.TRAVEL,
    },
    {
      id: 24,
      germanWord: 'Fahrrad',
      swissGermanWord: 'Velo',
      category: VocabularyCategory.TRAVEL,
    },
    {
      id: 25,
      germanWord: 'Bus',
      swissGermanWord: 'Bus',
      category: VocabularyCategory.TRAVEL,
    },

    // Family
    {
      id: 26,
      germanWord: 'Vater',
      swissGermanWord: 'Vater',
      category: VocabularyCategory.FAMILY,
    },
    {
      id: 27,
      germanWord: 'Mutter',
      swissGermanWord: 'Muetter',
      category: VocabularyCategory.FAMILY,
    },
    {
      id: 28,
      germanWord: 'Bruder',
      swissGermanWord: 'Brüeder',
      category: VocabularyCategory.FAMILY,
    },
    {
      id: 29,
      germanWord: 'Schwester',
      swissGermanWord: 'Schwöschter',
      category: VocabularyCategory.FAMILY,
    },
    {
      id: 30,
      germanWord: 'Kind',
      swissGermanWord: 'Chind',
      category: VocabularyCategory.FAMILY,
    },

    // Time
    {
      id: 31,
      germanWord: 'heute',
      swissGermanWord: 'hüt',
      category: VocabularyCategory.TIME,
    },
    {
      id: 32,
      germanWord: 'morgen',
      swissGermanWord: 'morn',
      category: VocabularyCategory.TIME,
    },
    {
      id: 33,
      germanWord: 'gestern',
      swissGermanWord: 'geschter',
      category: VocabularyCategory.TIME,
    },
    {
      id: 34,
      germanWord: 'jetzt',
      swissGermanWord: 'jetzt',
      category: VocabularyCategory.TIME,
    },
    {
      id: 35,
      germanWord: 'später',
      swissGermanWord: 'spöter',
      category: VocabularyCategory.TIME,
    },

    // Weather
    {
      id: 36,
      germanWord: 'Sonne',
      swissGermanWord: 'Sunne',
      category: VocabularyCategory.WEATHER,
    },
    {
      id: 37,
      germanWord: 'Regen',
      swissGermanWord: 'Räge',
      category: VocabularyCategory.WEATHER,
    },
    {
      id: 38,
      germanWord: 'Schnee',
      swissGermanWord: 'Schnee',
      category: VocabularyCategory.WEATHER,
    },
    {
      id: 39,
      germanWord: 'Wind',
      swissGermanWord: 'Wind',
      category: VocabularyCategory.WEATHER,
    },
    {
      id: 40,
      germanWord: 'Wolke',
      swissGermanWord: 'Wolke',
      category: VocabularyCategory.WEATHER,
    },
  ];

  constructor() {}

  getAllVocabulary(): VocabularyItem[] {
    return [...this.vocabularyItems];
  }

  getVocabularyByCategory(category: VocabularyCategory): VocabularyItem[] {
    return this.vocabularyItems.filter((item) => item.category === category);
  }

  getVocabularyCategories(): string[] {
    return Object.values(VocabularyCategory);
  }

  getRandomVocabularyItems(count: number): VocabularyItem[] {
    const shuffled = [...this.vocabularyItems].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  }
}
