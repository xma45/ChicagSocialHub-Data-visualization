
Lines of code in total : 83 files, 15412 codes, 382 comments, 1141 blanks, all 16935 lines


////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////
//////////////////////              SETUP NEEDED                ////////////////////
////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////


Tools and Environment Setup & Installations
The following platforms/technologies and tools are needed in order to build and run the
web-based application:
1. Javascript: platforms and browsers that are compliant with ECMAScript 2015
scripting 2015, (ES6): http://www.ecma-international.org/ecma-262/6.0/
2. Chrome and Firefox releases that are ES6 compliant. List of browsers/platforms
that support ES6 can be found under modern browsers link
(http://kangax.github.io/compat-table/es6/ ) on this URL:
https://developer.mozilla.org/en-US/docs/Web/JavaScript
3. Java/JDK 11: https://www.oracle.com/technetwork/java/javase/downloads/jdk11-
downloads-5066655.html
4. Python 3.7: https://www.python.org/downloads/
5. Angular 7: https://angular.io/
6. Anaconda: https://www.anaconda.com/distribution/#download-section
7. visual studio code: https://code.visualstudio.com/download
8. Node.js/express: https://nodejs.org/en/download/
9. Angular CLI: npm install -g @angular/cli
10. PostgreSQL: https://www.postgresql.org/download/
11. ElasticSearch: https://www.elastic.co/downloads/elasticsearch

  Install Nodejs (the bundle includes the npm) from the following website:
      https://nodejs.org/en/download/


  Before you start nodejs make sure you install from the  
  command line window/terminal the following packages:
     1. npm install express
     2. npm install pg
     3. npm install pg-format
     4. npm install moment --save
     5. npm install elasticsearch
     6.npm install google-maps
     7.npm install d3
     8.npm install hearmap.js
     9.npm install https

  
Install Angular
# P1App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

How to Build and Run
1. Create your Yelp API Key and update the ipynb script with that key
2. Create your Google Map API Key and add your Key to the client/Angular
frontend file, app.module.ts.
3. Run ChicagpSocialHub-Yelp.ipynb,divvy-status-es.ipynb to create an index to Chicago Business on
ElasticSearch. Run divvy_stations_status_logs.ipynb,divvy_stations_status.ipynb on postgreSQL
4. Execute the following commands from the command line window/terminal:
4.1. Start ElasticSearch: server from the command prompt
4.2. Start PostgresSQL: pg_ctl -D /usr/local/var/postgres start
4.3. Start node.js server: node server.js
4.4. Start Angular client: ng serve 