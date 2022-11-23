const fs = require('fs');
const csv = require("csv/sync");

(async () => {
  try {
    var inputFileNameOne = process.argv[2] || "file_1.csv";
    var inputFileNameTwo = process.argv[3] || "file_2.csv";
    var outputFileName = "compare-headers.json";
  
    /**
     * input 
     */
    var payload = {};
    var headersFileOne =
      csv.parse(await fs.promises.readFile('./csv-files/' + inputFileNameOne), {from: 0, to: 1})[0];
    var headersFileTwo = 
      csv.parse(await fs.promises.readFile('./csv-files/' + inputFileNameTwo), {from: 0, to: 1})[0];
    
    /**
     * BUILD 
     */
    payload.names = {
      fileOne: inputFileNameOne,
      fileTwo: inputFileNameTwo
    }
    payload.totals = {
      sameLength: headersFileOne.length === headersFileTwo.length,
      fileOneLength: headersFileOne.length,
      fileTwoLength: headersFileTwo.length,
    }
    payload.differences = {
      fileOne: headersFileOne.filter(x => !headersFileTwo.includes(x)),
      fileTwo: headersFileTwo.filter(x => !headersFileOne.includes(x))
    }
    payload.intersections = {
      length: headersFileOne.filter(x => headersFileTwo.includes(x)).length,
      bothFiles: headersFileOne.filter(x => headersFileTwo.includes(x))
    }
    payload.orderedProperties = {
      fileOne: headersFileOne.sort(),
      fileTwo: headersFileTwo.sort()
    }
    
    /**
     * output 
     */
    fs.writeFileSync('./csv-files/' + outputFileName, JSON.stringify(payload, null, 4));
    
    debugger;  
  } catch (error) {
    console.log("Error: ", error);
  }
})();