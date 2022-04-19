import { Injectable } from "@angular/core";
// import { AngularFirestore } from "@angular/fire/compat/firestore";
import { addDoc, Firestore, collection } from "@angular/fire/firestore"
import { getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore";

@Injectable()
export class UserService{
    constructor( private fs:Firestore ){}
    getUsers(){
        const dbGetData = collection(this.fs,"users");
        return getDocs(dbGetData);
    }
    addUserInfo(un:any, uc:any){
        const dbAddData = collection(this.fs,"users");
        return addDoc(dbAddData,{
                    uname : un,
                    ucity : uc
                })
    }
    updateUserInfo(uid:any){
        const dbUpdate = doc(this.fs,"users",uid);
        return updateDoc(dbUpdate, {
            uname : "Changed"
        })
    }
    deleteUserInfo(uid:any){
        const dbDelete = doc(this.fs,"users",uid);
        return deleteDoc(dbDelete)
    }
}