
const bcrypt = require('bcrypt');

exports.seed = function(knex) {
 
      return knex('user').insert([
        { username: 'Kyle', password: bcrypt.hashSync("Kyle", 8)},
        { username: 'Ricky', password: bcrypt.hashSync("Ricky", 8)},
        { username: 'Calta', password: bcrypt.hashSync("Calta", 8)}
      ]);
};
