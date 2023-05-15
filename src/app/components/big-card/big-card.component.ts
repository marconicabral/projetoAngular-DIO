import { Component, Input } from '@angular/core';

@Component({
  selector: 'big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input ()
  Id:string = "0"
}
