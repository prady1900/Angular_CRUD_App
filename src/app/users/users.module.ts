import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListUsersComponent } from './list-users/list-users.component';
import { CreateUserseComponent } from './create-userse/create-userse.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DelUserComponent } from './del-user/del-user.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserRoutingModule } from './user-routing.module';
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '../layout/layout.module';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar'


@NgModule({
  declarations: [
    ListUsersComponent,
    CreateUserseComponent,
    EditUserComponent,
    DelUserComponent,
    ViewUserComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule
  ],
  exports:[
    ListUsersComponent,
    CreateUserseComponent,
    EditUserComponent,
    DelUserComponent,
    ViewUserComponent,
    HomeComponent,
  ],
  providers:[
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1500}}
  ]
})
export class UsersModule { }
