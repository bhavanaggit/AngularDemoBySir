import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

  cond:Boolean=true;
  cond1:boolean=false;
  cars:string[]=["BMW","Farari","Balino","Nano","Mini Cooper"];

  mychoice:string="nano";
  constructor() { }

  ngOnInit(): void {
  }

}
