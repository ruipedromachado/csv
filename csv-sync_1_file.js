const fs = require('fs').promises;
const csv = require("csv/sync");

(async function () {


  var fileContent = await fs.readFile('./csv-files/t.csv');
  var rows = csv.parse(fileContent, {columns: true, delimiter: ",", skip_empty_lines: true});
  
  var t = rows.filter(o => o.key);

  console.log(t);
  debugger;

})();