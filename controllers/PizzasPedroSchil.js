const pizzas = require('../database/Pizzas.json');

module.exports={
    index : (req,res) =>{
        res.send("pizza-create2.ejs",  { nome: "pizzaria Di pietro"});
    }
}