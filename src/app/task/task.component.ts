import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { Observable } from 'rxjs';
import{DataService} from '../data.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  
  
  users:any=[];
  constructor(private dataservice:DataService) { }

  ngOnInit(): void {
    this.dataservice.getUserData().subscribe((userdata)=>{
      this.users=userdata;
      console.log(this.users);
    })
    
  }

}

  
  //isShowDivIf:boolean= false;
  
  //isShowUlIf:boolean=false;
  
  /*toggle1() {
    this.isShowDivIf = !this.isShowDivIf;
  }
   toggle2()
   {
     this.isShowUlIf=!this.isShowUlIf;
   }
  */

 
  
  


