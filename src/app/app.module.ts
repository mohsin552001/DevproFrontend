import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatTabGroup, MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field'


import {MatCardModule} from '@angular/material/card'
import { HttpClientModule } from '@angular/common/http';
 import { DetailpageComponent } from './detailpage/detailpage.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
     DetailpageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,MatButtonModule,MatIconModule,MatGridListModule,MatTabsModule,MatCardModule,HttpClientModule,FormsModule,MatFormFieldModule,MatTableModule,MatProgressBarModule,MatDividerModule,MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
