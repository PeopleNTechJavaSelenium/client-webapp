import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CreateEmpComponent } from './create-emp/create-emp.component';
import { EditEmpComponent } from './edit-emp/edit-emp.component';
import { EmpServices } from './EmpServices/emp-services';
import { AuthGuard } from './guards/guards.component';
import { User } from './models/models.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmpProfile } from './profiles/emp.profiles';
import { ReadEmpComponent } from './read-emp/read-emp.component';
import { SignupComponent } from './signup/signup.component';
import {empModule} from "./emp.module";
import {UserService} from "./EmpServices/user.service";
import {AuthenticationService} from "./EmpServices/authentication.service";
import { EmpProfileFilterPipe } from "./pipes/vc-profile-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateEmpComponent,
    EditEmpComponent,
    NavbarComponent,
    ReadEmpComponent,
    SignupComponent,
    EmpProfileFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    empModule
  ],
  providers: [
    EmpServices,
    AuthGuard,
    UserService,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
