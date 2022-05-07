import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  userId: any;
  data: any;
  userDetials: any;
  constructor(private userService: UsersService, private activatedroute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe(data =>{
      this.userId = data.id;
    })

    this.userService.viewuser(this.userId).subscribe(data =>{
      this.userDetials = data;
    })
  }
  

}
