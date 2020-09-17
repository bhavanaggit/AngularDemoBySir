import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name:string="gurve";
  imgPath:string="../../assets/13.jpg";
  imgName:string="Rose";
  inputData:string="";
  constructor() { }

  ngOnInit(): void {
  }
greet()
{
  alert("hii...")
}
}
