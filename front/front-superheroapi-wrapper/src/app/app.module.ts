import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { SuperHeroApiQueriesComponent } from './superheroapi-queries/superheroapi-queries.component';
import { SuperHeroApiWrapperService } from './superheroapi-wrapper.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroApiQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SuperHeroApiWrapperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
