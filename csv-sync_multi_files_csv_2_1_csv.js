const fs = require('fs');
const csv = require("csv/sync");

(async function () {

	var outputFileName = "./csv-files/test_13092022v1.csv";

	/**
	 * input 
	 */
	var headers = [];
	var stringified = "";
	var stringifiedColletion = [];
  var allRows = [];
  for (let index = 0; index < 5; index++) {
    var i = "00" + index;
    var fileContent = await fs.promises.readFile('./csv-files/data_2022-09-13.csv' + i.slice(-3));
    var rows = csv.parse(fileContent, {
			columns: true, 
			delimiter: ",", 
			skip_empty_lines: true, 
			columns: h => headers = h});
    allRows = [...allRows, ...rows];
  }
	stringifiedColletion.push(headers.join(","));

	/**
	 * filters 
	 */
  var a = 
		allRows.filter(el => el.a === "1");
	var b = 
		allRows.filter(el => el.b === "1");
	
	
	
	
	var t = [
		...a.slice(0, 1000), 
		...b.slice(0, 1000)
		];
	
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