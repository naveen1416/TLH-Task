import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('./profileupdate/profileupdate.component').then(m => m.ProfileupdateComponent)
  },
   {
    path: 'skills',
    loadComponent: () =>
      import('./skillsupdate/skillsupdate.component').then(m => m.SkillUpdateComponent)
  }
];
