import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input()
  Id: string = ""

  @Input()
  photoCover: string = ""

  @Input()
  title: string = ""

  @Input()
  descricao: string = ""

  constructor() { }

  ngOnInit(): void {

  }
}
