db.produtos.find({
  valoresNutricionais: {
    $all: [
      { $elemMatch: { tipo: "proteínas", percentual: { $lte: 40, $gte: 30 } } },
    ],
  },
}, {
  nome: 1,
  _id: 0,
});