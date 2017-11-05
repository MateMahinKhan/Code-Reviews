import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, LoginComponent } from './';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent }
];

export const AppRoutes = RouterModule.forRoot(routes, { useHash: false });
