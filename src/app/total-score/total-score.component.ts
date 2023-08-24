import { Component } from '@angular/core';

@Component({
  selector: 'app-total-score',
  templateUrl: './total-score.component.html',
  styleUrls: ['./total-score.component.scss']
})
export class TotalScoreComponent {

  totalMarks = 0;

  //  rowColor: string = '';
   isHighlighted: boolean = false;



  resetmarks() { this.totalMarks = 0;}
  resetP() { this.totalPercentage = 0;}

  addMarks (i: number){
    this.totalMarks = this.totalMarks + this.students[i].marks;
    //  this.rowColor = 'lightblue';
    //  this.isHighlighted = !this.isHighlighted;
     this.students[i].isdisableButton = true;
    
  }

 

  totalPercentage = 0;
  
  totalP () {
    this.totalPercentage = this.totalMarks/(this.students.length*100) * 100;
  }
  
  students = [{
    name: 'Mub',
    marks: 87,
    isdisableButton:false,
  },
  {
    name: 'Saif',
    marks: 86,
    isdisableButton:false,
  },
  {
    name: 'Amin',
    marks: 76,
    isdisableButton:false,
  }, {
    name: 'Irfan',
    marks: 90,
   isdisableButton:false,
  }]


}
