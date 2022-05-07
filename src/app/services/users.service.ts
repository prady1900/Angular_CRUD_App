import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  baseUrl: string = 'https://jsonplaceholder.cypress.io/'
  constructor(private http: HttpClient) {
   }
   listUsers(){
    return this.http.get(this.baseUrl+'users');
  }
  viewuser(id: string){
    return this.http.get(this.baseUrl+'users/'+id);
  }

  addUser(userObj: any){
    return this.http.post(this.baseUrl + 'users', userObj);
  }
  deleteUser(id: string){
    return this.http.delete(this.baseUrl + 'users/'+id);
  }
  updateUser(id: string, userObj: any){
    return this.http.put(this.baseUrl+'users/'+id, userObj);
  }
}
