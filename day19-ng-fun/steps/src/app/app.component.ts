import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template:`
  <img #hero src="assets/1.jpg">
  <br>
  <button [disabled]="agree">Click here</button>

  <br>
  <button on-click="clickHandler($event)">b1</button>
  <button on-click="clickHandler($event)">b2</button>
  <button on-click="clickHandler($event)">b3</button>
  <button on-click="clickHandler($event)">b4</button>
  <br>  
  <button (click)="agreeDisagree()">Agree/Disagree</button>
  <br>
  <button (click)="hero.src='assets/1.jpg'" >img1</button>
  <button (click)="hero.src='assets/2.jpg'" >img2</button>
  <button (click)="hero.src='assets/3.jpg'" >img3</button>
  <br>
  <h1>{{title}}</h1>
  <hr>
  <input #ip (input)="changeip(ip.value)">
  <hr>
  <input #ip [value]='title' (input)="title=ip.value">
  <hr>
  <input [(ngModel)]="title">
  <h3>Title is {{ user.title }}</h3>
  <input type="text" (keydown.space)="keypresshandler()">
  <div [class]="selectedClass">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est suscipit maxime fugiat harum culpa nisi ipsam omnis aliquid consequatur a labore, id accusantium rerum, nam tempore cumque eum at ducimus?
  </div>
  <hr>
  <div class="box" [class.orangebox]="agree">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est suscipit maxime fugiat harum culpa nisi ipsam omnis aliquid consequatur a labore, id accusantium rerum, nam tempore cumque eum at ducimus?
  </div>

`,
styles :[`
.box{
  width : 400px;
  padding : 10px;
  outline : 1px solid black;
}
.orangebox{
  background-color : orange;
  color : papayawhip;
}
.borderBox{
  border : 5px dashed grey;
}
`]
})
export class AppComponent {
  title = 'steps';
  agree=true;
  selectedClass = 'box';
  user = {
    firstname : "Tony",
    title : ''
  };
  clickHandler(evt?:any) {
    alert(evt.target.innerHTML)
  }
  agreeDisagree(){
    this.agree=!this.agree
  }
  changeip(val:string){
    this.title=val;
  }
  keypresshandler(){
    console.log("key was pressed");
  }
}

