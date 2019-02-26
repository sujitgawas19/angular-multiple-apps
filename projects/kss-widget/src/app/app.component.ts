import { Component, ViewEncapsulation, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { PlatformLocation } from '@angular/common';


@Component({
  selector: 'cart-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'KSS';

  @Output() loginSuccessForBag : EventEmitter<any> = new EventEmitter();

  constructor(){
	}

	ngOnInit(){
		console.log("ngOnInit AppComponent");
	}
}