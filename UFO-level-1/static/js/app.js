console.log("app.js is being read")

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// Test to make sure data is being read
console.log(data);

tableData.forEach(function(sighting){
    console.log(sighting)
});


tableData.forEach((sightingReport) => {
    var row = tbody.append("tr");
    Object.entries(sightingReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });