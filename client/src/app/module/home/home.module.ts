import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SharedModule } from 'src/app/core/shared.module';

const routes: Routes = [{
  path: '',
  component: LandingPageComponent,
  children: [
    {
      path: 'landing',
      component: HomeComponent
    },
    {
      path: '',
      redirectTo: 'landing',
      pathMatch: 'full'
    },
    {
      path:'**',
      redirectTo:'landing'
    }]
}]

@NgModule({
  declarations: [HomeComponent, LandingPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
  ]
})
export class HomeModule { }
