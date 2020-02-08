import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HttpClientModule } from '@angular/common/http';
import { SkillsComponent } from './skills/skills.component';
import { MarkdownModule } from 'ngx-markdown';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { FooterComponent } from './footer/footer.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    SkillsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    LazyLoadImageModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
