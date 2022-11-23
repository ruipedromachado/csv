const fs = require("fs");
const csv = require("csv");

(async () => {

  var fileName = "APPOINTMENTS_GP_COVERAGE.csv";

  var collection = [];
  var data = fs.createReadStream("./csv-files/" + fileName).pipe(csv.parse());

  data.on("data", row => {
    collection.push(row);
  });
  data.on("end", () => {
    var totalRecords = collection.length;
    console.log(totalRecords);
    console.log(collection);
  });
  data.on("error", error => {
    console.log("error:", error.message);
  });

	debugger;

})();