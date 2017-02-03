function getProducts(sheet) {
  const products = [];
  let row = 4;
  while (sheet['B' + row]) {
    const product = {
      id: sheet['B' + row].w,
      name: sheet['C' + row].w,
      model: sheet['D' + row].w,
    };
    // console.log(product);
    products.push(product);
    row++;
  }
  console.log(products.length);
  return products;
}

module.exports = {
  getProducts: getProducts
};
