import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/home/home.component';
import { AskComponent } from './app/ask/ask.component';
import { SupportComponent } from './app/support/support.component';
import { OnboardingComponent } from './app/onboarding/onboarding.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ask', component: AskComponent },
  { path: 'support', component: SupportComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes)
  ]
}).catch(err => console.error(err));
