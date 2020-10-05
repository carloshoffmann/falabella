import { Component, OnInit } from '@angular/core';
import { SuperHeroApiWrapperService } from '../superheroapi-wrapper.service';

@Component({
  selector: 'app-superheroapi-queries',
  templateUrl: './superheroapi-queries.component.html',
  styleUrls: ['./superheroapi-queries.component.scss']
})
export class SuperHeroApiQueriesComponent implements OnInit {

   loading: boolean = false;
   search_text: string = "batman";

   numbers: Array<any> = [];
   page: number = 1;
   pages: number = -1;
   pageSize: number = 10;
   totalRecords: number = 0;
   records: any[] = [];

   constructor(protected userService: SuperHeroApiWrapperService) { }
  
   ngOnInit(): void {
      this.getData(1);
   }

   getData(page) {
      this.loading = true;
      this.page = page;
      this.userService.getData(this.search_text, this.page).subscribe(
         (data) => { 
            this.records = data['results'];
            for (let i=0; i<this.records.length; i++) {
               this.records[i]['points'] = this.records[i]['powerstats']['intelligence'];
               this.records[i]['points'] = this.records[i]['powerstats']['strength'];
               this.records[i]['points'] = this.records[i]['powerstats']['speed'];
               this.records[i]['points'] = this.records[i]['powerstats']['durability'];
               this.records[i]['points'] = this.records[i]['powerstats']['power'];
               this.records[i]['points'] = this.records[i]['powerstats']['combat'];
            }
            this.loading = false;
         },
         (error) => {
            console.error(error);
            this.loading = false;
         });
   }


}
