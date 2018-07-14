import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShortProfileComponent } from './short-profile/short-profile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { TabAreaComponent } from './tab-area/tab-area.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SpecializationComponent } from './specialization/specialization.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ShortProfileComponent,
    TabAreaComponent,
    AboutMeComponent,
    SpecializationComponent
  ],
  imports: [BrowserModule, MatGridListModule, MatCardModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
