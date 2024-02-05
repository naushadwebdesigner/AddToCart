import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';
import { CourseCardComponent } from './course-card/course-card.component';
import { COURSE } from '../db-data';
import { Course } from './course-card/model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data = {
    title: "Hello World"
  }

  onKeyup(newTitle:string) {
    this.data.title = newTitle;
    
  }




  ranjacket = COURSE[0]
  ranjacket2 = COURSE[1]
  ranjacket3 = COURSE[2]

  mainCourse : any [] = []

  getCourse(course:Course) {
    this.mainCourse.push(course)
  }

  


}
