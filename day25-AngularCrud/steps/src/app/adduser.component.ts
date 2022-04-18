import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';
import { ISchoolUserService } from './user.service';

@Component({
  selector: 'app-adduser',
  template: `
    <div class="container">
      <a [routerLink]="['']" style="text-decoration: none;"><h4>Back</h4></a>
      <div>
        <h1>Add User</h1>
        <form name="userForm" #userForm="ngForm">
          <div class="mb-3">
            <label for="username" class="form-label">User Name</label>
            <input
              #uname="ngModel"
              [(ngModel)]="newUserData.username"
              type="email"
              class="form-control"
              id="username"
              name="uname"
            />
          </div>
          <div class="mb-3">
            <label for="usermail" class="form-label">User email</label>
            <input
              #umail="ngModel"
              [(ngModel)]="newUserData.usermail"
              type="email"
              class="form-control"
              id="usermail"
              name="umail"
            />
          </div>
          <div class="mb-3">
            <label for="usercity" class="form-label">User City</label>
            <input
              #ucity="ngModel"
              [(ngModel)]="newUserData.usercity"
              type="email"
              class="form-control"
              id="usercity"
              name="ucity"
            />
          </div>
          <button (click)="addNewUser()" type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  `,
})
export class AddUserComponent{
  newUserData: User = {
    username: '',
    email: '',
    city: '',
  };
  constructor(private us: ISchoolUserService, private router: Router) {}
  addNewUser() {
    this.us.postUser(this.newUserData).subscribe((res:any) => {
      this.router.navigate(['']);
      this.newUserData = {
        username: '',
        email: '',
        city: '',
      };
    });
  }
}