import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as d3 from "d3";
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Shape from 'd3';
import  'rxjs/Rx';
import  { observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators';

import {Place} from '../../place';
import { PlacesService } from '../../places.service';




@Component({
  selector: 'app-pie-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})

export class PieChartComponent implements OnInit {

  private title = 'Pie Chart';
  
  private margin = {top: 20, right: 20, bottom: 30, left: 50};
    private width: number;
    private height: number;
    private radius: number;
    places: Place[]=[];

    private arc: any;
    private labelArc: any;
    private pie: any;
    private color: any;
    private svg: any;

  constructor( private placesService: PlacesService,private router: Router, private http: HttpClient) { 
    this.width = 900 - this.margin.left - this.margin.right;
    this.height = 500 - this.margin.top - this.margin.bottom;
    this.radius = Math.min(this.width, this.height) / 2;
  }


   ngOnInit() {
    this.fetchPlaces();
     
      
  }
  fetchPlaces() {
    this.placesService
      .getPlaces()
      .subscribe((data: Place[]) => {
        this.places = data;
        console.log(this.places);
        this.color = d3Scale.scaleOrdinal()
            .range(['green', 'red', 'yellow', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);
        this.arc = d3Shape.arc()
            .outerRadius(this.radius - 10)
            .innerRadius(0);
        this.labelArc = d3Shape.arc()
            .outerRadius(this.radius - 40)
            .innerRadius(this.radius - 40);
        this.pie = d3Shape.pie()
            .sort(null)
            .value((d: any) => d.review_count);
        this.svg = d3.select('svg')
            .append('g')
            .attr('transform', 'translate(' + this.width / 2 + ',' + this.height / 2 + ')');
            let g = this.svg.selectAll('.arc')
            .data(this.pie(this.places))
            .enter().append('g')
            .attr('class', 'arc');
        g.append('path')
            .attr('d', this.arc)
            .style('fill', (d: any) => this.color(d.data.name) );
        g.append('text').attr('transform', (d: any) => 'translate(' + this.labelArc.centroid(d) + ')')
            .attr('dy', '.35em')
            .text((d: any) => d.data.name);
      });

    
  }
  
}
