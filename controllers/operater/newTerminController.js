const mongojs = require('mongojs');
const db = mongojs('fullapp', ['users','termini']);

const newTerminController = (req, res) => {
    let user = req.session.user;
  db.termini.insert({
      imeStranke: req.body.imeStranke,
      prezimeStranke: req.body.prezimeStranke,
      godisteStranke: req.body.godisteStranke,
      imeSupruznika: req.body.imeSupruznika,
      prezimeSupruznika: req.body.prezimeSupruznika,
      godisteSupruznika: req.body.godisteSupruznika,
      fiksniTelefon: req.body.fiksniTelefon,
      mobilniTelefon: req.body.mobilniTelefon,
      adresa: req.body.adresa,
      datumZakazivanja: req.body.datumZakazivanja,
      vremeZakazivanja: req.body.vremeZakazivanja,
      savetnik: req.body.savetnik,
      grad: req.body.grad,
      deca: req.body.deca,
      operacije: req.body.operacije,
      terapija: req.body.terapija,
      napomena: req.body.napomena,
      active: true,
      vrednostUgovora: 0,
      razlog: "",
      ulaz: false,
      proizvod: "",
      operater: `${user.first_name} ${user.last_name}`
  }, (err, docs) => {
    res.redirect('/operater')
  });
};

module.exports = newTerminController;