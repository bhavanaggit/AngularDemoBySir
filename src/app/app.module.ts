import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import{FormsModule} from '@angular/forms';
import { DirectoryComponent } from './directory/directory.component';
import { TaskComponent } from './task/task.component';
import{ReactiveFormsModule} from '@angular/forms';
import { StudentRegFormComponent } from './student-reg-form/student-reg-form.component';
import{HttpClientModule} from '@angular/common/http';
import{DataService} from './data.service';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectoryComponent,
    TaskComponent,
    StudentRegFormComponent,
    StudentdashboardComponent,
    UpdateStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
