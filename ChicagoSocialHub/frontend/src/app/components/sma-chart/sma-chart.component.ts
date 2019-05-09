import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Shape from 'd3-shape';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';
import * as d3Time from 'd3-time';
import { Station } from 'src/app/station';
import { PlacesService } from 'src/app/places.service';
import { MatMenuModule } from '@angular/material/menu';
import { timeInterval } from 'rxjs/operators';

@Component({
    selector: 'app-sma-chart',
    templateUrl: './sma-chart.component.html',
    styleUrls: ['./sma-chart.component.css']
})
export class SMAchartComponent implements OnInit {
    title = 'SMA';
    public StationName;
    constructor(private PlacesService: PlacesService, private router: Router, private http: HttpClient, private activatedRoute: ActivatedRoute) {
        
    }
    private margin = { top: 20, right: 20, bottom: 30, left: 100 };
    private width: number;
    private height: number;
    //stations: Station[] = [];
    private x: any;
    private y: any;
    private svg: any;
    private line: d3Shape.Line<[number, number]>;
    private sma_red: d3Shape.Line<[number, number]>;
    private sma_green: d3Shape.Line<[number, number]>;
    private blueline: d3Shape.Line<[number, number]>;

    private g: any;
    private hours: any = 1;
    log_1hr_data: any = [];
    sma_1hr_data: any = [];
    log_24hr_data: any = [];
    sma_24hr_data: any = [];
    log_7d_data: any = [];
    sma_7d_data: any = [];
    stations: Station[] =[];
    
    private granularityConst:any;
private logs: Station[]

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe((params: Params) => {
            console.log(params);
            this.hours = params.hours;
            this.StationName = params.stationName;
            console.log(this.StationName);
            this.linechart();
        setInterval(() => { this.linechart(); }, 120000)

        });
        
    }

    draw_line_chart(hours) {
    this.hours = hours
    //this.setgranularity()
        //this.PlacesService.plot_station(this.StationName, this.hours).subscribe(() => {
            //d3.selectAll("svg > *").remove();
            this.drawchart();

        //});

    }
setgranularity(){
        console.log(this.hours);

        if (this.hours==1){
            this.granularityConst=d3Time.timeMinute.every(2);
            this.logs = this.log_1hr_data
        }
        else if (this.hours==24){
            this.granularityConst=d3Time.timeHour.every(1);
            this.logs = this.log_24hr_data
        }
        else if (this.hours==168){
            this.granularityConst=d3Time.timeDay.every(1);
            this.logs=this.log_7d_data
        }
}

    Avg_data(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i].availableDocks
        }
        return { lastCommunicationTime: arr[arr.length - 1].lastCommunicationTime, availableDocks_avg: sum / arr.length }
    }
    linechart() {
        this.PlacesService.logstash_divvy_data(this.StationName, this.hours).subscribe(() => {
        console.log("linechart-hours", this.hours);
        this.PlacesService
            .getLogstash_divvy_data()
            .subscribe((data: Station[]) => {
                this.stations = data;
                //d3.selectAll("svg > *").remove();
                this.chart_24hrs();
            });
        })

    }//linechart end

    chart_24hrs() {
        this.PlacesService.logstash_divvy_data(this.StationName, 24).subscribe(() => {
        this.PlacesService
            .getLogstash_divvy_data()
            .subscribe((data: Station[]) => {
                this.log_24hr_data = [];
                for (var i = 0; i < data.length; i++) {
                    this.log_24hr_data.push({ lastCommunicationTime: new Date(data[i].lastCommunicationTime.toString()), availableBikes: +data[i].availableBikes, availableDocks: +data[i].availableDocks, totalDocks: +data[i].totalDocks })
                }
                this.sma_24hr_data.push(this.Avg_data(this.log_24hr_data));
            console.log(this.sma_24hr_data)
            this.chart_1hr()

            });
    });
}
    chart_1hr() {
    this.PlacesService.logstash_divvy_data(this.StationName, 1).subscribe(() => {
        this.PlacesService
            .getLogstash_divvy_data()
            .subscribe((data: Station[]) => {
                this.log_1hr_data = []
                for (var i = 0; i < data.length; i++) {
                    this.log_1hr_data.push({ lastCommunicationTime: new Date(data[i].lastCommunicationTime.toString()), availableBikes: +data[i].availableBikes, availableDocks: +data[i].availableDocks, totalDocks: +data[i].totalDocks })
                }
                this.sma_1hr_data.push(this.Avg_data(this.log_1hr_data));
            console.log(this.sma_1hr_data)
            this.chart_7days();

                });
        })
    }

   

chart_7days() {
    this.PlacesService.logstash_divvy_data(this.StationName, 168).subscribe(() => {
    this.PlacesService
        .getLogstash_divvy_data()
        .subscribe((data: Station[]) => {
            this.log_7d_data = [];
            //this.stations = data;
            for (var i = 0; i < data.length; i++) {
                this.log_7d_data.push({ lastCommunicationTime: new Date(data[i].lastCommunicationTime.toString()), availableBikes: +data[i].availableBikes, availableDocks: +data[i].availableDocks, totalDocks: +data[i].totalDocks })
            }
            this.sma_7d_data.push(this.Avg_data(this.log_7d_data));
            console.log(this.sma_7d_data)
            this.drawchart()

        });
});
}

    drawchart() {
        this.setgranularity()
        d3.selectAll("svg > *").remove();

        this.svg = d3.select('svg');
        this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
        this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
        this.g = this.svg.append('g')
            .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
        this.x = d3Scale.scaleTime().rangeRound([0, this.width]);
        this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);

        this.x.domain(d3Array.extent(this.logs, (d) => d.lastCommunicationTime));
        this.y.domain([0, d3Array.max(this.logs, (d) => d.totalDocks)]);

        this.g.append('g')
            .attr('class', 'x axis')
            .attr('transform', 'translate(0,' + this.height + ')')
            .text('Time')
            .call(d3Axis.axisBottom(this.x).ticks(this.granularityConst));
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
            .x((d: any) => this.x(new Date(d.lastCommunicationTime.toString())))//d.loggingtime
            .y((d: any) => this.y(d.availableDocks));


        this.g.append("path")
            .datum(this.stations)
            .attr("fill", "none")
            .attr("class", "line")
            .attr("stroke", "orange")
            .attr("stroke-width", 1.5)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.line);

        this.blueline = d3Shape.line()
            .x((d: any) => this.x(d.lastCommunicationTime))
            .y((d: any) => this.y(+d.availableDocks_avg));




        this.g.append("path")
            .datum(this.sma_1hr_data)
            .attr("fill", "none")
            .attr("class", "blueline")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.blueline);
        
        this.sma_red = d3Shape.line()
            .x((d: any) => this.x(d.lastCommunicationTime))
            .y((d: any) => this.y(+d.availableDocks_avg));

        this.g.append("path")
            .datum(this.sma_24hr_data)
            .attr("fill", "none")
            .attr("class", "sma_red")
            .attr("stroke", "Red")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.sma_red);
            
            this.sma_green = d3Shape.line()
            .x((d: any) => this.x(d.lastCommunicationTime))
            .y((d: any) => this.y(+d.availableDocks_avg));

        this.g.append("path")
            .datum(this.sma_7d_data)
            .attr("fill", "none")
            .attr("class", "sma_green")
            .attr("stroke", "green")
            .attr("stroke-width", 10)
            .attr("stroke-linejoin", "round")
            .attr("stroke-linecap", "round")
            .attr("d", this.sma_green);


    }
}
