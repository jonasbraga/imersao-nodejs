/**
 * Manipulando código assíncrono através de promisses (refactor do callback)
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

const usuarioPromisse = obterUsuario();
// Para manipular o sucesso (resolve), usamos a função .then()
// Para manipular erros (reject), usamos a função .catch()
//
usuarioPromisse
  .then((usuario) => {
    return obterTelefone(usuario.id).then((telefone) => {
      return {
        ...usuario,
        telefone,
      };
    });
  })
  .then((usuario_telefone) => {
    return obterEnderecoAsync(usuario_telefone.id).then((endereco) => {
      return {
        ...usuario_telefone,
        endereco,
      };
    });
  })
  .then((result) => {
    console.log(`
        Nome: ${result.nome},
        Endereço: ${result.endereco.rua}, ${result.endereco.numero},
        Telefone: ${result.telefone.ddd}-${result.telefone.telefone}.
    `);
  })
  .catch((error) => {
    console.error("Deu ruim", error);
  });
