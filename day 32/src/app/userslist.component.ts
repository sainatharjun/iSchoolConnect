import { Component } from "@angular/core";
import { UserService } from "./services/user.services";

@Component({
    selector : "app-userlist",
    template : `
        <ul>
            <li *ngFor="let user of users">
                <button (click)="updateUser(user.id)">Update</button>
                &nbsp;
                <button (click)="deleteUser(user.id)">Delete</button>
                &nbsp;
                {{ user.id }}  
                {{ user.uname }}  
                {{ user.ucity }}  
            </li>
        </ul>
    `
})
export class UsersListComp{
    users:any = [];
    constructor( private us:UserService){}
    refresh(){
        this.us.getUsers().then(res => {
            // this.users = res.docs;
           /*  res.docs.map(user => {
                 console.log(user.id)
                 this.users.push(user.data(), );
            }) */
            this.users = [...res.docs.map( user => {
                return {...user.data(), id : user.id }
            } )];
 
         }).catch(error => console.log( error ));
    }
    ngOnInit(){
        this.refresh();
    }

    updateUser(id:any){
        this.us.updateUserInfo(id).then(res => this.refresh() );
    }
    deleteUser(id:any){
        this.us.deleteUserInfo(id).then(res => this.refresh() );
    }
}