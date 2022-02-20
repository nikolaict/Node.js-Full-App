const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users', 'proizvod']);

const createProizvodController = (req, res) => {
  let ime = req.body.name;
  let price = req.body.price;

  db.proizvod.insert({name: ime, price: price}, (err, docs) => {
    res.redirect('/admin');
  })
}

module.exports = createProizvodController;