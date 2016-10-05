import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Actual Component
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  // default page
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  // not found page
  // {
  //   path: '**',
  //   component: PageNotFoundComponent;
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);