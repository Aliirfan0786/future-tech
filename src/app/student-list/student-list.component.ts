import { Component } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent {


  totalMarks = 0;

  totalPercentage = 0;

  

  studentList = [
    {
      firstName: 'Fahad',
      subject : 'Math',
      marks :   0
    },
    {
      firstName: 'Fahad',
      subject : 'Chemistry',
      marks :   0
    },
    {
      firstName: 'Fahad',
      subject : 'Science',
      marks :   0
    },
    {
      firstName: 'Fahad',
      subject : 'Physics',
      marks :   0
    },
    {
      firstName: 'Fahad',
      subject : 'History',
      marks :   0
    }




  ]

   calculateTotalPercentage() {
    this.totalMarks = 0;
    for (let i = 0; i < this.studentList.length; i++) {
      this.totalMarks += this.studentList[i].marks;
    }
    this.totalPercentage = (this.totalMarks / (this.studentList.length * 100)) * 100;
  }
  
 

}
