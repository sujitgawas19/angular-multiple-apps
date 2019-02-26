import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  returnUrl: string;
  userInfo : any;
  loginSucessListener : Subscription;

  constructor() {
  	}

  ngOnInit() {

  }

}
