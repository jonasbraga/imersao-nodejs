const { obterPessoas } = require("./service");

Array.prototype.meuReduce = function (callback, valorInicial) {
  let valorFinal = valorInicial ? valorInicial : this[0];

  for (let i = 0; i < this.length - 1; i++) {
    valorFinal = callback(valorFinal, this[i], this);
  }

  return valorFinal;
};

const main = async () => {
  try {
    const { results } = await obterPessoas("a");

    const pesos = results.map((item) => parseInt(item.height));

    console.log("Pesos", pesos);

    // const total = pesos.reduce((anterior, proximo) => anterior + proximo, 0);

    const matrix = [
      [[0], [1], [2], [3], [4], [5], [6], [7], [9]],
      [["a"], ["b"], ["c"], ["d"], ["e"], ["f"], ["g"], ["h"], ["i"], ["j"]],
    ];

    const total = matrix.meuReduce(
      (anterior, proximo) =>
        anterior
          .meuReduce(
            (before, after) => before.toString() + after.toString(),
            []
          )
          .toString()
           +
        proximo
          .meuReduce(
            (before, after) => before.toString() + after.toString(),
            []
          )
          .toString(),
      []
    );

    console.log("Total", total);
  } catch (error) {
    console.log("Error", error);
  }
};

main();
