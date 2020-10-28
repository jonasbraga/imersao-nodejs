/**
 * Manipulando código assíncrono através de callbacks
 * Obter um usuário
 * Obter o número de telefone de um usuário a partir do seu Id
 * Obter o endereço de um usuário a partir do seu Id
 */

function obterUsuario(callback) {
  setTimeout(() => {
    callback(null, {
      id: 1,
      nome: "Jonas",
      dataNascimento: new Date(),
    });
  }, 1000);
}

function obterTelefone(__idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: "911990022",
      ddd: 11,
    });
  }, 2000);
}

function obterEndereco(__idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "Principal",
      numero: 125,
    });
  }, 2000);
}

obterUsuario(function resolverUsuario(error, usuario) {
  if (error) {
    console.error("DEU RUIM NO USUARIO", error);
    return;
  }
  obterTelefone(usuario.id, function resolverTelefone(error1, telefone) {
    if (error1) {
      console.error("DEU RUIM NO TELEFONE", error);
      return;
    }
    obterEndereco(usuario.id, function resolverEndereco(error2, endereco) {
      if (error2) {
        console.error("DEU RUIM NO ENDEREÇO", error);
        return;
      }

      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero},
        Telefone: ${telefone.ddd} - ${telefone.telefone}.
      `);
    });
  });
});
