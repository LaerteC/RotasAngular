import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TesteComponent } from './teste/teste.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  {
    path: 'teste/:nome',
    component: TesteComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule], 
})
export class AppRoutingModule {}
