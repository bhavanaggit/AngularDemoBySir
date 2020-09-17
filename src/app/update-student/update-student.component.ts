import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import{ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  form:FormGroup
  student:any=[]
  id:number
  graduation_stream:string[]=["Mechnical","IT","comp Sci","E&TC"]
  
update()
{
this.dataService.updateData(this.id,this.form.value).subscribe((res)=>{
alert("Data updated")
this.router.navigateByUrl("/")
})
}
  constructor(private dataService:DataService,private activatedroute:ActivatedRoute,private router:Router) { }
  
  ngOnInit(): void {
    this.activatedroute.params.subscribe((param)=>
    {
      this.id=param["id"]
      this.dataService.getDataById(this.id).subscribe((data)=>
      {
        this.student=data
        this.form=new FormGroup(
          {
          stud_name:new FormControl(this.student.stud_name),
          stud_email:new FormControl(this.student.stud_email),
          stud_age:new FormControl(this.student.stud_age),
          stud_isGraduate:new FormControl(this.student.stud_isGraduate),
          stud_branch:new FormControl(this.student.stud_branch)
        })
      })
    })
  }

}
