import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FormationComponent } from './formation/formation.component';
import { ModelFormComponent } from './model-form/model-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormationComponent,
    ModelFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, FormationComponent,ModelFormComponent]
})
export class AppModule { }
