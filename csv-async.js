const fs = require("fs");
const csv = require("csv");

var header, collection = [], index = 1;
var data = fs.createReadStream("./csv-files/t.csv")
  .pipe(csv.parse({ delimiter: ",", from_line: 1, skip_empty_lines: true }))

data.on("data", row => {
  if(index === 1) {
    header = row;
  } else {
    var obj = {};
    header.forEach((headerColumn, headerIndex) => {
      obj[header[headerIndex]] = row[headerIndex];
    });
    collection.push(obj);
  }
  index++;
});
data.on("end", () => {
  
  var totalRecords = collection.length;
  console.log(totalRecords);
  console.log(collection);
  
  debugger;

});
data.on("error", error => {
  console.log("error:", error.message);
});
