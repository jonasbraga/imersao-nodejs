const { obterPessoas } = require("./service");

Array.prototype.meuFilter = function (callback) {
  const lista = [];
  for (index in this) {
    const item = this[index];
    const result = callback(item, index, this);
    if (!result) continue;
    lista.push(item);
  }
  return lista;
};

const main = async () => {
  try {
    const { results } = await obterPessoas("a");

    /*
     const familiaLars = results.filter((item) =>
      item.name.toLowerCase().includes("lars")
    );
    */

    const familiaLars = results.meuFilter((item, index, lista) => {
      console.log(`index: ${index}`, lista.length);
      return !item.name.toLowerCase().includes("lars");
    });

    const names = familiaLars.map((pessoa) => pessoa.name);

    console.log("Names", names);
  } catch (error) {
    console.log("Error", error);
  }
};

main();
