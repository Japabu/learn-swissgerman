import { Injectable } from '@angular/core';
import {
  QuizQuestion,
  QuizType,
  QuizDifficulty,
  QuizSettings,
} from '../models/quiz.model';
import { VocabularyService } from './vocabulary.service';
import { GrammarService } from './grammar.service';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private questions: QuizQuestion[] = [
    // Vocabulary - Easy
    {
      id: 1,
      question: 'Was bedeutet "Grüezi" auf Hochdeutsch?',
      options: ['Guten Tag', 'Auf Wiedersehen', 'Gute Nacht', 'Entschuldigung'],
      correctAnswer: 'Guten Tag',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 2,
      question: 'Wie sagt man "danke" auf Schweizerdeutsch?',
      options: ['merci / danke', 'bitte', 'guet', 'exgüsi'],
      correctAnswer: 'merci / danke',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 3,
      question: 'Was ist die schweizerdeutsche Übersetzung für "Fahrrad"?',
      options: ['Velo', 'Rad', 'Fahrrad', 'Auto'],
      correctAnswer: 'Velo',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 4,
      question: 'Wie heißt "Käse" auf Schweizerdeutsch?',
      options: ['Chäs', 'Käss', 'Käs', 'Cheis'],
      correctAnswer: 'Chäs',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 13,
      question: 'Was bedeutet "Hüt" auf Hochdeutsch?',
      options: ['Heute', 'Morgen', 'Gestern', 'Jetzt'],
      correctAnswer: 'Heute',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 14,
      question: 'Wie sagt man "ja" auf Schweizerdeutsch?',
      options: ['jo', 'ja', 'jep', 'jawoll'],
      correctAnswer: 'jo',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 15,
      question: 'Was bedeutet "Znüni" auf Hochdeutsch?',
      options: ['Zweites Frühstück', 'Neun Uhr', 'Mittagessen', 'Kaffeepause'],
      correctAnswer: 'Zweites Frühstück',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.EASY,
    },

    // Vocabulary - Medium
    {
      id: 5,
      question: 'Was bedeutet "morn" auf Hochdeutsch?',
      options: ['morgen', 'heute', 'gestern', 'jetzt'],
      correctAnswer: 'morgen',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 6,
      question: 'Wie sagt man "Ich gehe nach Hause" auf Schweizerdeutsch?',
      options: [
        'Ich gang hei',
        'Ich gehe Haus',
        'Ich gehen Haus',
        'Ich geh nach Hause',
      ],
      correctAnswer: 'Ich gang hei',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 16,
      question: 'Was ist die schweizerdeutsche Übersetzung für "Kind"?',
      options: ['Chind', 'Kind', 'Kindli', 'Kinder'],
      correctAnswer: 'Chind',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 17,
      question: 'Wie heißt "Kaffee" auf Schweizerdeutsch?',
      options: ['Kaffi', 'Kaff', 'Kaffee', 'Kafi'],
      correctAnswer: 'Kaffi',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 18,
      question: 'Was bedeutet "luege" auf Hochdeutsch?',
      options: ['schauen', 'lügen', 'lachen', 'lauschen'],
      correctAnswer: 'schauen',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.MEDIUM,
    },

    // Vocabulary - Hard
    {
      id: 7,
      question:
        'Was ist die richtige Übersetzung für "Wolke" auf Schweizerdeutsch?',
      options: ['Wolke', 'Wulke', 'Wölkli', 'Wuuke'],
      correctAnswer: 'Wolke',
      explanation:
        'In vielen schweizerdeutschen Dialekten bleibt "Wolke" ähnlich wie im Hochdeutschen.',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 19,
      question: 'Was bedeutet "Fisimatente" im Schweizerdeutschen?',
      options: ['Ausreden', 'Umstände', 'Feinheiten', 'Schwierigkeiten'],
      correctAnswer: 'Umstände',
      explanation:
        'Fisimatente bedeutet "unnötige Umstände" oder "Ausflüchte".',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 20,
      question: 'Was ist die Bedeutung von "Bünzli" im Schweizerdeutschen?',
      options: ['Spießer', 'Bäcker', 'Polizist', 'Briefträger'],
      correctAnswer: 'Spießer',
      explanation:
        'Ein "Bünzli" ist ein übertrieben korrekter, kleinkarierter Mensch, vergleichbar mit "Spießer".',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 21,
      question: 'Was bedeutet "Röstigraben" in der Schweiz?',
      options: [
        'Kulturelle Grenze zwischen deutsch- und französischsprachiger Schweiz',
        'Ein traditionelles Schweizer Gericht',
        'Ein Graben für die Zubereitung von Rösti',
        'Eine Bergkette in den Alpen',
      ],
      correctAnswer:
        'Kulturelle Grenze zwischen deutsch- und französischsprachiger Schweiz',
      explanation:
        'Der "Röstigraben" bezeichnet die kulturelle und sprachliche Grenze zwischen der deutschsprachigen und französischsprachigen Schweiz.',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 22,
      question: 'Was bedeutet "Täfeli" auf Hochdeutsch?',
      options: ['Bonbon', 'Tafel', 'Tafeltuch', 'Tagebuch'],
      correctAnswer: 'Bonbon',
      explanation:
        'Ein "Täfeli" ist in der Schweiz ein Bonbon oder ein kleines Stück Schokolade.',
      type: QuizType.VOCABULARY,
      difficulty: QuizDifficulty.HARD,
    },

    // Grammar - Easy
    {
      id: 8,
      question: 'Wie lautet "wir" auf Schweizerdeutsch?',
      options: ['mir', 'wir', 'wi', 'mier'],
      correctAnswer: 'mir',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 9,
      question:
        'Wie bildet man im Schweizerdeutschen die Verkleinerungsform (Diminutiv)?',
      options: [
        'Mit der Endung -li',
        'Mit der Endung -chen',
        'Mit der Endung -le',
        'Mit der Endung -lein',
      ],
      correctAnswer: 'Mit der Endung -li',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 23,
      question: 'Wie sagt man "ich bin" auf Schweizerdeutsch?',
      options: ['ich bi', 'ich bin', 'i be', 'ig bi'],
      correctAnswer: 'ich bi',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 24,
      question:
        'Welcher Artikel steht vor "Huus" (Haus) im Schweizerdeutschen?',
      options: ['s', 'de', 'd', 'es'],
      correctAnswer: 's',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.EASY,
    },
    {
      id: 25,
      question:
        'Wie konjugiert man "gehen" in der 1. Person Singular im Schweizerdeutschen?',
      options: ['ich gah', 'ich gang', 'ich gehe', 'ich goh'],
      correctAnswer: 'ich gang',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.EASY,
    },

    // Grammar - Medium
    {
      id: 10,
      question:
        'Wie lautet die schweizerdeutsche Form von "Ich habe gegessen"?',
      options: [
        'Ich han gässe',
        'Ich habe gesse',
        'Ich habe gegessen',
        'Ich esse',
      ],
      correctAnswer: 'Ich han gässe',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 11,
      question: 'Wie fragt man "Was machst du heute?" auf Schweizerdeutsch?',
      options: [
        'Was machsch du hüt?',
        'Was machst du heute?',
        'Was du machs heute?',
        'Was du hüt mache?',
      ],
      correctAnswer: 'Was machsch du hüt?',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 26,
      question:
        'Wie bildet man im Schweizerdeutschen den Plural von "Huus" (Haus)?',
      options: ['Hüüser', 'Huuse', 'Hüser', 'Huusen'],
      correctAnswer: 'Hüüser',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 27,
      question:
        'Wie werden Präpositionen mit Artikeln im Schweizerdeutschen oft zusammengezogen?',
      options: [
        'ufem (auf dem), im (in dem), am (an dem)',
        'aufem (auf dem), indem (in dem), andem (an dem)',
        'Sie werden nie zusammengezogen',
        'uf de (auf dem), i de (in dem), a de (an dem)',
      ],
      correctAnswer: 'ufem (auf dem), im (in dem), am (an dem)',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.MEDIUM,
    },
    {
      id: 28,
      question: 'Wie drückt man "ich möchte" im Schweizerdeutschen aus?',
      options: ['ich wett', 'ich möcht', 'ich will', 'ich hätt gern'],
      correctAnswer: 'ich wett',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.MEDIUM,
    },

    // Grammar - Hard
    {
      id: 12,
      question:
        'Welche Aussage über das Präteritum im Schweizerdeutschen ist korrekt?',
      options: [
        'Es wird praktisch nicht verwendet, stattdessen nutzt man das Perfekt',
        'Es wird wie im Hochdeutschen regelmäßig verwendet',
        'Es wird nur in der Schriftsprache verwendet',
        'Es wird nur in formellen Situationen verwendet',
      ],
      correctAnswer:
        'Es wird praktisch nicht verwendet, stattdessen nutzt man das Perfekt',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 29,
      question:
        'Welche besondere grammatikalische Konstruktion gibt es im Schweizerdeutschen für "gehen + Infinitiv"?',
      options: [
        'gah + Infinitiv (gah poschte = einkaufen gehen)',
        'gang zum + Infinitiv',
        'gönd + Infinitiv',
        'Es gibt keine spezielle Konstruktion',
      ],
      correctAnswer: 'gah + Infinitiv (gah poschte = einkaufen gehen)',
      explanation:
        'Im Schweizerdeutschen verwendet man "gah" vor dem Infinitiv, um "gehen, um etwas zu tun" auszudrücken.',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 30,
      question:
        'Wie bildet man im Schweizerdeutschen den Konjunktiv II (Conditional)?',
      options: [
        'Mit würd + Infinitiv und mit veränderten Stammformen',
        'Ausschließlich mit der Endung -ti',
        'Nur mit dem Hilfsverb "täte"',
        'Der Konjunktiv II existiert im Schweizerdeutschen nicht',
      ],
      correctAnswer: 'Mit würd + Infinitiv und mit veränderten Stammformen',
      explanation:
        'Der Konjunktiv II wird im Schweizerdeutschen entweder mit "würd" + Infinitiv gebildet oder mit speziellen Stammformen wie "wär" (wäre) oder "hett" (hätte).',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 31,
      question:
        'Was ist eine Besonderheit bei der Wortstellung im Schweizerdeutschen?',
      options: [
        'In Nebensätzen mit "dass" steht das Verb nicht am Ende',
        'Das Verb steht immer an erster Stelle',
        'Adjektive stehen immer nach dem Substantiv',
        'Es gibt keine Unterschiede zum Hochdeutschen',
      ],
      correctAnswer: 'In Nebensätzen mit "dass" steht das Verb nicht am Ende',
      explanation:
        'Anders als im Hochdeutschen steht in schweizerdeutschen Nebensätzen mit "dass" das Verb nicht am Ende des Satzes.',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.HARD,
    },
    {
      id: 32,
      question: 'Wie wird der Genitiv im Schweizerdeutschen ausgedrückt?',
      options: [
        'Durch Umschreibung mit "vo" (von)',
        'Mit der Endung -s wie im Hochdeutschen',
        'Mit den Possessivpronomen sin/ira',
        'Der Genitiv existiert im Schweizerdeutschen nicht',
      ],
      correctAnswer: 'Durch Umschreibung mit "vo" (von)',
      explanation:
        'Der Genitiv wird im Schweizerdeutschen meist durch "vo" (von) umschrieben, z.B. "s Huus vo de Muetter" statt "das Haus der Mutter".',
      type: QuizType.GRAMMAR,
      difficulty: QuizDifficulty.HARD,
    },
  ];

  constructor(
    private vocabularyService: VocabularyService,
    private grammarService: GrammarService
  ) {}

  getQuestionsByType(type: QuizType): QuizQuestion[] {
    if (type === QuizType.MIXED) {
      return [...this.questions];
    }
    return this.questions.filter((question) => question.type === type);
  }

  getQuestionsByDifficulty(difficulty: QuizDifficulty): QuizQuestion[] {
    return this.questions.filter(
      (question) => question.difficulty === difficulty
    );
  }

  getQuestionsByTypeAndDifficulty(
    type: QuizType,
    difficulty: QuizDifficulty
  ): QuizQuestion[] {
    if (type === QuizType.MIXED) {
      return this.getQuestionsByDifficulty(difficulty);
    }
    return this.questions.filter(
      (question) => question.type === type && question.difficulty === difficulty
    );
  }

  generateQuiz(settings: QuizSettings): QuizQuestion[] {
    let availableQuestions: QuizQuestion[];

    if (settings.type === QuizType.MIXED) {
      availableQuestions = [...this.questions];
    } else {
      availableQuestions = this.questions.filter(
        (q) => q.type === settings.type
      );
    }

    // Fix for the MIXED difficulty which doesn't exist in the enum
    // We'll treat undefined difficulty as "all difficulties"
    availableQuestions = availableQuestions.filter(
      (q) => !settings.difficulty || q.difficulty === settings.difficulty
    );

    // Shuffle and limit
    const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(settings.questionCount, shuffled.length));
  }

  checkAnswer(question: QuizQuestion, answer: string): boolean {
    return question.correctAnswer === answer;
  }

  // Helper method to generate vocabulary quizzes dynamically
  generateVocabularyQuestions(): QuizQuestion[] {
    const vocabulary = this.vocabularyService.getAllVocabulary();
    const questions: QuizQuestion[] = [];
    let id = 100; // Starting ID to avoid conflicts with static questions

    // Generate questions for German to Swiss German
    vocabulary.forEach((item) => {
      questions.push({
        id: id++,
        question: `Was bedeutet "${item.germanWord}" auf Schweizerdeutsch?`,
        options: this.generateOptions(
          vocabulary,
          item.swissGermanWord,
          'swissGermanWord'
        ),
        correctAnswer: item.swissGermanWord,
        type: QuizType.VOCABULARY,
        difficulty: QuizDifficulty.MEDIUM,
      });
    });

    // Generate questions for Swiss German to German
    vocabulary.forEach((item) => {
      questions.push({
        id: id++,
        question: `Was bedeutet "${item.swissGermanWord}" auf Hochdeutsch?`,
        options: this.generateOptions(
          vocabulary,
          item.germanWord,
          'germanWord'
        ),
        correctAnswer: item.germanWord,
        type: QuizType.VOCABULARY,
        difficulty: QuizDifficulty.MEDIUM,
      });
    });

    return questions;
  }

  private generateOptions(
    vocabulary: any[],
    correctAnswer: string,
    field: string
  ): string[] {
    const options = [correctAnswer];
    const filteredVocabulary = vocabulary.filter(
      (item) => item[field] !== correctAnswer
    );

    // Shuffle and pick 3 random wrong answers
    const shuffled = [...filteredVocabulary].sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3 && i < shuffled.length; i++) {
      options.push(shuffled[i][field]);
    }

    // Shuffle options
    return options.sort(() => 0.5 - Math.random());
  }
}
