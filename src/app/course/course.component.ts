import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
course: any;
userId:any;

constructor( private activatedRoute: ActivatedRoute, private searchService: ServiceService) {}





ngOnInit(): void {
  this.userId = this.activatedRoute.snapshot.paramMap.get('id');
  
  this.course = this.searchService.paragraphs.find(x => x.id == this.userId);
    }
  
}
