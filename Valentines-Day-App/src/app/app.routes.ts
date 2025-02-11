import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { YesPageComponent } from './yes-page/yes-page.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent },
    { path: 'yes', component: YesPageComponent }
];
