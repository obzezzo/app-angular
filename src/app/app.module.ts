import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './componentes/home/home.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { FormulariosComponent } from './componentes/formularios/formularios.component';
import { PromosComponent } from './componentes/promos/promos.component';
import { AboutComponent } from './componentes/about/about.component';
import { SuscripcionComponent } from './componentes/suscripcion/suscripcion.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HomeComponent,
    CardsComponent,
    FormulariosComponent,
    PromosComponent,
    AboutComponent,
    SuscripcionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
