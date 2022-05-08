import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
export interface User {
  id: number,
  name: string;
  email: string;
  username: string;
}

const ELEMENT_DATA: User[] = [];
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  listUsers: User[]=[]; 
  constructor(private userService: UsersService) { }
  displayedColumns: string[] = ['ID', 'name', 'Email', 'Username', 'actions'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
    
  this.userService.listUsers().subscribe(data =>{
      this.listUsers = data;
    });
  }

}
