import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CocktailResponse} from "../DTO/response/cocktail.response";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor(private readonly httpService:HttpClient) { }

  public getCocktail() : Observable<CocktailResponse>  {

    return this.httpService.get<CocktailResponse>("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita");
}



}


