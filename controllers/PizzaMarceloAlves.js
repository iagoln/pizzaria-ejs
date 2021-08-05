module.exports = {
  index: (req, res) => {
    res.render("pizza-create2", {nome: "Pizzaria Di Pietro"});
  }
}