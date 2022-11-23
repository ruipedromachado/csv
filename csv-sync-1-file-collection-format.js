const fs = require('fs').promises;
const csv = require("csv/sync");

(async () => {
	var inputFileName = "file_1.csv";

	/**
	 * input 
	 */
	var fileContent = await fs.readFile('./csv-files/' + inputFileName);
	var rows = csv.parse(fileContent, { columns: true, delimiter: ",", skip_empty_lines: true });

	/**
	 * filters 
	 */
	var t = rows.filter(el => el.column === "1");
	
	/**
	 * output 
	 */
	// check "t" or "rows" in memory

	debugger;

})();