import {Person} from './person.js'

export class Hero extends Person{
  firstname="default"
  lastname="default"
  _secret="my secret"
  static version=1001
  constructor(fname,lname,ncity){
    super(ncity)
    this.firstname=fname 
    this.lastname=lname
  }
  fullname(){
    return this.firstname+this.lastname;
  }
  get secret(){
    return this._secret;
  }
  set secret(nsecret){
    this.secret=nsecret;
  }

};