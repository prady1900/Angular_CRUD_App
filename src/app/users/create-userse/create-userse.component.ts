import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-create-userse',
  templateUrl: './create-userse.component.html',
  styleUrls: ['./create-userse.component.css']
})
export class CreateUserseComponent implements OnInit {
  
  addUserFor: FormGroup = new FormGroup({});
  
  constructor(private formBuilder: FormBuilder,
    private userService: UsersService,
   private _snack:MatSnackBar) { }

  ngOnInit(): void {
    this.addUserFor = this.formBuilder.group({
      'username': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.email]),
      'phone': new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern( "^[0-9]*$")])
    })
  }
  createUser(){
    console.log(this.addUserFor.value);
    this.userService.addUser(this.addUserFor.value).subscribe({
      next:()=> this._snack.open("user created successfully"),
      error:()=>this._snack.open("Input Failed") 

    })
  }

}
