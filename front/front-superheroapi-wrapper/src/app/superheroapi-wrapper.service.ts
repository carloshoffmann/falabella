import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroApiWrapperService {

   constructor(protected http: HttpClient) { }

   getData(search, page=1) {
      return this.http.get('http://localhost/api/search/?search='+search+'&page='+page);
   }


}
