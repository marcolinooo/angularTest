import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './component/test/test.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import {FormsModule} from "@angular/forms";
import {ButtonModule} from "primeng/button";
import {Header} from "primeng/api";
import {HeaderComponent} from "./component/header/header.component";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {ScrollPanelModule} from "primeng/scrollpanel";
import {CardModule} from "primeng/card";
import {TableModule} from "primeng/table";
import {SidebarModule} from "primeng/sidebar";
import {KeyFilterModule} from "primeng/keyfilter";
import { Page2Component } from './component/page2/page2.component';
import {DataViewModule} from "primeng/dataview";
import {NgOptimizedImage} from "@angular/common";
import {RatingModule} from "primeng/rating";
import {TagModule} from "primeng/tag";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DashboardComponent,
    HeaderComponent,
    Page2Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    ScrollPanelModule,
    CardModule,
    TableModule,
    SidebarModule,
    KeyFilterModule,
    DataViewModule,
    NgOptimizedImage,
    RatingModule,
    TagModule,
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
