import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

@Input ()
Id:string = ""

@Input ()
photoCover:string = ""

@Input ()
cardTitle:string = ""

constructor() {}

ngOnInit(): void {

}
}
