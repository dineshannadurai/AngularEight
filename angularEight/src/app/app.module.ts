import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  // entryComponents: [AppComponent]
})
export class AppModule { 
  // constructor(private injector:Injector){}
  // ngDoBootstrap(){
  //   const AppElement = createCustomElement(AppComponent, { injector: this.injector });
  //   customElements.define('angular-els', AppElement);
  // }
}
