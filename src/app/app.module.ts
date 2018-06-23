import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortProfileComponent } from './short-profile/short-profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { TabAreaComponent } from './tab-area/tab-area.component';
@NgModule({
  declarations: [AppComponent, ShortProfileComponent,
    TabAreaComponent
],
  imports: [BrowserModule, MatGridListModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
