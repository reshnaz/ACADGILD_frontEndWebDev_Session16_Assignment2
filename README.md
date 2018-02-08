# S13A4

Note: All output related files are under "src/app" folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Problem Statement
1. Create a form with 3 inputs, 1 dropdown field, and 1 field that which will
take the date and a button. Create a text box for searching the values from
the array.
2. The drop down filed values should display on initialization using services.
3. The input and the dropdown fields should use a Two-Way Binding. Create a
model for the fields and initialize them on ngOnInit().
4. Create a service for sending and retrieving the data.
5. Create a function which will bind with the (ngSubmit). Once you click on that
button, it should send the data in the parameter and should display the data
in View. Use pipe to show the date in 9/3/2010 this format.
6. Create a custom pipe to capitalize the first character of any one of the inputs
in the View.
7. Create a custom pipe for searching the values from the array as you enter
the values in the search text box.
8. Create a file in which define the routing configuration and routeroutlet.
9. Divide the file for adding or viewing the data.
10. Define path and assign component accordingly.
11. Define default and wildcard routes.
12. Create a navbar with two text values. Clicking on those values, the page
should route accordingly.
13. Create a path with route parameter.
14. On adding the values, the page should navigate to the view routes.
15. On clicking any one of the data in the view, it should pass the values the
route parameter and display the route parameter values in the view.
16. With the use of routerLink, highlight the navbar as per the routes.
17. Create a component as login, and in that component ngOnInit(), create a
function to store the data in sessionStorage.
18. Create a canActivate Guard and that guard must check if the session storage
is present or not. If it is present, it should redirect it to the next page or else
it should show a message not authorized.
19. Create a canDeactivate guard that will check if the text box values are empty
or not. If not, it should show the message: “Are you sure you don’t want to
save the data?” when the routes changes.
20. Create resolve route which will populate the dropdown values from the
service for the drop down before the component is instantiated.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
