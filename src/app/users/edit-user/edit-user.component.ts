import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { firstValueFrom } from 'rxjs/internal/firstValueFrom';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private userService: UsersService,
    private formBuilder: FormBuilder,
    private _snackbar: MatSnackBar) { }
  userId: string = "";
  userDetails: any;
  dataLoaded: boolean = false;
  editUserForm: FormGroup = new FormGroup({})
  ngOnInit(): void {

    this.activatedRoute.params.subscribe({
      next: (data) => {
        this.userId = data.id;
      }
    });
    if (this.userId !== '') {
      firstValueFrom(this.userService.viewuser(this.userId)).then(data => {
        this.userDetails = data;
        Object.assign(this.userDetails, data);
        console.log(this.userDetails);

        // Build Edit Form
        this.editUserForm = this.formBuilder.group({
          'name': new FormControl(this.userDetails.name),
          'email': new FormControl(this.userDetails.email)
        })
        this.dataLoaded = true;
      }).catch(err => {
        console.log(err);
      });
    }
  }
  updateUser() {
    this.userService.updateUser(this.userId, this.userDetails).subscribe({
      next: (data) => {
        this._snackbar.open('Update user successfully');
        console.log(data)
      },
      error: (err) => { console.log(err) }

    })
  }

}
