import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StudentListComponent } from './student-list/student-list.component';
import { TotalScoreComponent } from './total-score/total-score.component';
import { TextHighlightDirective } from './custom/directives/text-highlight.directive';
import { SearchBoxComponent } from './search-box/search-box.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeaturesComponent } from './features/features.component';
import { RouterModule } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    TotalScoreComponent,
    TextHighlightDirective,
    SearchBoxComponent,
    UsdInrPipe,
    NavbarComponent,
    AboutUsComponent,
    FeaturesComponent,
    CourseComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
