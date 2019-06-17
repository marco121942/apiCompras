var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user : 'root',
    password: 'password',
    database: 'api',
   debug: false
 
  });


  db.connect(function(err) {
      if (err) {
        //throw err
        //imprimir error
        //console.log(err);
        console.log('No se conecto ala base de datos ');
      } else {
      console.log("Se conecto ala base de datos shoppingapi")
      };
  });

module.exports = db;



