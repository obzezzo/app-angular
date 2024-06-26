import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { PromosComponent } from './componentes/promos/promos.component';
import { AboutComponent } from './componentes/about/about.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cards', component: CardsComponent},
  {path: 'formularios', component: FormulariosComponent},
  {path: 'promos', component: PromosComponent},
  {path: 'about', component: AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
