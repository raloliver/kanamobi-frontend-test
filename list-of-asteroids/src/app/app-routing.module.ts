import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsRoutes } from './components';

export const routes: Routes = [
	{
		path: '',
		redirectTo: '/asteroids',
		pathMatch: 'full'
	},
	...ComponentsRoutes
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
