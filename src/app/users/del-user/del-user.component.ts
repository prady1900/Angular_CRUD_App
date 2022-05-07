import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-del-user',
  templateUrl: './del-user.component.html',
  styleUrls: ['./del-user.component.css']
})
export class DelUserComponent implements OnInit {
  userId: string ="";
  constructor(private activatedRoute: ActivatedRoute, 
    private userService: UsersService,
    private _snackbar: MatSnackBar,
    private _router: Router) {

   }

  ngOnInit(): void {
  this.activatedRoute.params.subscribe({
    next:(data)=>{this.userId =data.id}
  });

  if(this.userId){
    this.userService.deleteUser(this.userId).subscribe({
      next:(data)=>{
        this._snackbar.open("user successfully deleted");
        this._router.navigateByUrl('http://localhost:4200/home/list') 
      },
      error:(err)=>{
        this._snackbar.open("unable to delete");
      }
    })
  }
  }

}
