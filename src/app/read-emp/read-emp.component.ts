import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import {EmpProfile} from "../profiles/emp.profiles";
import { AuthenticationService } from '../EmpServices/authentication.service';

import {EmpServices} from "../EmpServices/emp-services";

@Component({
  selector: 'app-read-vc',
  templateUrl: './read-emp.component.html',
  styleUrls: ['./read-emp.component.scss'],
  providers: [ EmpServices, AuthenticationService ],
})

export class ReadEmpComponent implements OnInit {
  constructor(
    private http: Http,
    private _httpService:EmpServices,
  ) { }

  pageTitle: string = "ALL EMPLOYEE";
  private allItems: any[];

  pager: any = {};
  EmpProfile: any[];
  listFilter: string;

  ngOnInit() {
    this._httpService.getProfiles()
      .subscribe(data => {
          this.allItems = data;
        this.setPage();
        }
      );
  }

  setPage() {
     // get current page of items
    this.EmpProfile = this.allItems;
  }

}
