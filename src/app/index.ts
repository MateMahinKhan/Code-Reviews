export * from './app.component';
export * from './login/login.component';
export * from './dashboard';
export * from './shared/services';

import { DashboardComponents } from './dashboard';
import { LoginComponent } from './login/login.component';

export const AppComponents = [
    LoginComponent,
    ...DashboardComponents
];
