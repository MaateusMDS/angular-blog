import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {


  @Input() id: String = "0";
  @Input() fotoCover: String = "";
  @Input() cardTitle: String = "";
  @Input() cardDescricao: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
