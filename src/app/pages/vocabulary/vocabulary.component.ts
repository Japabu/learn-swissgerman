import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VocabularyService } from '../../shared/services/vocabulary.service';
import {
  VocabularyItem,
  VocabularyCategory,
} from '../../shared/models/vocabulary.model';

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="vocabulary-container">
      <div class="header">
        <h1>Schweizerdeutsch Vokabular</h1>
        <p>Lerne wichtige Wörter und Redewendungen auf Schweizerdeutsch.</p>
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

      <div class="search-bar">
        <input
          type="text"
          [(ngModel)]="searchTerm"
          (input)="search()"
          placeholder="Nach deutschem oder schweizerdeutschem Wort suchen..."
        />
      </div>

      <div class="vocabulary-list" *ngIf="filteredVocabulary.length > 0">
        <div
          class="card vocabulary-card"
          *ngFor="let item of filteredVocabulary"
        >
          <div class="vocabulary-item">
            <div class="vocabulary-word german">
              <span class="label">Deutsch:</span>
              <span class="word">{{ item.germanWord }}</span>
            </div>
            <div class="vocabulary-arrow">→</div>
            <div class="vocabulary-word swiss">
              <span class="label">Schweizerdeutsch:</span>
              <span class="word">{{ item.swissGermanWord }}</span>
            </div>
          </div>
          <div class="vocabulary-category">{{ item.category }}</div>
        </div>
      </div>

      <div class="empty-state" *ngIf="filteredVocabulary.length === 0">
        <p>
          Keine Vokabeln gefunden. Bitte versuche eine andere Suche oder
          Kategorie.
        </p>
      </div>

      <div class="card info-card">
        <h2>Lerntipps</h2>
        <ul>
          <li>Übe täglich ein paar Minuten, um dein Vokabular zu erweitern.</li>
          <li>Versuche, neue Wörter in Alltagssituationen anzuwenden.</li>
          <li>
            Schweizerdeutsch variiert je nach Region - diese Wörter sind
            überwiegend aus dem Zürichdeutschen.
          </li>
          <li>Besuche unsere Quiz-Sektion, um dein Wissen zu testen.</li>
        </ul>
      </div>
    </div>
  `,
  styles: [
    `
      .vocabulary-container {
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

      .category-selector,
      .search-bar {
        margin-bottom: 1.5rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
          font-weight: 500;
        }

        select,
        input {
          width: 100%;
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
      }

      .vocabulary-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1rem;
        margin-bottom: 2rem;
      }

      .vocabulary-card {
        padding: 1rem;
        transition: transform 0.2s, box-shadow 0.2s;

        &:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
      }

      .vocabulary-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }

      .vocabulary-word {
        display: flex;
        flex-direction: column;

        .label {
          font-size: 0.8rem;
          color: #666;
          margin-bottom: 0.25rem;
        }

        .word {
          font-weight: 500;
          font-size: 1.1rem;
        }

        &.swiss .word {
          color: #e30613;
        }
      }

      .vocabulary-arrow {
        color: #999;
        font-size: 1.2rem;
      }

      .vocabulary-category {
        font-size: 0.8rem;
        color: #666;
        text-align: right;
        margin-top: 0.5rem;
      }

      .empty-state {
        text-align: center;
        padding: 2rem;
        background-color: #f5f5f5;
        border-radius: 8px;
        margin-bottom: 2rem;
      }

      .info-card {
        margin-top: 2rem;

        h2 {
          color: #e30613;
          margin-top: 0;
        }

        ul {
          padding-left: 1.5rem;

          li {
            margin-bottom: 0.5rem;
          }
        }
      }
    `,
  ],
})
export class VocabularyComponent implements OnInit {
  vocabulary: VocabularyItem[] = [];
  filteredVocabulary: VocabularyItem[] = [];
  categories: string[] = [];
  selectedCategory: string = 'all';
  searchTerm: string = '';

  constructor(private vocabularyService: VocabularyService) {}

  ngOnInit(): void {
    this.vocabulary = this.vocabularyService.getAllVocabulary();
    this.filteredVocabulary = [...this.vocabulary];
    this.categories = this.vocabularyService.getVocabularyCategories();
  }

  filterByCategory(): void {
    if (this.selectedCategory === 'all') {
      this.filteredVocabulary = [...this.vocabulary];
    } else {
      this.filteredVocabulary = this.vocabulary.filter(
        (item) => item.category === this.selectedCategory
      );
    }

    // Apply search term if it exists
    if (this.searchTerm.trim()) {
      this.search();
    }
  }

  search(): void {
    const term = this.searchTerm.toLowerCase().trim();

    if (!term) {
      this.filterByCategory();
      return;
    }

    // First filter by category if one is selected
    let baseList =
      this.selectedCategory === 'all'
        ? [...this.vocabulary]
        : this.vocabulary.filter(
            (item) => item.category === this.selectedCategory
          );

    // Then filter by search term
    this.filteredVocabulary = baseList.filter(
      (item) =>
        item.germanWord.toLowerCase().includes(term) ||
        item.swissGermanWord.toLowerCase().includes(term)
    );
  }
}
