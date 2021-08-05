//teste Leandro Coelho
const pizzas = require('../database/Pizzas.json');
const fs = require('fs');
const path = require('path');

module.exports = {
	index: (req, res)=>{
		res.render("pizza-create2", {nome:"Pizzaria do lelê"});
	},
}