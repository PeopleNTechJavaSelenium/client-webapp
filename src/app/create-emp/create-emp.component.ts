import {Component, OnInit, ViewChildren} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FormBuilder, FormGroup, FormArray, Validators, FormControlName} from '@angular/forms';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/merge';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import {  EmpProfile } from '../profiles/emp.profiles';
import { EmpServices } from '../EmpServices/emp-services';
import { AuthenticationService } from '../EmpServices/authentication.service';


@Component({
  selector: 'app-create-vc',
  templateUrl: './create-emp.component.html',
  styleUrls: ['./create-emp.component.scss'],
  providers: [ EmpServices, AuthenticationService ]
})
export class CreateEmpComponent implements OnInit {
  public empForm: FormGroup;
  pageTitle: string = "CREATE EMP PROFILE";
  getVCProfile: any[];
  errorMessage: string;
  vcNamePost: string;
  mode = 'Observable';
  public attempt: boolean = false;

  constructor(
    private fb: FormBuilder,
    private _httpService:EmpServices,
    private router:Router,
    private location: Location,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.empForm = this.fb.group({
        empEmail: [''],
        empName: [''],
        salary: [''],
        department: [''],
    });
  }

  private sub: any;
  save(model: EmpProfile) {
    if(this.attempt==false) {
      this.postDataToServer(model);
    }
  }

  postDataToServer(model:EmpProfile){
    this.attempt = true;
    this._httpService.postRestApi(model)
      .subscribe(data => {
        if (data.valueOf() == true) {
          alert("successful");
          this.router.navigate(['/']);
        } else {
        }
      });
  }

  cancel(): void {
    this.location.back();
  }
}
