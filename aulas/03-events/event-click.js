const EventEmitter = require("events");
class MeuEmissor extends EventEmitter {}

const meuEmissor = new MeuEmissor();
const nomeEvento = "usuario:click";
meuEmissor.on(nomeEvento, (click) => {
  console.log("Um usuario clicou", click);
});


let count = 0;
setInterval(() => {
    meuEmissor.emit(nomeEvento, `Clicou no ${++count}º botão ok`);
}, 1000);