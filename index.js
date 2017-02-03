const fs = require('fs');
const XLSX = require('xlsx');
const Product = require('./Product');
const Sell = require('./Sell');
const Buy = require('./Buy');

const prettyPrintJSON = (json) => JSON.stringify(json, null, 2);

const stockWorkbook = XLSX.readFile('./data/stock.xlsm');

const productSheet = stockWorkbook.Sheets[stockWorkbook.SheetNames[1]];
fs.writeFile('./output/products.js', `const products = ${prettyPrintJSON(Product.getProducts(productSheet))}; module.exports = products;`);

const buySheet = stockWorkbook.Sheets[stockWorkbook.SheetNames[2]];
fs.writeFile('./output/buy.js', `const buy = ${prettyPrintJSON(Buy.getBuy(buySheet))}; module.exports = buy;`);

const sellSheet = stockWorkbook.Sheets[stockWorkbook.SheetNames[3]];
fs.writeFile('./output/sell.js', `const sell = ${prettyPrintJSON(Sell.getSell(sellSheet))}; module.exports = sell;`);
