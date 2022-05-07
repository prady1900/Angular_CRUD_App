import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: any; 
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  this.userService.listUsers().subscribe(data =>{
      this.listUsers = data;
    });
  }

}
