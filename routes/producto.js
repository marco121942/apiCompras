var express = require('express');
var router = express.Router();
var controller = require('../Controller/productoController');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({uploadDir: './public/images'})


router.get('/listar', function(req, res, next) {
	controller.show(req,res);
 //console.log('prueba GET usuario');
});
router.post('/codigo', function(req, res, next) {
	controller.codigo(req,res);
 //console.log('prueba GET usuario');
});
router.post('/idProducto', function(req, res, next) {
	controller.idProducto(req,res);
 //console.log('prueba GET usuario');
});


router.post('/crear',multipartMiddleware,function(req,res,next){
	controller.crear(req,res);
});



module.exports = router;
