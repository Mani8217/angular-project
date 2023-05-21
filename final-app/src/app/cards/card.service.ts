import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICard } from '../models/card';
@Injectable({
  providedIn: 'root'
})
export class CardService {
cardUrl: string = "https://restcountries.com/v3.1/all";
nameSearchUrl : string = "https://restcountries.com/v3.1/name"
continentUrl : string = "https://restcountries.com/v3.1/region"
constructor(private http: HttpClient) { }

  getAll(): Observable<ICard[]> {
    return this.http.get<ICard[]>(this.cardUrl);
  }
  getByName(name: string): Observable<ICard>{
    return this.http.get<ICard>(`${this.nameSearchUrl}/${name}`)
  }
  getByRegion(continent: string): Observable<ICard[]>{
    return this.http.get<ICard[]>(`${this.continentUrl}/${continent}`)
  }
  create(event: ICard) : Observable<ICard>{
    return this.http.post<ICard>(this.cardUrl, event);
  }

}
