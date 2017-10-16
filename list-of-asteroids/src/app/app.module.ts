import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AsteroidsComponent, BannerComponent, FastestComponent } from './components';
import { AsteroidsService } from './services';
import { DaterangeDirective } from './directives';

@NgModule({
	declarations: [
		AppComponent,
		AsteroidsComponent,
		BannerComponent,
		FastestComponent,
		DaterangeDirective
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		FormsModule,
		HttpModule
	],
	providers: [
		AsteroidsService
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
