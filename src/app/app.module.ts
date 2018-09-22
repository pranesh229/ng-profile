import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject, PLATFORM_ID, APP_ID } from '@angular/core';

import { AppComponent } from './app.component';
// import { ShortProfileComponent } from './short-profile/short-profile.component';
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
import { FooterComponent } from './footer/footer.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { isPlatformBrowser } from '@angular/common';
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
    // ShortProfileComponent,
    TabAreaComponent,
    AboutMeComponent,
    SpecializationComponent,
    SkillsComponent,
    ResumeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-profile' }),
    MatGridListModule,
    MatCardModule,
    HttpClientModule,
    MarkdownModule.forRoot(),
    LazyLoadImageModule,
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      useHash: true
    }),
    ServiceWorkerModule.register('/ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string
  ) {
    const platform = isPlatformBrowser(platformId)
      ? 'in the browser'
      : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
