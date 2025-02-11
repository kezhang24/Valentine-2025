import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { YesPageComponent } from './yes-page/yes-page.component';

const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'yes', component: YesPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }