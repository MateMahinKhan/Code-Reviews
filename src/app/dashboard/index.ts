export * from './home/home.component';
export * from './review/review.component';
export * from './review/file/file.component';

import { HomeComponent } from './home/home.component';
import { FileComponent } from './review/file/file.component';
import { ReviewComponent } from './review/review.component';

export const DashboardComponents = [
  HomeComponent,
  FileComponent,
  ReviewComponent
];
