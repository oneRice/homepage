import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { SkilltreeComponent } from './skilltree.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'skilltree',
        component: SkilltreeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);