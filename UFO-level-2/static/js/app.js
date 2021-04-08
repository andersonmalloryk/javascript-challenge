console.log("app.js is being read")

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Select button and form from the HTML
var form = d3.select("#form");
var filter_button = d3.select("#filter-btn")

// Create event handlers for clicking the filter button or pressing the enter key
form.on("submit", runEnter);
filter_button.on("click", runEnter);

// Create a function to run both events
function runEnter() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var dateValue = dateInput.property("value");
    console.log(dateValue);

    var cityInput = d3.select("#city");
    var cityValue = cityInput.property("value");
    console.log(cityValue);

    var stateInput = d3.select("#state");
    var stateValue = stateInput.property("value");
    console.log(stateValue);

    var countryInput = d3.select("#country");
    var countryValue = countryInput.property("value");
    console.log(countryValue);

    var shapeInput = d3.select("#shape");
    var shapeValue = shapeInput.property("value");
    console.log(shapeValue);

    var filteredData = tableData.filter(date => date.datetime === dateValue).filter(city => city.city === cityValue).filter(state => state.state === stateValue).filter(country => country.country === countryValue).filter(shape => shape.shape === shapeValue);

    console.log(filteredData)

    // Read data to table
    filteredData.forEach((sightingReport) => {
        var row = tbody.append("tr");
        Object.entries(sightingReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });

};

