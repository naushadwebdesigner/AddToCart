import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from './model/course';



@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {

  @Input() course: Course = {} as Course;
  @Output() courseEmiter = new EventEmitter<Course>()

  getDate() {
    this.courseEmiter.emit(this.course)
  }
  

}
