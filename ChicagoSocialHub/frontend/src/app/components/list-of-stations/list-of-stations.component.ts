



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';

import { Station } from '../../station';
import { PlacesService } from '../../places.service';


import { Input, ViewChild, NgZone} from '@angular/core';
import { MapsAPILoader, AgmMap } from '@agm/core';
import { GoogleMapsAPIWrapper } from '@agm/core/services';
import { Place } from 'src/app/place';




interface Location {
  lat: number;
  lng: number;
  zoom: number;
  address_level_1?:string;
  address_level_2?: string;
  address_country?: string;
  address_zip?: string;
  address_state?: string;
  label: string;
}



@Component({
  selector: 'app-list-of-stations',
  templateUrl: './list-of-stations.component.html',
  styleUrls: ['./list-of-stations.component.css']
})
export class ListOfStationsComponent implements OnInit {

  stations: Station[];
  markers: Station[];
  placeSelected: Place;
  places: Place[]=[];
  displayedColumns = ['id', 'stationName', 'availableBikes', 'availableDocks', 'is_renting', 'lastCommunicationTime', 'latitude',  'longitude', 'status', 'totalDocks','plot_station'];


  icon = {
    url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
    scaledSize: {
      width: 60,
      height: 60
    }
  }



  constructor(private placesService: PlacesService, private router: Router) { }

  ngOnInit() {
    this.fetchStations();
    this.getPlaceSelected();


  }

  fetchStations() {
    this.placesService
      .getStations()
      .subscribe((data: Station[]) => {
        this.stations = data;
        this.markers = data;

      });
  }


  getPlaceSelected() {
    this.placesService
      .getPlaceSelected()
      .subscribe((data: Place) => {
        this.placeSelected = data;

      });
  }

  


clickedMarker(label: string, index: number) {
  console.log(`clicked the marker: ${label || index}`)
}


circleRadius:number = 3000; // km

public location:Location = {
  lat: 41.882607,
  lng: -87.643548,
  label: 'You are Here',
  zoom: 13
};


// plot_station(stationName) {

//   for (var i = 0,len = this.stations.length; i < len; i++) {

//     if ( this.stations[i].stationName === stationName ) { // strict equality test

//         var station_selected =  this.stations[i];

//         break;
//     }
//   }

// console.log("station_selected",station_selected);
//   this.placesService.plot_station(stationName).subscribe(() => {
//     this.router.navigate(['/multiline_chart']);
  
//   });




// }

plot_station(stationName,hours){
  for (var i = 0,len = this.stations.length; i < len; i++) {

    if ( this.stations[i].stationName === stationName ) { // strict equality test

        var  station_selected =  this.stations[i];

        break;
    }
  }
  console.log("For loop worked,station_selected:",station_selected);
  this.placesService.plot_station(stationName,hours).subscribe(() => {
    // this.router.navigate(['/line-chart']);
    this.router.navigate(['/multiline_chart'], { queryParams: {stationName,hours} });
    console.log("reached here");
  });
}



}