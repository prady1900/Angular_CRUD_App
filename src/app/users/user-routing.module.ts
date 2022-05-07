import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserseComponent } from './create-userse/create-userse.component';
import { DelUserComponent } from './del-user/del-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'create', component: CreateUserseComponent },
      {path: 'list',
        children: [
          {path: '', component: ListUsersComponent},
          { path: 'delete/:id', component: DelUserComponent },
          { path: 'edit/:id', component: EditUserComponent },
          { path: 'view/:id', component: ViewUserComponent }

        ]
      },

    ]

  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
