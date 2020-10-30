/**
 * Manipulando código assíncrono através de async / await (refactor do promises)
 * Obter um usuário
 * Obter o número de telefone de um usuário a partir do seu Id
 * Obter o endereço de um usuário a partir do seu Id
 */

// importação do module util para conversão de async functions utilizando callbacks para promises

const util = require("util");

function obterUsuario() {
  // Quando der erro utiliza o reject
  // Quando der td certo utiliza o resolve
  return new Promise((resolve, __reject) => {
    setTimeout(() => {
      //   return reject(new Error("DEU MT RUIM"));
      return resolve({
        id: 1,
        nome: "Jonas",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(__idUsuario) {
  return new Promise((resolve, __reject) => {
    setTimeout(() => {
      return resolve({
        telefone: "911990022",
        ddd: 11,
      });
    }, 2000);
  });
}

function obterEndereco(__idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Principal",
      numero: 125,
    });
  }, 2000);
}

// Converte a função obterEndereco que utiliza callback para promises
const obterEnderecoAsync = util.promisify(obterEndereco);

// async no inicio da function
async function main() {
  try {
    console.time("medida-promise");

    const usuario = await obterUsuario(); // Espera buscar o usuario
    const telefone = await obterTelefone(usuario.id); // + Espera buscar o telefone
    const endereco = await obterEnderecoAsync(usuario.id); // + Espera buscar o endereço
    console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero},
            Telefone: ${telefone.ddd}-${telefone.telefone}.
        `);
        
    console.timeEnd("medida-promise"); // 5000ms
  } catch (error) {
    console.error("Deu ruim", error);
  }
}

main();
