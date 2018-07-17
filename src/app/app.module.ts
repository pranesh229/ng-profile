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
import { SkillsComponent } from './skills/skills.component';
import { MarkdownModule } from 'ngx-markdown';
import { ResumeComponent } from './resume/resume.component';
import { RouterModule, Routes } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent },
  {
    path: '',
    component: AboutMeComponent
  },
  { path: '**', component: AboutMeComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ShortProfileComponent,
    TabAreaComponent,
    AboutMeComponent,
    SpecializationComponent,
    SkillsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      enableTracing: true,
      useHash: true
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
