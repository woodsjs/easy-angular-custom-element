import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomFormComponent } from './custom-form/custom-form.component';

@NgModule({
  declarations: [
    // AppComponent,
    CustomFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule
  ],
  providers: [],
  // bootstrap: [AppComponent],
  entryComponents: [ CustomFormComponent ]
})
export class AppModule {
  constructor( injector: Injector ) {
    const customElement = createCustomElement(CustomFormComponent, {injector});
    customElements.define('app-custom-form', customElement);
  }

  ngDoBootstrap() {}
}
