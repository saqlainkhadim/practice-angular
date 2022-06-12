import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Boring hello  World</h1> <br>
  <app-abc title="Video 1"  desc="video  1 description "  url="#"></app-abc>
  <app-abc title="Video 2"  desc="video  2 description "  url="#"></app-abc>
  `,
  styles: [`
    h1{
      color: red;
    }

  `]
})
export class AppComponent {
  Username="Saqlain";
  Userid=5;
  isDissable=false;

  enablebtn(){
     this.isDissable=false;
  }
  disablebtn(){
     this.isDissable=!this.isDissable;
  }
  getusername(){
    return  this.Username;
  }
}
