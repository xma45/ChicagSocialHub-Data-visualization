import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Time from 'd3-time';
import { Station } from '../../station';
import { PlacesService } from '../../places.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
    selector: 'app-linechart',
    templateUrl: './line-chart.component.html',
    styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
    title = 'Line Chart + SMA';
    public StationName;
    constructor(private PlacesService: PlacesService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            this.hours = params.hours;
            this.StationName = params.stationName;
        });
    }

    private margin = { top: 20, right: 20, bottom: 30, left: 100 };
    private width: number;
    private height: number;
    stations: Station[] = [];
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;
    private sma_red: d3Shape.Line<[number, number]>;
    private sma_blue: d3Shape.Line<[number, number]>;
    private sma_1 = false;
    private sma_24 = false;
    private g: any;
    private hours: any;
    private SMAchoice: any;
    log_1hour: any = [];
    smaData_1hour: any = [];
    log_24hour: any = [];
    smaData_24hour: any = [];
    private timegranularity: any;

    ngOnInit() {
        this.granulartime(this.hours);
        this.linechart();
        
        setInterval(() => { this.chart_24(); }, 180000)
    }
granulartime(hours){
  if (hours==1){
    this.timegranularity=d3Time.timeMinute.every(2);
}
else if (hours==24){
    this.timegranularity=d3Time.timeHour.every(1);
}
else if (hours==168){
    this.timegranularity=d3Time.timeDay.every(1);
}
}
    
    show_line_chart(hours) {

        
        this.hours = hours;
        this.granulartime(hours);

        this.PlacesService.plot_station(this.StationName, this.hours).subscribe(() => {
        this.linechart();
        });

    }

    
    averageDocks(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i].availableDocks
        }
        return { lastCommunicationTime: arr[arr.length - 1].lastCommunicationTime, availableDocks_avg: sum / arr.length }
    }


    checkboxfunction(c) {
        if (c == 'sma_blue') {
            if (this.sma_1) {
                d3.selectAll('.sma_blue').attr('style', 'display:block')
            }
            else {
                d3.selectAll('.sma_blue').attr('style', 'display:none')
            }
        }
        if (c == 'sma_red') {
            if (this.sma_24) {
                d3.selectAll('.sma_red').attr('style', 'display:block')
            }
            else {
                d3.selectAll('.sma_red').attr('style', 'display:none')
            }
        }


    }


    linechart() {
        this.PlacesService.plot_station(this.StationName, this.hours).subscribe(() => {
        this.PlacesService
            .getPlot_station()
            .subscribe((data: Station[]) => {
                this.stations = data;
                this.chart_24();
            });
          })
    }

    chart_24() {
        this.PlacesService.plot_station(this.StationName, 24).subscribe(() => {
            this.PlacesService
                .getPlot_station()
                .subscribe((data: Station[]) => {
                    this.log_24hour = [];
                  
                    for (var i = 0; i < data.length; i++) {
                        this.log_24hour.push({ lastCommunicationTime: new Date(data[i].lastCommunicationTime.toString()), availableBikes: +data[i].availableBikes, availableDocks: +data[i].availableDocks, totalDocks: +data[i].totalDocks })
                    }
                    this.smaData_24hour.push(this.averageDocks(this.log_24hour));
                    this.chart_1();

                });
        });
    }

    chart_1() {
        this.PlacesService.plot_station(this.StationName, 1).subscribe(() => {
            this.PlacesService
                .getPlot_station()
                .subscribe((data: Station[]) => {
                    this.log_1hour = []

                    for (var i = 0; i < data.length; i++) {
                        this.log_1hour.push({ lastCommunicationTime: new Date(data[i].lastCommunicationTime.toString()), availableBikes: +data[i].availableBikes, availableDocks: +data[i].availableDocks, totalDocks: +data[i].totalDocks })
                    }                    
                    this.smaData_1hour.push(this.averageDocks(this.log_1hour));
                    this.createchart();
                });
        })
    }


    createchart() {
       
        d3.selectAll("svg > *").remove();
        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.x = d3Scale.scaleTime().rangeRound([0, this.width]);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
        
        this.x.domain(d3Array.extent(this.stations, (d) => new Date(d.lastCommunicationTime.toString())));
        this.y.domain([0, d3Array.max(this.stations, (d) => d.totalDocks)]);

        this.g.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .text('Time')
            .call(d3Axis.axisBottom(this.x).ticks(this.timegranularity));
      
        this.g.append('g')
            .attr('class', 'y axis')
            .call(d3Axis.axisLeft(this.y))
            .append('text')
            .attr('class', 'axis-title')
            .attr('transform', 'rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('fill', '#000')
            .text('totalDocks');


        this.line = d3Shape.line()
            .x((d: any) => this.x(new Date(d.lastCommunicationTime.toString())))
            .y((d: any) => this.y(d.availableDocks));


        this.g.append("path")
            .datum(this.stations)
            .attr("fill", "none")
            .attr("class", "line")
            .attr("stroke", "green")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.line);

        this.sma_blue = d3Shape.line()
            .x((d: any) => this.x(d.lastCommunicationTime))
            .y((d: any) => this.y(d.availableDocks_avg));
        this.g.append("path")
            .datum(this.smaData_1hour)
            .attr("fill", "none")
            .attr("class", "sma_blue")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.sma_blue);
       
        this.sma_red = d3Shape.line()
            .x((d: any) => this.x(d.lastCommunicationTime))
            .y((d: any) => this.y(d.availableDocks_avg));

        this.g.append("path")
            .datum(this.smaData_24hour)
            .attr("fill", "none")
            .attr("class", "sma_red")
            .attr("stroke", "Red")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.sma_red);


            let legend = this.svg.append('g')
            .attr('x', this.width-30)
            .attr('y', this.width-20)
            .attr('width', 18)
            .attr('height', 10)
            
    
            legend.append('rect')
            .attr('x',this.width-130)
            .attr('y',5)
            .attr('width',18)
            .attr('height',10)
            .attr('fill','#FF0000');
    
            legend.append('text')
            .attr('x', this.width-90)
            .attr('y', 10)
            .attr('dy','0.32em')
            .text("24 Hr SMA Data")
    
    
            legend.append('rect')
            .attr('x',this.width-130)
            .attr('y',20)
            .attr('width',18)
            .attr('height',10)
            .attr('fill','steelblue');
    
            legend.append('text')
            .attr('x',this.width-90)
            .attr('y',30)
            .attr('dy','0.32em')
            .text("1 Hr SMA Data")
                
        this.checkboxfunction('sma_blue')
        this.checkboxfunction('sma_red')

        

    }

}


