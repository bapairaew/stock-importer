let date = require('./date');

function getBuy(sheet) {
  const buy = [];
  let row = 5;
  while (sheet['A' + row]) {
    const b = {
      order: +sheet['A' + row].v,
      date: date(+sheet['B' + row].v),
      receiptId: sheet['C' + row].v,
      product: sheet['D' + row].v,
      amount: +sheet['G' + row].v,
      price: (sheet['K' + row] && +sheet['K' + row].v) || 0,
    };
    // console.log(b);
    buy.push(b);
    row++;
  }
  console.log(buy.length);
  return buy;
}

module.exports = {
  getBuy: getBuy
};
