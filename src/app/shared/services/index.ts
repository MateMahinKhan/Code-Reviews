export * from './auth.service';
export * from './data.service';
export * from './differenceService/difference.service';

import { AuthService } from './auth.service';
import { DataService } from './data.service';
import { DifferenceService } from './differenceService/difference.service';

export const Services = [
    AuthService,
    DataService,
    DifferenceService
];
