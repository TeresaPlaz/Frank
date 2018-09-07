import { Routes } from '@angular/router';

import { FrankiHomeComponent } from './franki-home/franki-home.component';
import { FrankiFunctionsComponent } from './franki-functions/franki-functions.component';
import { FrankiAboutComponent } from './franki-about/franki-about.component';
// import { EnterDetailsGuardService } from './phone-details/enter-details-guard.service';
// import { LeaveAddPhoneGuardService } from './add-phone/leave-add-phone-guard.service';
// import { ResolveDetailsGuardService } from './phone-details/resolve-details-guard.service';

export const routes: Routes = [
    { path: '', component: FrankiHomeComponent },
    {
        path: 'functions',
        component: FrankiFunctionsComponent,
        // canDeactivate: [ LeaveAddPhoneGuardService ]
    },
    {
        path: 'about',
        component: FrankiAboutComponent,
        // canActivate: [ EnterDetailsGuardService ],
        // resolve: {
        //     phone: ResolveDetailsGuardService
        //  }
    },
    { path: '**', redirectTo: '' }
];