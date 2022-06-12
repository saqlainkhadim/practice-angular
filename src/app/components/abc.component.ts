import {Component, Input} from '@angular/core';

@Component(
  {
    selector:'app-abc',
    template:`
     <h1>{{title}}</h1>
      <h3>{{desc}}</h3>
      <a href="{{url}}"></a>
    `,
    styles:['']
  }
)
export class AbcComponent {
  @Input() title: any;
  @Input() desc: any;
  @Input() url: any;
}
