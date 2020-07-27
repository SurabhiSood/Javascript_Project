### Goal
Use JavaScript to populate an HTML table with UFO sighting data, and create an event listener to search through the date column to find rows that match user input.

### Process
A basic HTML webpage was created first to house the table. This page contains a simple header image and two columns. The first column contains an input form where a user can input the date he/she wants to filter by, and two buttons; one to filter, and one to reset the table. The second column contains the framework for the table, with only the table headers hard-coded in.

![screenshot](https://github.com/SurabhiSood/Javascript_Project/blob/master/Code/static/images/Capture.PNG)

To populate the rest of the table, I sourced the data (tableData) held in data.js into app.js and then selected the table body using D3 (d3.select). Then, I wrote a function populateTable() to populate the table by mapping tableData; appending a new table row for each object (dictionary), and populating each column with the values for each key within that object (dictionary). To populate the table, the function was simply called.

To filter the table based on a user input date, I wrote an anonymous function that would be triggered when the filter button was clicked. This function first selects the user input with d3.select() and .property(“value”). Then, filters tableData based on that input value with .filter(), storing the results in filteredData. After, the original table is cleared using tbody.html(“”); it is repopulated with filteredData. This is achieved by using a forEach loop on filteredData to append a new row and populate each column.

The second event listener was created to reset the table back to its original state. This was done by writing another anonymous function that would be triggered when the unfilter button was clicked. This function is short, simply clearing the existing table and calling the populateTable() function.
