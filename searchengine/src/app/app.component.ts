import { Component } from '@angular/core';
import { Subject,of, Observable } from 'rxjs';
import { SearchService } from './search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'searchengine';

  constructor(private searchservices: SearchService){
    this. searchservices.sub.subscribe(x=>console.log('from app sub',x));
    
  }
  
}
