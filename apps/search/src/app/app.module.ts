import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { InputTextModule } from 'primeng/inputtext';

import { AppComponent } from './app.component';
import { PokemonCarouselComponent } from './pokemon-carousel/pokemon-carousel.component';

@NgModule({
  declarations: [AppComponent, PokemonCarouselComponent],
  imports: [
    BrowserModule,
    FormsModule,
    PanelModule,
    ButtonModule,
    BrowserAnimationsModule,
    CarouselModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
