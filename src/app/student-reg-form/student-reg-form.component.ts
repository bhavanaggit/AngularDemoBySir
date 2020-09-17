import { Component, OnInit } from '@angular/core';
import {Student} from './student';
import{FormGroup,FormControl} from '@angular/forms'
import { DataService } from '../data.service';

@Component({
  selector: 'app-student-reg-form',
  templateUrl: './student-reg-form.component.html',
  styleUrls: ['./student-reg-form.component.css']
})
export class StudentRegFormComponent implements OnInit {
 
  form:FormGroup
  student:any=[] 
  graduation_stream:string[]=["mechanical","IT","Comp Sci","E&TC"]

  

  constructor(private dataService:DataService) { }
  register()
  {
   // this.student.push(this.form.value)//to push the data in form
   this.dataService.saveData(this.form.value).subscribe((res)=>{
     alert("data saved")
   })
  }
  getStudentData()
    {
      this.dataService.getData().subscribe((res)=>{
        this.student=res;
      })
    }
  ngOnInit(): void {

    
    this.form=new FormGroup(
      {
      stud_name:new FormControl(" "),
      stud_email:new FormControl(" "),
      stud_age:new FormControl(" "),
      stud_isGraduate:new FormControl(" "),
      stud_branch:new FormControl(" ")

    }
    )

   this.getStudentData()
  }

}
