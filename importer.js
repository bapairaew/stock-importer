const products = require('./output/products');
const sell = require('./output/sell');
const buy = require('./output/buy');

const Product = require('./models/Product');
const Buy = require('./models/Buy');
const Sell = require('./models/Sell');
const User = require('./models/User');

function findById(collection, id) {
  const items = collection.filter(c => c.id === id);
  return items.length > 0 ? items[0]._id : null;
}

function log(obj) {
  console.log(obj);
  return obj;
}

const mongoUrl = 'mongodb://localhost/stock';
const mongoose = require('mongoose');
mongoose.connect(mongoUrl);
mongoose.connection.on('connected', function(err) {
  User
  .remove({}, function () {
    User.register(new User({ username: 'admin' }), 'test', function (err) {
      console.log('User done!');
    });
  });

  Product
  .remove({}, function () {
    Product
    .insertMany(products)
    .then(function (ps) {
      console.log('Product done!');

      Buy
      .remove({}, function () {
        Buy
        .insertMany((buy.map(function (b) {
          return Object.assign({}, b, {
            product: findById(ps, b.product)
          });
        })))
        .then(() => {
         console.log('Buy done!');
          Sell
          .remove({}, function () {
            Sell
            .insertMany((sell.map(function (b) {
              return Object.assign({}, b, {
                product: findById(ps, b.product)
              });
            })))
            .then(() => console.log('Sell done!'))
            .catch((err) => console.log(err));
          });
        })
        .catch((err) => console.log(err));
      });
    });
  });
});
