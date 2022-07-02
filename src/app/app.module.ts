import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThresholdCompComponent } from './threshold-comp/threshold-comp.component';
import { CategoryCompComponent } from './threshold-comp/category-comp/category-comp.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainThresholdComponent } from './threshold-comp/main-threshold/main-threshold.component';
import { SubThreshodlComponent } from './threshold-comp/sub-threshodl/sub-threshodl.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ThresholdCompComponent,
    CategoryCompComponent,
    MainThresholdComponent,
    SubThreshodlComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
