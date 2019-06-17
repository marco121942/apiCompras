
const mysql = ('mysql');

const db= require('../DataBase');



module.exports = {
	show: function (req, res) {

		db.query('SELECT * FROM categoria',(err, rows, fields) =>{

			if(!err){
				res.json(rows);
			}else{
				console.log(err);
			}

		});
	},

		create: function(req,res){
	 let nombre_categoria = req.body.nombre_categoria;


		db.query("INSERT INTO categoria SET ? ", { nombre_categoria }, (err, rows, fields) =>{

			if(!err){
				res.json({id: rows.insertId,nombre_categoria });
				console.log({id: rows.insertId,nombre_categoria});
				//console.log(rows)
				//res.json(rows);
			}else{
				//console.log(err);
				console.log("Hay datos duplicados");
			}

		});
		
	},
}