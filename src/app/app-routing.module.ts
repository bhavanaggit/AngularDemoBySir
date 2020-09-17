import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { StudentRegFormComponent } from './student-reg-form/student-reg-form.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
{path:"dashboard",component:StudentdashboardComponent},
{path:"reg",component:StudentRegFormComponent},
{path:"update/:id",component:UpdateStudentComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
