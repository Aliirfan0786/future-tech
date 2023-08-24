import { Component } from '@angular/core';
import { ServiceService } from '../service/service.service';




@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
 
  searchQuery: string = '';
  suggestions: { id: number; name: string;salary:number; content: string }[] = [];
  gelAllPara:any;
  



  

  constructor(  private searchService: ServiceService) {}

  // OnInit(){
  //   this.suggestions = this.searchService.getParagraphs();

  // }

  onSearchInput() {
    const paragraphs = this.searchService.getParagraphs();
    this.suggestions = paragraphs.filter(paragraph =>
      paragraph.content.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    this.suggestions = this.searchService.getParagraphs();
  }
  //   const paragraphs = this.searchService.getParagraphs();
  //   if (this.searchQuery === '') {
  //     this.suggestions = paragraphs;
  //   } else {
  //     this.suggestions = paragraphs.filter(paragraph =>
  //       paragraph.content.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   }
       
  // }
  }




  


