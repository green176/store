import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from '@components/cart/cart.component';

const routes: Routes = [
	{ path: '', redirectTo: '/category', pathMatch: 'full' },
	{ path: 'cart', component: CartComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
