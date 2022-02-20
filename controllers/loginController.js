const mongojs = require('mongojs');
const { redirect } = require('statuses');
const db = mongojs('fullapp', ['users']);

const loginController = (req, res) => {
    let nameIzForme = req.body.name;
    let passIzForme = req.body.password;

    db.users.find({ first_name: nameIzForme, password: passIzForme }, (err, docs) => {
      if(err) {
          console.log('greska');
          res.redirect('/');
      } else {
          if(docs.length === 1) {
            let user = docs[0];
            req.session.user = user;
            if(user.role == 'admin') {
                res.redirect('/admin');
            } else if(user.role == "operater") {
                res.redirect('/operater')
            } else {
                res.redirect('/');
            }
          } else {
              res.redirect('/')
          }
      }
    })
}

module.exports = loginController;