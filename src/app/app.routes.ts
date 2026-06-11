import { Routes } from '@angular/router';
import { HomeComponent } from './luxe-home/luxe-home';
import { collections } from './collections/collections';

export const routes: Routes = [
    {path:'', component: HomeComponent,},
    {path:'collections', component: collections}
];
