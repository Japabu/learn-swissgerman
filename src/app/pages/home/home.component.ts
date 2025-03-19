import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-container">
      <div class="hero">
        <h1>Willkomme zum Schwiizerdütsch Lerne!</h1>
        <p>
          Lerne Schweizerdeutsch einfach und effektiv mit unseren interaktiven
          Übungen und Quizzes.
        </p>
      </div>

      <div class="features">
        <div class="card feature-card">
          <h2>Vokabular</h2>
          <p>
            Lerne wichtige Schweizerdeutsche Wörter und Redewendungen für den
            Alltag.
          </p>
          <a routerLink="/vocabulary" class="btn">Zum Vokabular</a>
        </div>

        <div class="card feature-card">
          <h2>Grammatik</h2>
          <p>Verstehe die Grundlagen der Schweizerdeutschen Grammatik.</p>
          <a routerLink="/grammar" class="btn">Zur Grammatik</a>
        </div>

        <div class="card feature-card">
          <h2>Quiz</h2>
          <p>Teste dein Wissen mit unseren interaktiven Quizzes.</p>
          <a routerLink="/quizzes" class="btn">Zu den Quizzes</a>
        </div>
      </div>

      <div class="card info-card">
        <h2>Was ist Schweizerdeutsch?</h2>
        <p>
          Schweizerdeutsch (oder Schwiizerdütsch) ist eine Gruppe von
          alemannischen Dialekten, die in der Schweiz gesprochen werden. Im
          Gegensatz zum Hochdeutschen hat Schweizerdeutsch einige Besonderheiten
          in der Aussprache, Grammatik und im Wortschatz.
        </p>
        <p>
          Obwohl es keine standardisierte schriftliche Form gibt, ist
          Schweizerdeutsch die Alltagssprache der deutschsprachigen Schweizer
          und ein wichtiger Teil der schweizerischen Identität.
        </p>
      </div>
    </div>
  `,
  styles: [
    `
      .home-container {
        max-width: 1200px;
        margin: 0 auto;
      }

      .hero {
        text-align: center;
        margin-bottom: 2rem;

        h1 {
          font-size: 2.5rem;
          color: #e30613;
          margin-bottom: 1rem;
        }

        p {
          font-size: 1.2rem;
          max-width: 800px;
          margin: 0 auto;
        }
      }

      .features {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .feature-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;

        h2 {
          color: #e30613;
          margin-top: 0;
        }

        a {
          margin-top: auto;
        }
      }

      .info-card {
        margin-top: 2rem;

        h2 {
          color: #e30613;
        }

        p {
          line-height: 1.6;
        }
      }
    `,
  ],
})
export class HomeComponent {}
