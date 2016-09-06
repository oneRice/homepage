import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './index.component';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/index',
        pathMatch: 'full'
    },
    {
        path: 'index',
        component: IndexComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);