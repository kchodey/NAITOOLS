import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wfrresetdata',
  templateUrl: './wfrresetdata.component.html',
  styleUrls: ['./wfrresetdata.component.css']
})
export class WfrresetdataComponent implements OnInit {

  env :string;
  type :string;
  isNuidList: boolean;
  isValidationFailed: boolean;
  nuidlist: string;
  empidlist: string;

  constructor() { 
    this.env = "qa";
    this.type = "nuid";
    this.isNuidList = true;
    this.isValidationFailed = false;
    this.nuidlist = "";
    this.empidlist = "";
  }

  ngOnInit() {
  }

  toggleType() {
    this.isNuidList = !this.isNuidList;
    this.isValidationFailed = false;
  }

  onSubmit(form) {
    console.log(form);

    let regex;
    let input;
    if(form.type == 'nuid') {
      input = form.nuidlist;
    } else if(form.type == 'empid'){
      input = form.empidlist;
    }
    let nuidlist = input.trim().split(',');

    if(form.type == 'nuid') {
      regex = new RegExp('^[a-zA-Z][0-9]{6}$');
    } else if(form.type == 'empid'){
      regex = new RegExp('^[0-9]{6}$');
    }

    const failed = nuidlist.filter(id => {
      return !regex.test(id.trim());
    });

    if (failed.length > 0) {
      this.isValidationFailed = true;

      
    } else {
      this.isValidationFailed = false;

    }
    console.log('end of onsubmit :)');
  }
}
