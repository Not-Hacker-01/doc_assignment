import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { WebinarComponent } from './webinar/webinar.component';
import { SkpComponent } from './skp/skp.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NotificationComponent } from './notification/notification.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/webinar',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
     {
      path: 'home',
      component: HomeComponent
     },
     {
      path: 'webinar',
      component: WebinarComponent
     },
     {
      path: 'skp',
      component: SkpComponent
     },
     {
      path: 'calendar',
      component: CalendarComponent
     },
     {
      path: 'notifications',
      component: NotificationComponent
     }
    ]
  }
];
