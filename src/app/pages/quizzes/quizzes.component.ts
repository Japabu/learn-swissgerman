import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuizService } from '../../shared/services/quiz.service';
import {
  QuizQuestion,
  QuizType,
  QuizDifficulty,
  QuizSettings,
  QuizResult,
} from '../../shared/models/quiz.model';

@Component({
  selector: 'app-quizzes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="quiz-container">
      <div class="header">
        <h1>Schweizerdeutsch Quiz</h1>
        <p>
          Teste dein Wissen über Schweizerdeutsch mit unseren interaktiven
          Quizzes.
        </p>
      </div>

      <ng-container *ngIf="!quizStarted && !quizCompleted">
        <div class="card quiz-settings">
          <h2>Quiz Einstellungen</h2>

          <div class="form-group">
            <label for="quizType">Quiz Typ:</label>
            <select id="quizType" [(ngModel)]="settings.type">
              <option [value]="quizTypes.VOCABULARY">Vokabular</option>
              <option [value]="quizTypes.GRAMMAR">Grammatik</option>
              <option [value]="quizTypes.MIXED">Gemischt</option>
            </select>
          </div>

          <div class="form-group">
            <label for="difficulty">Schwierigkeitsgrad:</label>
            <select id="difficulty" [(ngModel)]="settings.difficulty">
              <option [value]="difficulties.EASY">Einfach</option>
              <option [value]="difficulties.MEDIUM">Mittel</option>
              <option [value]="difficulties.HARD">Schwer</option>
            </select>
          </div>

          <div class="form-group">
            <label for="questionCount">Anzahl der Fragen:</label>
            <select id="questionCount" [(ngModel)]="settings.questionCount">
              <option [value]="5">5</option>
              <option [value]="10">10</option>
              <option [value]="15">15</option>
              <option [value]="20">20</option>
            </select>
          </div>

          <button class="btn" (click)="startQuiz()">Quiz starten</button>
        </div>

        <div class="card quiz-info">
          <h2>So funktioniert's</h2>
          <ul>
            <li>Wähle deinen Quiz-Typ und Schwierigkeitsgrad.</li>
            <li>
              Beantworte die Fragen, indem du die richtige Option auswählst.
            </li>
            <li>
              Nach jeder Antwort erhältst du Feedback, ob deine Antwort richtig
              war.
            </li>
            <li>
              Am Ende des Quiz siehst du deine Gesamtpunktzahl und wie gut du
              abgeschnitten hast.
            </li>
          </ul>
        </div>
      </ng-container>

      <ng-container
        *ngIf="quizStarted && !quizCompleted && questions.length > 0"
      >
        <div class="card quiz-question">
          <div class="quiz-progress">
            <span
              >Frage {{ currentQuestionIndex + 1 }} von
              {{ questions.length }}</span
            >
            <div class="progress-bar">
              <div
                class="progress"
                [style.width.%]="
                  ((currentQuestionIndex + 1) / questions.length) * 100
                "
              ></div>
            </div>
          </div>

          <h2>{{ currentQuestion.question }}</h2>

          <div class="options">
            <div
              *ngFor="let option of currentQuestion.options"
              class="option"
              [class.selected]="selectedAnswer === option"
              [class.correct]="
                answerSubmitted && option === currentQuestion.correctAnswer
              "
              [class.incorrect]="
                answerSubmitted &&
                selectedAnswer === option &&
                option !== currentQuestion.correctAnswer
              "
              (click)="selectAnswer(option)"
            >
              {{ option }}
            </div>
          </div>

          <div class="controls">
            <button
              class="btn"
              (click)="submitAnswer()"
              [disabled]="!selectedAnswer || answerSubmitted"
            >
              Antwort prüfen
            </button>

            <button
              class="btn"
              (click)="nextQuestion()"
              *ngIf="answerSubmitted"
            >
              {{
                currentQuestionIndex < questions.length - 1
                  ? 'Nächste Frage'
                  : 'Quiz beenden'
              }}
            </button>
          </div>

          <div class="feedback" *ngIf="answerSubmitted">
            <div
              class="result"
              [class.correct-answer]="isCorrect"
              [class.wrong-answer]="!isCorrect"
            >
              <span *ngIf="isCorrect">Richtig!</span>
              <span *ngIf="!isCorrect"
                >Falsch! Die richtige Antwort ist:
                {{ currentQuestion.correctAnswer }}</span
              >
            </div>
            <div class="explanation" *ngIf="currentQuestion.explanation">
              <strong>Erklärung:</strong> {{ currentQuestion.explanation }}
            </div>
          </div>
        </div>
      </ng-container>

      <ng-container *ngIf="quizCompleted">
        <div class="card quiz-results">
          <h2>Quiz Ergebnis</h2>

          <div class="score-container">
            <div class="score">{{ result.score }}%</div>
            <div class="score-label">Erreichte Punktzahl</div>
          </div>

          <div class="stats">
            <div class="stat">
              <div class="stat-value">{{ result.correctAnswers }}</div>
              <div class="stat-label">Richtige Antworten</div>
            </div>
            <div class="stat">
              <div class="stat-value">{{ result.wrongAnswers }}</div>
              <div class="stat-label">Falsche Antworten</div>
            </div>
            <div class="stat">
              <div class="stat-value">{{ result.totalQuestions }}</div>
              <div class="stat-label">Gesamt Fragen</div>
            </div>
          </div>

          <div class="feedback-message">
            <ng-container *ngIf="result.score >= 80">
              <h3>Hervorragend!</h3>
              <p>Du beherrschst Schweizerdeutsch sehr gut. Weiter so!</p>
            </ng-container>
            <ng-container *ngIf="result.score >= 60 && result.score < 80">
              <h3>Gut gemacht!</h3>
              <p>
                Du hast ein gutes Verständnis von Schweizerdeutsch. Übe weiter,
                um noch besser zu werden.
              </p>
            </ng-container>
            <ng-container *ngIf="result.score >= 40 && result.score < 60">
              <h3>Nicht schlecht!</h3>
              <p>
                Du bist auf dem richtigen Weg. Übe weiter, um dein
                Schweizerdeutsch zu verbessern.
              </p>
            </ng-container>
            <ng-container *ngIf="result.score < 40">
              <h3>Guter Anfang!</h3>
              <p>
                Schweizerdeutsch braucht Zeit zum Lernen. Mach weiter und du
                wirst dich verbessern.
              </p>
            </ng-container>
          </div>

          <div class="controls">
            <button class="btn" (click)="retryQuiz()">Quiz wiederholen</button>
            <button class="btn-outline" (click)="resetQuiz()">
              Zurück zur Auswahl
            </button>
          </div>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
      .quiz-container {
        max-width: 800px;
        margin: 0 auto;
      }

      .header {
        text-align: center;
        margin-bottom: 2rem;

        h1 {
          color: #e30613;
          margin-bottom: 0.5rem;
        }
      }

      .quiz-settings,
      .quiz-info {
        margin-bottom: 1.5rem;
      }

      .form-group {
        margin-bottom: 1rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        select {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
      }

      .quiz-question {
        padding: 1.5rem;
      }

      .quiz-progress {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.5rem;

        span {
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          color: #666;
        }
      }

      .progress-bar {
        height: 8px;
        background-color: #eee;
        border-radius: 4px;
        overflow: hidden;
      }

      .progress {
        height: 100%;
        background-color: #e30613;
        transition: width 0.3s;
      }

      .options {
        margin: 1.5rem 0;
      }

      .option {
        padding: 1rem;
        margin-bottom: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: #f5f5f5;
        }

        &.selected {
          border-color: #e30613;
          background-color: rgba(227, 6, 19, 0.05);
        }

        &.correct {
          border-color: #28a745;
          background-color: rgba(40, 167, 69, 0.1);
        }

        &.incorrect {
          border-color: #dc3545;
          background-color: rgba(220, 53, 69, 0.1);
        }
      }

      .controls {
        display: flex;
        gap: 1rem;
        margin-top: 1.5rem;
      }

      .feedback {
        margin-top: 1.5rem;
        padding: 1rem;
        border-radius: 4px;
      }

      .result {
        font-weight: 600;
        margin-bottom: 0.5rem;

        &.correct-answer {
          color: #28a745;
        }

        &.wrong-answer {
          color: #dc3545;
        }
      }

      .explanation {
        font-size: 0.9rem;
        line-height: 1.5;
        color: #666;
      }

      .quiz-results {
        text-align: center;
        padding: 2rem;
      }

      .score-container {
        margin: 2rem 0;
      }

      .score {
        font-size: 4rem;
        font-weight: 700;
        color: #e30613;
      }

      .score-label {
        font-size: 1.2rem;
        color: #666;
      }

      .stats {
        display: flex;
        justify-content: space-around;
        margin-bottom: 2rem;
      }

      .stat-value {
        font-size: 2rem;
        font-weight: 600;
      }

      .stat-label {
        font-size: 0.9rem;
        color: #666;
      }

      .feedback-message {
        margin-bottom: 2rem;

        h3 {
          color: #e30613;
          margin-bottom: 0.5rem;
        }
      }
    `,
  ],
})
export class QuizzesComponent implements OnInit {
  quizTypes = QuizType;
  difficulties = QuizDifficulty;

  settings: QuizSettings = {
    type: QuizType.VOCABULARY,
    difficulty: QuizDifficulty.EASY,
    questionCount: 5,
  };

  questions: QuizQuestion[] = [];
  currentQuestionIndex: number = 0;
  currentQuestion!: QuizQuestion;
  selectedAnswer: string = '';
  answerSubmitted: boolean = false;
  isCorrect: boolean = false;

  quizStarted: boolean = false;
  quizCompleted: boolean = false;

  result: QuizResult = {
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
    score: 0,
    timeTaken: 0,
  };

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {}

  startQuiz(): void {
    this.questions = this.quizService.generateQuiz(this.settings);

    // Check if we have questions available
    if (this.questions.length === 0) {
      alert(
        'Keine Fragen für die ausgewählten Kriterien gefunden. Bitte wähle andere Einstellungen.'
      );
      return;
    }

    this.currentQuestionIndex = 0;
    this.currentQuestion = this.questions[0];
    this.quizStarted = true;
    this.quizCompleted = false;
    this.selectedAnswer = '';
    this.answerSubmitted = false;
    this.result = {
      totalQuestions: this.questions.length,
      correctAnswers: 0,
      wrongAnswers: 0,
      score: 0,
      timeTaken: 0,
    };
  }

  selectAnswer(option: string): void {
    if (!this.answerSubmitted) {
      this.selectedAnswer = option;
    }
  }

  submitAnswer(): void {
    if (this.selectedAnswer && !this.answerSubmitted) {
      this.answerSubmitted = true;
      this.isCorrect = this.quizService.checkAnswer(
        this.currentQuestion,
        this.selectedAnswer
      );

      if (this.isCorrect) {
        this.result.correctAnswers++;
      } else {
        this.result.wrongAnswers++;
      }

      // Calculate final score when on the last question
      if (this.currentQuestionIndex === this.questions.length - 1) {
        this.calculateResults();
      }
    }
  }

  nextQuestion(): void {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.currentQuestion = this.questions[this.currentQuestionIndex];
      this.selectedAnswer = ''; // Clear selected answer
      this.answerSubmitted = false; // Reset answer submission
    } else {
      // If this is the last question, mark the quiz as completed
      this.quizCompleted = true;
      this.calculateResults(); // Calculate final results
    }
  }

  calculateResults(): void {
    this.result.score = Math.round(
      (this.result.correctAnswers / this.result.totalQuestions) * 100
    );
  }

  retryQuiz(): void {
    this.startQuiz();
  }

  resetQuiz(): void {
    this.quizStarted = false;
    this.quizCompleted = false;
    this.selectedAnswer = '';
    this.answerSubmitted = false;
  }
}
