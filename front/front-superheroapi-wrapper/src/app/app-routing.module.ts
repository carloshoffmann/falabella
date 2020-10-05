import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperHeroApiQueriesComponent } from './superheroapi-queries/superheroapi-queries.component';

const routes: Routes = [
  { path: 'home', component: SuperHeroApiQueriesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
