import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrammarService } from '../../shared/services/grammar.service';
import {
  GrammarRule,
  GrammarCategory,
} from '../../shared/models/grammar.model';

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="grammar-container">
      <div class="header">
        <h1>Schweizerdeutsche Grammatik</h1>
        <p>Lerne die wichtigsten Grammatikregeln des Schweizerdeutschen.</p>
      </div>

      <div class="category-selector">
        <label for="category">Kategorie auswählen:</label>
        <select
          id="category"
          [(ngModel)]="selectedCategory"
          (change)="filterByCategory()"
        >
          <option value="all">Alle Kategorien</option>
          <option *ngFor="let category of categories" [value]="category">
            {{ category }}
          </option>
        </select>
      </div>

      <div class="grammar-rules" *ngIf="filteredRules.length > 0">
        <div
          class="card grammar-rule"
          *ngFor="let rule of filteredRules"
          [id]="'rule-' + rule.id"
        >
          <h2>{{ rule.title }}</h2>
          <p class="description">{{ rule.description }}</p>

          <div class="examples">
            <h3>Beispiele:</h3>
            <div class="example" *ngFor="let example of rule.examples">
              <div class="languages">
                <div class="german">
                  <span class="label">Deutsch:</span>
                  <span class="text">{{ example.germanPhrase }}</span>
                </div>
                <div class="arrow">→</div>
                <div class="swiss">
                  <span class="label">Schweizerdeutsch:</span>
                  <span class="text">{{ example.swissGermanPhrase }}</span>
                </div>
              </div>
              <div class="explanation" *ngIf="example.explanation">
                <span class="label">Erklärung:</span>
                <span class="text">{{ example.explanation }}</span>
              </div>
            </div>
          </div>

          <div class="category-tag">{{ rule.category }}</div>
        </div>
      </div>

      <div class="empty-state" *ngIf="filteredRules.length === 0">
        <p>
          Keine Grammatikregeln gefunden. Bitte wähle eine andere Kategorie.
        </p>
      </div>

      <div class="card tips-card">
        <h2>Tipps zum Lernen der Grammatik</h2>
        <ul>
          <li>
            Schweizerdeutsch wird hauptsächlich gesprochen, nicht geschrieben.
            Die Schreibweise kann variieren.
          </li>
          <li>
            Die Grammatikregeln können je nach Region unterschiedlich sein.
          </li>
          <li>Versuche die Regeln in Alltagsgesprächen anzuwenden.</li>
          <li>
            Höre dir Schweizerdeutsch an, um ein Gefühl für die Sprache zu
            bekommen.
          </li>
          <li>Besuche unsere Quiz-Sektion, um dein Wissen zu testen.</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .grammar-container {
        max-width: 900px;
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

      .category-selector {
        margin-bottom: 1.5rem;

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

      .grammar-rules {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .grammar-rule {
        position: relative;

        h2 {
          color: #e30613;
          margin-top: 0;
          margin-bottom: 0.5rem;
        }

        .description {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .category-tag {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background-color: #f5f5f5;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.8rem;
          color: #666;
        }
      }

      .examples {
        background-color: #f9f9f9;
        padding: 1rem;
        border-radius: 4px;

        h3 {
          margin-top: 0;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
      }

      .example {
        padding-bottom: 1rem;
        margin-bottom: 1rem;
        border-bottom: 1px solid #eee;

        &:last-child {
          border-bottom: none;
          margin-bottom: 0;
          padding-bottom: 0;
        }
      }

      .languages {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
      }

      .german,
      .swiss {
        flex: 1;
      }

      .arrow {
        margin: 0 1rem;
        color: #999;
      }

      .label {
        display: block;
        font-size: 0.8rem;
        color: #666;
        margin-bottom: 0.25rem;
      }

      .swiss .text {
        color: #e30613;
        font-weight: 500;
      }

      .explanation {
        background-color: #f0f0f0;
        padding: 0.5rem;
        border-radius: 4px;
        margin-top: 0.5rem;
        font-size: 0.9rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        background-color: #f5f5f5;
        border-radius: 8px;
        margin-bottom: 2rem;
      }

      .tips-card {
        margin-top: 2rem;

        h2 {
          color: #e30613;
          margin-top: 0;
        }

        ul {
          padding-left: 1.5rem;

          li {
            margin-bottom: 0.5rem;
            line-height: 1.5;
          }
        }
      }
    `,
  ],
})
export class GrammarComponent implements OnInit {
  rules: GrammarRule[] = [];
  filteredRules: GrammarRule[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';

  constructor(private grammarService: GrammarService) {}

  ngOnInit(): void {
    this.rules = this.grammarService.getAllGrammarRules();
    this.filteredRules = [...this.rules];
    this.categories = this.grammarService.getGrammarCategories();
  }

  filterByCategory(): void {
    if (this.selectedCategory === 'all') {
      this.filteredRules = [...this.rules];
    } else {
      this.filteredRules = this.rules.filter(
        (rule) => rule.category === this.selectedCategory
      );
    }
  }
}
