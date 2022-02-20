const mongojs = require('mongojs');
const db = mongojs('fullapp', ['gradovi']);

const createGradController = (req, res) => {
  let ime = req.body.name;
  let zip = req.body.zip;

  db.gradovi.insert({name: ime, zip: zip}, (err, docs) => {
    res.redirect('/admin');
  })
}

module.exports = createGradController;