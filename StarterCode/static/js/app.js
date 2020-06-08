// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;
var tbody = d3.select('tbody');

// getting in information from data.js to the html
function populateInfo(){
    for (var i=0; i<ufo_data.length; i++){
        element = ufo_data[i];
        
        var rows = tbody.append('tr');
        rows.append('td').text(element.datetime);
        rows.append('td').text(element.city);
        rows.append('td').text(element.state);
        rows.append('td').text(element.country);
        rows.append('td').text(element.shape);
        rows.append('td').text(element.durationMinutes);
        rows.append('td').text(element.comments);
    }
}

// calling the function for the webPage to upload with table

populateInfo();

// Event Listener : Filtering the data based on date input

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form-group");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");
  console.log(inputValue);
  
  var filteredData = ufo_data.filter(ufo => ufo.datetime === inputValue);
  console.log(filteredData);
   
  // clear the original table 
  tbody.html("");
  
  for (var j=0; j<filteredData.length; j++){
    var new_row = tbody.append('tr');
    new_element = filteredData[j];
    new_row.append('td').text(new_element.datetime);
    new_row.append('td').text(new_element.city);
    new_row.append('td').text(new_element.state);
    new_row.append('td').text(new_element.country);
    new_row.append('td').text(new_element.shape);
    new_row.append('td').text(new_element.durationMinutes);
    new_row.append('td').text(new_element.comments);
  }
}

// Event Listener : clearing the output with Reset button
var button2 = d3.select(".btn-primary");
button2.on('click',function(){
  //tbody.html("");
  populateInfo();
});
