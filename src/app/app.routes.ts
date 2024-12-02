import {RouterModule, Routes} from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {EventComponent} from './pages/event/event.component';
import {NgModule} from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { EventService } from './utils/event.service';
import { EventIdComponent } from './pages/event/event-id/event-id.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'layout',
    pathMatch: 'full',
  },
  {
    path: 'layout',
    component: LandingComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'event',
        component: EventComponent,
      },
      {
        path: 'event/:id',
        component: EventIdComponent,
      },
      {
        path: 'login',
        component : LoginComponent,
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'layout/home', // Redirect to a valid path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [EventService],

})
export class AppRoutingModule { }
