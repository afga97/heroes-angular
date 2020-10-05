import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';

import '@angular/common/locales/global/es';
import '@angular/common/locales/global/fr';

//Routes
import { AppRouterModule } from './router.module'

//Services
import { HeroeService } from './services/heroes.service';

// Pipes
import { CapitalizadoPipe } from './pipes/capitalizado.pipe'
import { DomseguroPipe } from './pipes/domseguro.pipe'


// Components 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { SearchComponent } from './components/search/search.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

// Registrar idiomas 
//registerLocaleData(localEs);
//registerLocaleData(localFr, 'fr');


@NgModule({
  declarations: [
    CapitalizadoPipe,
    DomseguroPipe,
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    SearchComponent,
    HeroeTarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule
  ],
  providers: [
    HeroeService,
    {provide: LOCALE_ID, useValue: 'es' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
