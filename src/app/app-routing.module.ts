import { Route } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';

export const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'content',
    component: ContentComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];