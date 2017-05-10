/*  creating interface*/
const readline = require('readline');
const fs = require('fs');
let log4js = require('log4js');
let logger = log4js.getLogger();
/*  Initializing variables*/
const readline = require('readline');
const fs = require('fs');
let data = [];
let i = 0;
let countryIndex = 0;
let populationIndex = 0;
let gdpIndex = 0;
let a = [];
let b = [];
let ajson = [];
let bjson = [];
/* validation function for startyear*/
module.exports = function convert(startYear) {
if(typeof startYear === 'string') {
  return '';
}
if (typeof startYear !== 'number' || isNaN(startYear)) {
  throw new Error('Not a number');
}
 const rl = readline.createInterface({
  input: fs.createReadStream('../ inputdata/table.csv')
 });
/* split function for split the lines*/
const rl = readline.createInterface({
  input: fs.createReadStream('table.csv')
});
rl.on('line', (line) => {
if(i === 0) {
    data = line.split(',');
    countryIndex = data.indexOf('Country Name');
    populationIndex = data.indexOf('Population (Millions) - 2013');
    gdpIndex = data.indexOf('GDP Billions (US$) - 2013');
    i = 1;
}
data = line.split(',');
a.push({country: data[countryIndex], gdp: data[gdpIndex]});
   b.push({country: data[countryIndex], population: data[populationIndex]});
});
/*  timeout function for some delay*/
setTimeout(function() {
    a.pop();
    a.pop();
    b.pop();
    b.pop();
    a.shift();
    b.shift();
/*  sorted the arry*/
a.sort(function(x, y) {return y.gdp - x.gdp;});
    b.sort(function(x, y) {return y.population - x.population;});
logger.debug(a);
logger.debug(b);
/*  converted into json*/
ajson = JSON.stringify(a);
bjson = JSON.stringify(b);
/*  write the output into output file*/
fs.writeFile('output1G20Uma.json', ajson);
 fs.writeFile('output2G20Uma.json', bjson);
a.sort(function(x, y) {return y.gdp - x.gdp;});
    b.sort(function(x, y) {return y.population - x.population;});
ajson = JSON.stringify(a);
bjson = JSON.stringify(b);
fs.writeFile('output1.json', ajson);
 fs.writeFile('output2.json', bjson);
}, 500);
return 'JSON written successfully';
};
