let date = require('./date');

function getSell(sheet) {
  const sell = [];
  let row = 5;
  while (sheet['A' + row]) {
    const s = {
      order: +sheet['A' + row].v,
      date: date(+sheet['B' + row].v),
      receiptId: sheet['C' + row].v,
      product: sheet['D' + row].v,
      amount: +sheet['H' + row].v,
      price: (sheet['K' + row] && +sheet['K' + row].v) || 0,
    };
    // console.log(s);
    sell.push(s);
    row++;
  }
  console.log(sell.length);
  return sell;
}

module.exports = {
  getSell: getSell
};
