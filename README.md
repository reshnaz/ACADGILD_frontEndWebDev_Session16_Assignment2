# S15A4

Note: All output related files are under "src/app" folder.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.4.

## Problem Statement
1. Create a form with 3 input,1 dropdown fields and 1 fieled which will take date
and a button. Create a text box for searching the values from the array.
2. The drop-down fieled values should display on initialization using services.
3. The input and the dropdown fields should use two-way binding. Create a model
for the fields and initialize them on ngOnInit()
4. Create a function which will bind with the (ngSubmit). Once you click that button
it should send the data in the parameter and it should display the data in View.
Use pipe to show the date in 9/3/2010 this format.
5. Create a custom pipe to capitalize the first character of the any one of the input
in the View
6. Create a custom pipe for searching the values from the array as you enter the
values in the search text box.
7. Create a file in which define the routing configuration and define routeroutlet.
8. Divide the file for adding the data and for viewing the data.
9. Define path and assign component accordingly.
10. Define default and wildcard routes.
11. Create a navbar with two text values and clicking on those values the page should
routes accordingly.
12. Create a path with route parameter.
13. On adding the values the page should navigate to the view routes.
14. On clicking on any one of the data in the view it should pass the values to the
route parameter and display the route parameter values in the view
15. With the use of routerLink highlight the navbar as per the routes
16. Create a component as login and in that component ngOnInit() create a function
to store the data in sessionStorage
17. Create a canActivate Guard and that guard must check if the session storage is
present or not. If it is present it should redirect it to next page or else it should
show a message not authorized.
18. Create a canDeactivate guard that will check if the text box values are empty or
not. If not, it should show the message “Are you sure you don’t want to save the
data” when the routes changes
19. Create resolve route which will populate the drop-down values from the service
for the drop down before the component is instantiated
20. Create a service which will call the external URL using HTTP.
21. Create a HTTP GET service to get the drop-down values from the external URL
and show the response in the View.
22. Create a HTTP Post service to post the data to the server. Add Content-type
in the header while posting a data.
23. Create a HTTP Delete service to delete the database as per the ID of the
data.
24. Create a HTTP GET service to get the POST values from the database use
async pipe to show the response in the View.
25. Create an Error Handling for all the above service.
26. Import animation module and configure the animation in @Compnent ({}).
27. Define trigger function and 1 state inside the trigger function for active in
style add background color =”#cfd8dc”
28. Define the animation in HTML by property binding.
29. Create the 2 nd state in trigger function for inactive and in style add
background color: “#fff”
30. Create mouseover and mouseleave function and on event of both the
functions are executes, the background color should change accordingly
31. Add transform to scale(1) for inactive and scale(1.1) for active.
32. Add transition for active and inactive and animate for (500) both.
33. Create another trigger for making animations for the data when it gets
displayed and created. Define the trigger in HTML.
34. In the trigger, define state and name it as “in,” give it a style for transform
to translateX to 0. And in HTML, give the default value to the animation as
“in”. 
35. Add transition for enter and in style, add transform to translate from the Y axis. Add animate for 500.
36. Create an animate call-back function and it should show the values in
console.
37. Use keyframes to do multi-step animations for the enter event and keep the
animate time for 400.

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
