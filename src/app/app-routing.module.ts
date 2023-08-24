import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { TotalScoreComponent } from './total-score/total-score.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    component: StudentListComponent,
    path:'student'
  },
  {
    component: TotalScoreComponent,
    path: 'score'
  },
  {
    component: SearchBoxComponent,
    path: ''
  },
  {

    path: 'search',
    redirectTo:' SearchBoxComponent',
    pathMatch:'full'

  },
  
 
  {
    component: AboutUsComponent,
    path: 'about'
  },
  
  {
    component: FeaturesComponent,
    path: 'features'
  },
   
  {
    component: CourseComponent,
    path: 'course'
  },
  {
    component: CourseComponent,
    path: 'course/:id'
  },
  {
    component: PageNotFoundComponent,
    path: '**'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
