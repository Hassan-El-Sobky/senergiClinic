import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

/* API Calling By Observable "RXJS" To listen to the data */
export class CovidServicesService {
  constructor(private _http:HttpClient) {

   }
   covidData():Observable<any> // in this case the return type = any also we can make interface to make a specific return type
   {
      return this._http.get<any>('https://api.covid19api.com/summary');
   }
}
