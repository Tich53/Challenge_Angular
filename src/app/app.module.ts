import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ValidationButtonComponent } from './validation-button/validation-button.component';
import { HeroesComponent } from './heroes/heroes.component';
import { BlockComponentsComponent } from './block-components/block-components.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidationButtonComponent,
    HeroesComponent,
    BlockComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
