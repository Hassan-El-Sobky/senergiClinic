import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { CovidServicesService } from '../services/covid-services.service';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.scss']
})
export class CovidComponent implements OnInit, OnDestroy {
myData: any = []; //Array that Contain All Data came From api
subcribe: Subscription; // Will use this variable to unSubsrcibe on the sream and its datatype <Subscription> to allow it's methods appear

//Will inject CovidServices in the Constructor 
  constructor(private _covidServive: CovidServicesService  ) { }


//On the initlization of the component i need to call the api to get the Data
  ngOnInit() {

//this function covidData() is provided by CovidService which injected in the constructor 

/*
 Will assign Subscribe variable to the function to close the stream later
   so will subscribe on the data and it will take a call back function contain all data 
   then assign myData to the response that came from callback
*/       


    this.subcribe = this._covidServive.covidData().subscribe((response) => {
      this.myData = response.Countries  

    })  

      }
    
      

  ngOnDestroy() {
    this.subcribe.unsubscribe(); // Close the stream OR use | Async in Html to unsubscribe
  }



}