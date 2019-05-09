import { Component, OnInit } from '@angular/core';
import { HeatmapComponent } from '../heatmap/heatmap.component';
import { Router } from '@angular/router';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private placesServices: PlacesService, private router: Router) {
   }

  private hours: any;

  ngOnInit() {
  }

  heatmap(){
    this.placesServices.divvy_heatmap(this.hours).subscribe(() => {
        this.router.navigate(['/heatmap']);
    });
  }
}


