import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AsteroidsFilter, AsteroidsResponse } from '../../models';

import { AsteroidsService } from '../../services';

@Component({
	selector: 'app-asteroids',
	templateUrl: './asteroids.component.html',
	styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

	private asteroidsFilter: AsteroidsFilter;
	private asteroidsResponse: AsteroidsResponse;

	@ViewChild("asteroidsForm") asteroidsForm: NgForm;

	constructor(private asteroidsService: AsteroidsService) { }

	ngOnInit() {
	}

	init(): void {
		this.asteroidsFilter = new AsteroidsFilter('2017-10-10', '2017-10-15');
	}

	filtrar(): void {
		if(this.asteroidsForm.form.valid) {
			alert(JSON.stringify(this));
			/*this.asteroidsService
				.filtrar(this.asteroidsFilter)
				.subscribe(response => this.asteroidsResponse = response);*/
		}
	}
}
