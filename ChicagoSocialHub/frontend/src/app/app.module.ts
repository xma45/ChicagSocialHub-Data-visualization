////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


/// This file and the source code provided can be used only for
/// the projects and assignments of this course

/// Last Edit by Dr. Atef Bader: 1/30/2019


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';


// import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatCardModule, MatTableModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { MatToolbarModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule,MatMenuModule ,MatIconModule, MatButtonModule, MatCardModule,MatSortModule, MatTableModule, MatDividerModule,MatSnackBarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { PlacesService } from './places.service';

import { FindComponent } from './components/find/find.component';
import { ListOfPlacesComponent } from './components/list-of-places/list-of-places.component';
import { ListOfStationsComponent } from './components/list-of-stations/list-of-stations.component';
import { StackBarComponent } from './components/StackBar/StackBar.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { MultiLineChartComponent } from './components/multiline-chart/multiline-chart.component';
import { SMAchartComponent } from './components/sma-chart/sma-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { HeatmapComponent } from './components/heatmap/heatmap.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { HomeComponent } from '../app/components/home/home.component';
import { ReviewBarChartComponent } from './components/review-bar/review-bar.component';





const routes: Routes = [
  { path: 'multiline_chart', component: MultiLineChartComponent},
  { path: 'bar_chart', component: BarChartComponent},
  { path: 'find', component: FindComponent},
  { path: 'list_of_places', component: ListOfPlacesComponent},
  { path: 'list_of_stations', component: ListOfStationsComponent},
  { path: 'sma_chart', component: SMAchartComponent},
  { path: 'stackbar', component: StackBarComponent},
  { path: 'line_chart', component: LineChartComponent},
  { path: 'heatmap', component: HeatmapComponent},
  { path: 'pie_chart', component: PieChartComponent},
  { path: 'home', component: HomeComponent},
  { path: 'review_bar_chart', component: ReviewBarChartComponent},






  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    FindComponent,
    ListOfPlacesComponent,
    ListOfStationsComponent,
    BarChartComponent,
    MultiLineChartComponent,
    SMAchartComponent,
    StackBarComponent,
    LineChartComponent,
    HeatmapComponent,
    PieChartComponent,
    HomeComponent,
    ReviewBarChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatTableModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatSortModule,

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////// SETUP NEEDED ////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

//  1. Create your API key from Google Developer Website
//  2. Install AGM package: npm install @agm/core @ng-bootstrap/ng-bootstrap --
//  3. Here is the URL for an online IDE for NG and TS that could be used to experiment
//  4. AGM live demo is loacted at this URL: https://stackblitz.com/edit/angular-google-maps-demo


/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


    AgmCoreModule.forRoot({apiKey: 'AIzaSyBYgaNboYcj9WFaFx5VFVzWZeWPDSF6f2k'+'&libraries=visualization'}),
    FormsModule,
    NgbModule
  ],

  providers: [PlacesService, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }
