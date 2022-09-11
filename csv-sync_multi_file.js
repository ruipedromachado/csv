const fs = require('fs').promises;
const csv = require("csv/sync");

(async function () {

  var allRows = [];
  for (let index = 0; index < 17; index++) {
    //var i = "00" + index;
    //var fileContent = await fs.readFile('./csv-files/t.csv' + i.slice(-3));
    var fileContent = await fs.readFile('./csv-files/t_' + index + '.csv');
    var rows = csv.parse(fileContent, {columns: true, delimiter: ",", skip_empty_lines: true});
    allRows = [...allRows, ...rows];
  }

  console.log(allRows);
  debugger;

})();