import { Component } from "@angular/core";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { UserService } from "./services/user.services";


@Component({
    selector : 'app-adduser',
    template : `
          <div class="mb-3">
            <label for="userName" class="form-label">User Name</label>
            <input #uname="ngModel" [(ngModel)]="user.uname" type="email" class="form-control" id="userName" >
          </div>
          <div class="mb-3">
            <label for="userCity" class="form-label">User City</label>
            <input #ucity="ngModel" [(ngModel)]="user.ucity" type="text" class="form-control" id="userCity">
          </div>
          <button (click)="addUser()" type="submit" class="btn btn-primary">Submit</button>
          <hr>
          <ul>
              <li>User Name : {{ user.uname }}</li>
              <li>User City : {{ user.ucity }}</li>
          </ul>
    `
})
export class UserAddComp{
    user = {
        uname : '',
        ucity : ''
    }
    constructor(private us:UserService){
        // Initialize Firebase
    }
    addUser(){
        this.us.addUserInfo(this.user.uname, this.user.ucity)
        .then(res => {
            console.log("Response ", res)
        }).catch(error => {
            console.log("Error ", error)
        })
    }
}