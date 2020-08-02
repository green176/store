import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { UserNameComponent } from './user-name/user-name.component';

@NgModule({
	declarations: [AuthComponent, SignUpComponent, ProfileComponent, UserNameComponent],
	imports: [CommonModule, ReactiveFormsModule, ProfileRoutingModule],
})
export class ProfileModule {}
