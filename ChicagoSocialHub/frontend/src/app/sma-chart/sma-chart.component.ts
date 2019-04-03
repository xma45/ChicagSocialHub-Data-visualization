// import { Component, OnInit } from '@angular/core';
// import { Router ,ActivatedRoute,Params} from '@angular/router';
// import { MatTableDataSource } from '@angular/material';
// import  'rxjs/Rx';
// import { Station } from '../../station';
// import { PlacesService } from '../../places.service';
// import * as d3 from 'd3-selection';
// import * as d3Scale from 'd3-scale';
// import * as d3ScaleChromatic from 'd3-scale-chromatic';
// import * as d3Shape from 'd3-shape';
// import * as d3Array from 'd3-array';
// import * as d3Axis from 'd3-axis';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import { HttpClient } from '@angular/common/http';
// import { NgModule } from '@angular/core';
// import { Place } from 'src/app/place';








// @Component({
//   selector: 'app-sma-chart',
//   templateUrl: './sma-chart.component.html',
//   styleUrls: ['./sma-chart.component.css']
// })
// export class smaChartComponent implements OnInit {

  
//   title = 'Multi-Series Line Chart';
//   public StationName;
//   constructor(private PlacesService: PlacesService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) 
//   {
//       this.activatedRoute.queryParams.subscribe((params: Params) => {
//           console.log(params);
    
        
    
//           this.StationName = params.stationName;
    
//           console.log(this.StationName);
//         });
//   }
//   private margin = { top: 20, right: 20, bottom: 30, left: 100 };
//   private width: number;
//   private height: number;
//   stations: Station[] = [];
//   private x: any;
//   private y: any;
//   private svg: any;
//   private line: d3Shape.Line<[number, number]>;
//   private g: any;


//   ngOnInit() {

//       this.station_selected();

//   }

//   realtimechart(hours) {

//       var stationName = this.StationName;

//       console.log(stationName);
//       console.log(hours);
//       this.PlacesService.plot_station(stationName, hours).subscribe(() => {

//           d3.selectAll("svg > *").remove();

//           this.station_selected();

         
//       });

//   }
//   station_selected() {
//       this.PlacesService
//           .getPlot_station()
//           .subscribe((data: Station[]) => {
//               this.stations = data;

//               console.log("fetchStation_Selected:", data);
//               this.svg = d3.select('svg');
//               this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
//               this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
//               this.g = this.svg.append('g')
//                   .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
//               this.x = d3Scale.scaleTime().rangeRound([0, this.width]);
//               this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);

//               this.x.domain(d3Array.extent(this.stations, (d) => new Date(d.lastCommunicationTime.toString())));
//               this.y.domain([0, d3Array.max(this.stations, (d) => d.totalDocks)]);

//               this.g.append('g')
//                   .attr('class', 'x axis')
//                   .attr('transform', 'translate(0,' + this.height + ')')
//                   .text('Time')
//                   .call(d3Axis.axisBottom(this.x));
//               this.g.append('g')
//                   .attr('class', 'y axis')
//                   .call(d3Axis.axisLeft(this.y))
//                   .append('text')
//                   .attr('class', 'axis-title')
//                   .attr('transform', 'rotate(-90)')
//                   .attr('y', 6)
//                   .attr('dy', '0.71em')
//                   .attr('fill', '#000')
//                   .text('totalDocks');

//               this.line = d3Shape.line()
//                   .x((d: any) => this.x(new Date(d.lastCommunicationTime.toString())))//d.loggingtime
//                   .y((d: any) => this.y(d.availableDocks));




//               this.g.append("path")
//                   .datum(data)
//                   .attr("fill", "none")
//                   .attr("class", "line")
//                   .attr("stroke", "green")
//                   .attr("stroke-width", 1.5)
//                   .attr("stroke-linejoin", "round")
//                   .attr("stroke-linecap", "round")
//                   .attr("d", this.line);


              


//           });
//   }
// }
