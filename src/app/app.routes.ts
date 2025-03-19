import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'vocabulary',
    loadComponent: () =>
      import('./pages/vocabulary/vocabulary.component').then(
        (m) => m.VocabularyComponent
      ),
  },
  {
    path: 'grammar',
    loadComponent: () =>
      import('./pages/grammar/grammar.component').then(
        (m) => m.GrammarComponent
      ),
  },
  {
    path: 'quizzes',
    loadComponent: () =>
      import('./pages/quizzes/quizzes.component').then(
        (m) => m.QuizzesComponent
      ),
  },
  { path: '**', redirectTo: '/home' },
];
