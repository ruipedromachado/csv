const fs = require('fs');
const csv = require("csv/sync");

(async function () {

	var inputFileName = "./csv-files/t-i.csv";
	var outputFileName = "./csv-files/t-o.csv";

	/**
	 * input 
	 */
	var headers = [];
	var stringified = "";
	var stringifiedColletion = [];
	var fileContent = await fs.promises.readFile('./' + inputFileName);
	var rows = csv.parse(fileContent, { 
		columns: true, 
		delimiter: ",", 
		skip_empty_lines: true, 
		columns: h => headers = h
	});
	stringifiedColletion.push(headers.join(","));

	/**
	 * filters 
	 */
	var f1 = rows.filter(o => o.ch);
	var f2 = rows.filter(o => o.b === false);
	
	var t = [...f1, ...f2];
	
	/**
	 * output 
	 */
	if (t.length > 0) {
		stringified = csv.stringify(t);
		stringifiedColletion = [...stringifiedColletion, ...stringified.split('\n')];
	}
	await fs.writeFileSync('./' + outputFileName, stringifiedColletion.join('\n'));
	
	debugger;

})();