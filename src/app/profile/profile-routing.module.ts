import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from '@services/auth.guard';

const profileRoutes: Routes = [
	{ path: 'auth', component: AuthComponent },
	{ path: 'signup', component: SignUpComponent },
	{ path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];

@NgModule({
	imports: [RouterModule.forChild(profileRoutes)],
	exports: [RouterModule],
})
export class ProfileRoutingModule {}
