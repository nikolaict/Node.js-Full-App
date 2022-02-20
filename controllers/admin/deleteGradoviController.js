const mongojs = require('mongojs');
const db = mongojs('fullapp', ['gradovi']);

const deleteGradoviController = (req, res) => {
    let gradoviId = req.params.gradoviId;
    db.gradovi.remove({ _id: mongojs.ObjectID(gradoviId) }, (err, docs) => {
        res.send("OK");
    })
}

module.exports = deleteGradoviController;