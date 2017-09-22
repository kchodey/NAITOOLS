import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wfrresetdata',
  templateUrl: './wfrresetdata.component.html',
  styleUrls: ['./wfrresetdata.component.css']
})
export class WfrresetdataComponent implements OnInit {

  environments =  ['QA','UAT'];
  constructor() { }

  ngOnInit() {
  }

}
