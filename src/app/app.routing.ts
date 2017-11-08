import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent, ReviewComponent } from './';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'review', component: ReviewComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });
