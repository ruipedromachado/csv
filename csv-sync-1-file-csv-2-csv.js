const fs = require('fs');
const csv = require("csv/sync");

(async () => {
	var inputFileName = "file_1.csv";
	var outputFileName = "t-o.csv";

	/**
	 * input 
	 */
	var fileContent = await fs.promises.readFile('./csv-files/' + inputFileName);
	var rows = csv.parse(fileContent, {delimiter: ",", skip_empty_lines: true});
	
	/**
	 * filters 
	 */
	var f1 = rows.filter(o => o.ch);
	var f2 = rows.filter(o => o.b === false);
	
	var t = [...f1, ...f2];
	
	/**
	 * output 
	 */
	fs.writeFileSync('./csv-files/' + outputFileName, rows.join('\n'));
	
	debugger;
})();