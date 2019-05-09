


import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';


import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


import { Place } from '../../place';
import { PlacesService } from '../../places.service';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};



@Component({
  selector: 'app-list-of-places',
  templateUrl: './list-of-places.component.html',
  styleUrls: ['./list-of-places.component.css']
})

export class ListOfPlacesComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  uri = 'http://localhost:4000';

  places: Place[]=[];
 
  dataSource = new MatTableDataSource<Place>();
  
  displayedColumns = ['name', 'display_phone', 'address1', 'is_closed', 'rating','review_count', 'Divvy'];

  constructor(private placesService: PlacesService, private router: Router, private http: HttpClient) { }

  
  ngOnInit() {

    this.fetchPlaces();
    
  }

 


  
  fetchPlaces() {
    this.placesService
      .getPlaces()
      .subscribe((data: Place[]) => {
        this.places = data;
        this.dataSource.data = this.places;
        console.log(this.dataSource)
        
      });
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }
  chart_type(type){
    if(type==1){
      this.router.navigate(['/bar_chart']);
    }
    else if (type==2){

      this.router.navigate(['/review_bar_chart']);
    }
    

  }

  
  findStations(placeName) {

    for (var i = 0,len = this.places.length; i < len; i++) {

      if ( this.places[i].name === placeName ) { // strict equality test

          var place_selected =  this.places[i];

          break;
      }
    }


    this.placesService.findStations(placeName).subscribe(() => {
      this.router.navigate(['/list_of_stations']);
    });

  }



}
