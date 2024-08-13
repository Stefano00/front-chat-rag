import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AskComponent } from './ask/ask.component';
import { SupportComponent } from './support/support.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'ask', component: AskComponent },
  { path: 'support', component: SupportComponent },
  { path: 'onboarding', component: OnboardingComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
