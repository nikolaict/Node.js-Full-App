const mongojs = require('mongojs');
const db = mongojs('fullapp', ['proizvod']);

const deleteProizvodController = (req, res) => {
    let proizvodId = req.params.proizvodId;
    db.proizvod.remove({ _id: mongojs.ObjectID(proizvodId) }, (err, docs) => {
        res.send("OK");
    })
}

module.exports = deleteProizvodController;