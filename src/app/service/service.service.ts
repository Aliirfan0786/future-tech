import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  

     paragraphs: { id: number; name: string; salary:number; content: string }[] = [
      { id: 1, name: 'Fahad',salary:5000, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
      { id: 2, name: 'Irfan',salary:7000, content: 'Praesent ac felis euismod, condimentum est ac, lacinia arcu.' },
      { id: 3, name: 'Mubashir',salary:9000, content: 'when an unknown printer took a galley of type and scrambled .' },
      { id: 4, name: 'Saif',salary:12000, content: 'Vivamus vestibulum massa sit amet sapien efficitur ornare.' },
     
      // Add more paragraphs
    ];
    
    
    
  
    //  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //  "Praesent ac felis euismod, condimentum est ac, lacinia arcu.",
    //  "when an unknown printer took a galley of type and scrambled .",
    //  " Vivamus vestibulum massa sit amet sapien efficitur ornare." ,
    //  "Nam ut lacinia urna. Nunc blandit, leo quis bibendum facilisis",
    //   "orci metus rutrum dui, at porttitor nulla turpis vel nibh. Suspendisse blandit, n"
   
    
    // Add more paragraphs
    getParagraphs(): { id: number; name: string; salary:number; content: string }[] {
      return this.paragraphs;
    }

    
  

  constructor() { }
}
