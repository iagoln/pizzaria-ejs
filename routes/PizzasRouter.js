const { response } = require('express');
var express = require('express');
var router = express.Router();


// Configurando o multer para tratar a requisição com arquivos anexos
const multer = require("multer");
const uniqid = require("uniqid");
const storageDeFotoDePizza = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/img")
    },
    filename: (req, file, cb) =>{
        cb(null, uniqid() + '-' + file.originalname);
    }
})
const uploadDeFotoDePizza = multer({storage: storageDeFotoDePizza});


const PizzasController = require('../controllers/PizzasController');
const PizzasIagoNunes = require('../controllers/PizzasIagoNunes')

const PizzasMelissa = require('../controllers/PizzasMelissa');
/* GET home page. */
router.get('/', PizzasController.index);
router.get('/pizzas/create', PizzasController.create);
router.post('/pizzas/create',uploadDeFotoDePizza.single('img'), PizzasController.store);
router.get('/pizzas/:id', PizzasController.show);
router.get('/busca', PizzasController.busca);
router.get('/pizzacreate2', PizzasLeandroCoelho.index);

router.get('/iagonunes',PizzasController.index)

router.get('/melissa',PizzasMelissa.index);


module.exports = router;
