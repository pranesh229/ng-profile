import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortProfileComponent } from './short-profile/short-profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
@NgModule({
  declarations: [AppComponent, ShortProfileComponent],
  imports: [BrowserModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
