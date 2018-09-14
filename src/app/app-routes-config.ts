import { Routes } from '../../node_modules/@angular/router';
import { SearchComponent } from './flights/search/search.component';
import { ResultsComponent } from './flights/results/results.component';

export const appRoutes: Routes = [

    {
        path: 'home',
        loadChildren: 'app/flights/search/search.module#SearchModule'
    },
    {
        path: 'results',
        loadChildren: 'app/flights/results/results.module#ResultsModule'
    },

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
];
