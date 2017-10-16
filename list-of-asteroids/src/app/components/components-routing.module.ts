import { Routes } from '@angular/router';

import { AsteroidsComponent } from './asteroids';
import { FastestComponent } from './fastest';

export const ComponentsRoutes: Routes = [
	{
		path: 'asteroids',
		component: AsteroidsComponent
	},
	{
		path: 'asteroids/fastest',
		component: FastestComponent
	},
];
