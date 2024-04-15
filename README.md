# VyneTestApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## App Overview

This app fetches and displays a list of a users recent transactions with transactions details including amount, currency, description, status, creation date, and transaction ID. Users are able to filter through their transaction list by either setting a date range and/or selecting which transaction statuses they want to view.

## How to run

The back end is provided by Vyne so I will be skipping this step. The app is still running in a developer environment so will require a few set up steps. Please follow the steps below and reach out to soloman.azizi@gmail.com if you have any questions or difficulties.

-Install NodeJs, please see their website for details (https://nodejs.org/en)
-Open a terminal at the repository location
-Run 'npm I' to install all node modules
-Run 'npm run start' to build and serve the angular app
-In a browser navigate to localhost:4200

### Note you may have to disable CORS on your browser to run this test app

## App functionality

Navigating to localhost:4200 will open up the payment transaction page. This page consists of a single table displaying a maximum of 5 rows, with pagination at the bottom right of the table to navigate to the remaining 25 payment transaction results. There are two filters, a date range filter which will only display transactions that occurred within the specified date range, and a transaction status filter that will only show transactions specified by the multi option select.

The app has been built to lazy load the payment transaction module and routes, as the transaction page may could belong to a larger app. Detection has also been changed to onPush.


## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Outstanding todo items
-Flesh out server side pagination with actual http request<br />
-Flesh out server side filtering with actual http request<br />
-Add log in page instead of hardcoding username and password<br />
-Improve date picker input to expect unsupported date formats<br />
-Add error message for unsupported date formats on date picker<br />
-Add Vyne colours to custom material theme<br />
-Add lint check to tests<br />
-Fix issue of table columns changing on filter change<br />
-Add loading spinner directive<br />
-Create common module for tests<br />
-Add toast message for http errors<br />
-Add sorting to table<br />
-Add time for createdAt to table<br />