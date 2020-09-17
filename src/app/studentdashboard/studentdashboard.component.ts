import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent implements OnInit {
 student:any=[]
 

  constructor(private dataService:DataService) { }
  
  getStudentData()
  {
    this.dataService.getData().subscribe((res)=>{
      this.student=res
    })
  }

  delete(id)
 {
   this.dataService.deleteData(id).subscribe((res)=>{
     alert("data deleted")
     this.getStudentData()

   })
 }
  
  ngOnInit(): void {

    this.getStudentData()
  }

}
