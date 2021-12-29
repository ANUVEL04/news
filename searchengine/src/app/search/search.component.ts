import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    constructor(private searchservices: SearchService){
      this. searchservices.sub.subscribe((x: any)=>console.log('from app sub',x));
      
    
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
