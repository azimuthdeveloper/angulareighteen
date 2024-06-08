import {RedirectCommand, Router, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AdminComponent} from "./home/admin/admin.component";
import {inject} from "@angular/core";
import {AuthenticationService, LoginType} from "./services/authentication.service";
import {UnauthorizedComponent} from "./home/unauthorized/unauthorized.component";
import {WriteComponent} from "./home/write/write.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [() => {
      const router = inject(Router);
      const auth = inject(AuthenticationService);

      if (auth.userLogin$.value == LoginType.AdminUser) {
        return true;
      }
      return new RedirectCommand(router.parseUrl('/unauthorized'), {
        state: {
          loginDuringAuth: auth.userLogin$.value
        }
      })
    }],
  },
  {
    path: 'write',
    component: WriteComponent,
    canActivate: [() => {
      const router = inject(Router);
      const auth = inject(AuthenticationService);
      if (auth.userLogin$.value != undefined) {
        return true;
      } else {
        router.navigate(['/unauthorized']);
        return false;
      }
    }]
  },
  {
    path: 'unauthorized',
    component: UnauthorizedComponent
  }
];
