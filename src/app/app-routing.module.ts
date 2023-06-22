import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TestComponent} from "./component/test/test.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";


const routes: Routes = [
  { path: 'test',
    component: TestComponent },
  {path:'',
    component:DashboardComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
   RouterModule.forRoot(routes)
  ],exports: [RouterModule]
})

export class AppRoutingModule { }
