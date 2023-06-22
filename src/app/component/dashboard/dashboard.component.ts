import { Component, OnInit } from '@angular/core';
import {CocktailService} from "../../service/cocktail.service";
import {CocktailResponse} from "../../DTO/response/cocktail.response";
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

cocktail: CocktailResponse | undefined;
  sidebarVisible: boolean = false;
  sidebarVisible1: any;
  list: string='list';
  layout: string = 'list';

  constructor(private readonly cocktailService:CocktailService) {
  }

  ngOnInit(): void {
this.cocktailService.getCocktail().subscribe(res=> {
  console.log(res)
  this.cocktail= res;
})
  }

}
