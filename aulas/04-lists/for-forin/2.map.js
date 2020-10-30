const service = require("./service");

Array.prototype.meuMap = function (callback) {
  const novoArrayMapeado = [];
  for (let i = 0; i < this.length - 1; i++) {
    const element = callback(this[i], i);
    novoArrayMapeado.push(element);
  }
  return novoArrayMapeado;
};

const main = async () => {
  try {
    const result = await service.obterPessoas("a");
    let names = [];

    console.time("forEach");
    result.results.forEach((item) => {
      names.push(item.name);
    });
    console.timeEnd("forEach");

    console.time("map");
    names = result.results.map((pessoa) => pessoa.name);
    console.timeEnd("map");

    console.time("meuMap");
    names = result.results.meuMap(
      (pessoa, indice) => `[${indice}] - ${pessoa.name}`
    );
    console.timeEnd("meuMap");

    console.log("Names:", names);
  } catch (error) {
    console.log("Errro:", error);
  }
};

main();
