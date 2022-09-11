const fs = require('fs');
const csv = require("csv/sync");
const axios = require('axios').default;

(async function () {

	var outputFileName = "./csv-files/t.csv";

	/**
	 * input 
	 */
	var requestResult = await axios.get("https://t.net/");
	if(requestResult.data.length === 0) return;
	requestResult.data.forEach(el => el.payload.query.timestamp = el.eventDateTime);
	var headers = Object.keys(requestResult.data[0].payload.query).map(k => k);
	var stringifiedColletion = [headers.join(",")];

	/**
	 * filters 
	 */

	/**
	 * output 
	 */
	stringifiedColletion = [...stringifiedColletion, 
		...csv.stringify(requestResult.data.map(el => el.payload.query)).split('\n')];
	
	await fs.writeFileSync('./' + outputFileName, stringifiedColletion.join('\n'));
	
	debugger;

})();