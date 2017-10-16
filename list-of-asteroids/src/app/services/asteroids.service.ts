import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { AsteroidsFilter } from '../models';

@Injectable()
export class AsteroidsService {

	private readonly BASE_URL = "https://api.nasa.gov/neo/rest/v1/feed";

	constructor(private http: Http) { }

	filtrar(filter: AsteroidsFilter): Observable<AsteroidsFilter> {
		let params = `?start_date=${filter.start_date}&end_date=${filter.end_date}&api_key=${filter.api_key}`;
		
		return this.http
			.get(this.BASE_URL + params)
			.map(response => response.json())
			.catch(error => Observable.throw(error));
	}
}