import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfrresetdata',
  templateUrl: './wfrresetdata.component.html',
  styleUrls: ['./wfrresetdata.component.css']
})
export class WfrresetdataComponent implements OnInit {

  env :string;
  type :string;

  constructor() { 
    this.env = "qa";
    this.type =  "nuid";
  }

  ngOnInit() {
  }

}
