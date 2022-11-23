const fs = require('fs').promises;
const csv = require("csv/sync");

(async () => {

	var inputFileName = "file_1.csv";

	/**
	 * input 
	 */
  var allRows = [];
  for (let index = 0; index < 7; index++) {
    var i = "00" + index;
    var fileContent = await fs.readFile('./csv-files/' + inputFileName + i.slice(-3));
    //var fileContent = await fs.readFile('./csv-files/' + inputFileName + index + '.csv');
    var rows = csv.parse(fileContent, {columns: true, delimiter: ",", skip_empty_lines: true});
    allRows = [...allRows, ...rows];
  }

	/**
	 * filters 
	 */
  var allWithIp = allRows.filter(el => el.ip_address);

  var allWhereColumnBEqualsX = allRows.filter(el => el.b === 'X');
  
	/**
	 * output 
	 */
  // check "allWithIp" or "allWhereColumnBEqualsX" in memory
  debugger;
})();