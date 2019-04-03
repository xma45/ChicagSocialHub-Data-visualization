import { Component, ViewEncapsulation,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import * as d3 from "d3";
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import  'rxjs/Rx';
import  { observable, Subject } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {map} from 'rxjs/operators';

import {Place} from './../../place';
import { PlacesService } from '../../places.service';




@Component({
  selector: 'app-bar-chart',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit {

  private title = 'Bar Chart';
  
  private width: number;
  private height: number;
  places: Place[]=[];
  
   margin = {top: 20, right: 20, bottom: 30, left: 40};

   x: any;
   y: any;
   svg: any;
   g: any;

  constructor( private placesService: PlacesService,private router: Router, private http: HttpClient) { }


   ngOnInit() {
    this.fetchPlaces();
     
      
  }
  fetchPlaces() {
    this.placesService
      .getPlaces()
      .subscribe((data: Place[]) => {
        this.places = data;
        console.log(this.places);
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
            this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
            this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
            this.x.domain(this.places.map(d => d.name));
            this.y.domain([0, d3Array.max(this.places, (d) => d.rating)]);
            this.g.append('g')
            .attr('class', 'axis axis--x')
            .attr('transform', 'translate(0,' + this.height + ')')
            .call(d3Axis.axisBottom(this.x));
        this.g.append('g')
            .attr('class', 'axis axis--y')
            .call(d3Axis.axisLeft(this.y).ticks(10, '%'))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('rating');
            this.g.selectAll('.bar')
            .data(this.places)
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => this.x(d.name) )
            .attr('y', (d) => this.y(d.rating) )
            .attr('width', this.x.bandwidth())
            .attr('height', (d) => this.height - this.y(d.rating) );
      });

    
  }
  
}
