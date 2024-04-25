import { MonefyModule } from './monefy/monefy.module';
import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'monefy', loadChildren: () => import('./monefy/monefy.module').then(m => m.MonefyModule) }
];
