import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {


  @Input() id: String = "0";
  @Input() fotoCover: String = "";
  @Input() cardTitle: String = "";

  constructor() { }

  ngOnInit(): void {
  }

}
