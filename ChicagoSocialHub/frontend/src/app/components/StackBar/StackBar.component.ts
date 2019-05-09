import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import { Station } from '../../station';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-stackbar',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './StackBar.component.html',
  styleUrls: ['./StackBar.component.css']
})
export class StackBarComponent implements OnInit {
  title = 'Stacked Bar Chart for';

  private width: number;
  private height: number;
  Stations: Station[] = [];
  private margin = { top: 20, right: 20, bottom: 30, left: 40 };

  private x: any;
  private y: any;

  private svg: any;
  private g: any;

  constructor(private placesService: PlacesService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.fetchStations();
    setInterval(() => { this.fetchStations(); }, 120000);

  }
  fetchStations() {
    this.placesService
      .getStations()
      .subscribe((data: Station[]) => {
        this.Stations = data;
        console.log("fetchplaces:", this.Stations);

        var svgWidth = 800, svgHeight = 300, barPadding = 0.1;
        var margin = { top: 50, right: 30, bottom: 50, left: 30 };
        var contentWidth = svgWidth - margin.left - margin.right;
        var contentHeight = svgHeight - margin.top - margin.bottom;
  
        var fill_bars = ["rgb(0, 121, 93)", "rgb(0,12,45"]
  
  
        var textColor = 'white';
     
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
          .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(barPadding);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);


        this.x.domain(this.Stations.map((d) => d.stationName.toString()));
        this.y.domain([0, d3Array.max(this.Stations, (d) => d.totalDocks)]);
     
        this.g.append('g')
          .attr('class', 'x axis')
          .attr('transform', 'translate(0,' + this.height + ')')
          .text('Station Name')
          .call(d3Axis.axisBottom(this.x));
        this.g.append('g')
          .attr('class', 'y axis')
          .call(d3Axis.axisLeft(this.y).ticks(10))
          .append('text')
          .text('TotalDock')
          .attr('class', 'axis-title')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('fill', 'black')
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('TotalDock');
        this.g.selectAll('svg')
          .data(this.Stations)
          .enter().append('rect')
          .style("fill", "black")
          .attr('class', 'bar')
          .attr('x', (d) => this.x(d.stationName))
          .attr('y', (d) => this.y(d.totalDocks))
          .attr('width', this.x.bandwidth())
          .attr('height', (d) => this.height - this.y(d.totalDocks));
        this.g.selectAll(".text")
          .data(this.Stations)
          .enter()
          .append("text")
          .attr('class', 'text')
          .text(d => +d.availableBikes)
          .attr('x', d => this.x(d.stationName.toString()) + 5)
          .attr('y', d => this.y(+d.availableBikes) + 17)
          .attr("fill", textColor);
        this.g.selectAll('svg')
          .data(this.Stations)
          .enter().append('rect')
          .style("fill", "green")
          .attr('class', 'bar')
          .attr('x', (d) => this.x(d.stationName))
          .attr('y', (d) => this.y(d.totalDocks))
          .attr('width', this.x.bandwidth())
          .attr('height', (d) => this.height - this.y(d.availableDocks));

          this.g.selectAll(".text2")
          .data(this.Stations)
          .enter()
          .append("text")
          .attr('class', 'text2')
          .text(d => +d.availableDocks)
          .attr('x', d => this.x(d.stationName.toString())+5)
          .attr('y', d => this.y(d.totalDocks)+17)
          .attr("fill", textColor);
        
          var legend = this.svg.append('g')
          .attr("class", "legend")
          .attr("x", 20)
          .attr("y",3)
          .attr("width", 18)
          .attr("height",10)
        
           //legend for available bikes
           legend.append("rect")
           .attr("class", "legend")
           .attr("x", 20)
           .attr("y", 5)
           .attr("width", 18)
           .attr("height", 10)
           .style("fill", fill_bars[1]);
           
           legend.append("text")
           .attr("class", "legendTxt")
           .style("font-size", "13px")
           .attr("x", 40)
           .attr("y", 5)
           .attr("dy", "10px")
           .style("text-anchor", "start")
           .text("Available Bikes");
           
           //legend for available docks
           legend.append("rect")
           .attr("class", "legend")
           .attr("x", 20)
           .attr("y", 20)
           .attr("width", 18)
           .attr("height", 10)
           .style("fill", fill_bars[0]);
           
           legend.append("text")
           .attr("class", "legendTxt")
           .style("font-size", "13px")
           .attr("x", 40)
           .attr("y", 20)
           .attr("dy", "10px")
           .style("text-anchor", "start")
           .text("Available Docks");
      });
  }
}
