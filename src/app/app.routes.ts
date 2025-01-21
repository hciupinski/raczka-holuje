import { Routes } from '@angular/router';
import { LiveTrackingComponent } from './pages/live-tracking/live-tracking.component';
import { HelpComponent } from './pages/help/help.component';

export const routes: Routes = [
    {
        path: 'help',
        component: HelpComponent,
    },
    {
        path: 'tracking',
        component: LiveTrackingComponent,
    },
    {
        path: '**',
        redirectTo: 'help',
    },
];
