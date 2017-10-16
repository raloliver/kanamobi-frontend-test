import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AsteroidsFilter } from '../../models';

import { AsteroidsService } from '../../services';

@Component({
	selector: 'app-asteroids',
	templateUrl: './asteroids.component.html',
	styleUrls: ['./asteroids.component.css']
})
export class AsteroidsComponent implements OnInit {

	private asteroidsFilter: AsteroidsFilter;
	private asteroidsResponse:any;

	@ViewChild("asteroidsForm") asteroidsForm: NgForm;

	constructor(private asteroidsService: AsteroidsService) { }

	ngOnInit() {
		this.init();
		this.filtrar();
	}

	init(): void {
		this.asteroidsFilter = new AsteroidsFilter('2017-10-10', '2017-10-15', '2hKjRWO84XXPqnffl8lPZW1WCXbSyQj8q5VDpECf');
	}

	filtrar(): void {
		if(this.asteroidsForm.form.valid) {
			this.asteroidsService
				.filtrar(this.asteroidsFilter)
				.subscribe(response => this.asteroidsResponse = response['near_earth_objects']);

			console.log(this.asteroidsResponse);
		}
	}
}
