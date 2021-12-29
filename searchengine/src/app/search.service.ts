import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  sub :Subject<number>;

  constructor() {
    this.sub=new Subject<number>();
   }
}
