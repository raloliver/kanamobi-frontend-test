import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import * as $ from 'jquery';

@Directive({
	selector: '[daterange]',
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: DaterangeDirective,
		multi: true
	}]
})
export class DaterangeDirective implements ControlValueAccessor {

	onTouched: any;
  	onChange: any;

	constructor(private el: ElementRef) {}

	@HostListener('focus', ['$event'])
	onClick($event: any) {
		let valor = ($event.target.value) ? $event.target.value : new Date();

		jQuery($event.target).daterangepicker({
			locale: {
				format: 'YYYY-MM-DD'
			},
			dateLimit: {
				'days': 4
			},
			startDate: valor,
			singleDatePicker: true
		});
	}

	registerOnChange(fn: any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		this.el.nativeElement.value = value;
	}
}
