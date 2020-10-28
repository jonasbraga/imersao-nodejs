# :books: Imersão node.js :computer:
Repositório onde registrarei todos os conhecimentos e aprendizados adquiridos no curso **gratuito** de [Imersão em desenvolvimento de APIs com Node.js By #NodeBR!](https://training.erickwendel.com/p/node-js-para-iniciantes-nodebr)

## :gear: Instalação do node.js no ubunto ([ref](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04))
* Primeiramente atualize os pacotes instalados: `sudo apt update`
* Instale o nodejs: `sudo apt install nodejs`
* Instale o npm: `sudo apt install npm`
* Execute o comando: `node -v`

## :pencil: NPM (Node Package Manager)
* Para gerenciar dependências externas, também conhecidas como pacotes
* Evita a necessidade de salvar as depencias pois ele anota quais estão sendo utilizadas e posteriomente basta baixarmos para telas em nossa máquina
* As dependências ficam salvas no arquivo package.json
* Também é possível criar scripts bash com o npm, que interage diretamente com o sistema operacional 
* Para criar um novo projeto executar: `npm init` ou `npm init -y` (para não modificar nada) 

## :pencil: package.json
* Ao rodar node . em um projeto, ele irá executar o arquivo que está no campo main do package.json
* Podemos criar um novo comando de execução no package.json adicionando ele no objeto `"scripts"` do arquivo
* Para executar esses novos comandos, devemos rodar `npm run nome_do_comando`

## :pencil: node por baixo dos panos
* A aplicação js conversa com o node.js, posteriormente ele vai executar o codigo através da V8 e psoteriomente tudo é convertido para c++ através da LIBUV
* Funções que dependem de execução externa (chamada de API, acesso ao banco, leitura de arquivo), serão executadas em background
* A forma como o código é escrito é diferente de como é executado, por causa das funções assíncronas.

## :pencil: Js assíncrono (Callbacks)
* Como o js não espera serviços em background serem realizados para continuar a execução, devemos utilizar de métodos que tornem possível a realização das ações após a execução do serviço.
* Uma forma de fazer isso é utilizando `callbacks`, que consistem em executar uma função passada para o nosso serviço em background depois que ele acabar de ser executado.
* Podemos fazer isso como em um loop infinito, onde uma função tem um callback que por sua vez tem outro callback e assim por diante.
* Uma das desvantagens é que o código fica confuso e cada vez maior.

## :pencil: Js assíncrono (Promises)
* As `promises` são alternativas ao uso do callback para tratar de chamadas assíncronas no js através de status
* Toda promise quando criada é iniciada com o status `pending`
* Quando as operações da promise foram executadas com sucesso, seu status muda para `fulfilled`
* Quando a operação falhou o status retornado é `rejected`
* Toda promisse recebe uma função por parametro que por sua vez tem obrigatoriamente os parametros `(resolve, reject)` que são funções que devem ser executadas quando o nosso codigo der certo (resolve), ou quando ocorrer algum erro (reject)
* Podemos encadear promises, se a promise anterior retornar uma nova promise, utilizando as suas funções `.then()` && `.catch()` 
* As funções `.then()` serão executadas na ordem que estão dispostas no encadeamento, tendo por parametro o que retornou da anterior
* Já as `.catch()` serão executadas quando um `reject()` for disparado, nesse caso, o encadeamento é pulado e cai no primeiro catch que encontrar, seu parametro é o erro retornado pelo reject.

# :pencil: Js assíncrono (Async / Await)
* Utilizando o Async / Await temos uma visualização mais intuitiva do que está sendo executado
* A utilização deste não altera a performance do código (se for bem implementado)
* Devemos adicionar à nossa função a palavra async ex: `async function main(){}` dessa forma ela retornará uma promise
* Ao realizarmos todas as nossa operações assíncronas com `await`, podemos ter uma perda de performance pois o código irá esperar tudo ser executado um após o outro. (ex: async-await.js)
* Podemos utilizar em casos cuja a execução de uma função não depende da outra o `Promise.all([...fuctions]);`, dessa forma as funções serão executadas simultaneamete (ex: async-await-faster.js)

# :exclamation: Calcular tempo de execução
* Podemos utilizar do `console.time('tempo-banco')` && `console.endTime('tempo-banco')` para calcularmos o tempo que a execução do código entre estes 2 consoles demorou.
* Ele retorna em ms

# :pencil: Event Emitter
* Usado para capturar eventos contínuos
* Um exemplo é o browser, que deve identificar quando um usuário clica em um botão e a partir disso executar o código do qual que está ouvindo este evento dispõe (.onClick)
* Utiliza o design pattern Observer/PubSub
* Os publishers enviam as "mensagem" para um único hub, o qual tem o objetivo de quando receber as mensagem, dispará-las para todos os observers que estão ouvindo aquele evento em específico
* Para criarmos um evento e observá-lo, devemos utilizar a classe `events` do node e caso deseje implementar algum metodo novo, basta extendê-la e criar uma própria classe para isso
* O próprio node ja tem alguns eventos prédefinidos por padrão, como o data que utilizamos no ex: event-terminal.js
* Para criarmos eventos customizados podemos utilizar o método `.on()` da classe EventEmitter, que tem como primeiro parâmetro o nome do novo evento e no segundo a função que irá ser executada quando este evento for disparado.
* Para dispararmos um evento customizado, basta utilizarmos o método `.emit()` da classe EventEmitter, que tem como o método .on(), o nome do evento como 1º parâmetro e no segundo, um valor que será enviado para a função que será executada ao receber o evento.

# :exclamation: Loop infinitos com setInterval()
* Podemos criar loops com a função nativa do js `setInterval(function, time)`
* Como o setTimeout, a cada período de tempo definido no parâmetro time, a função será executada.
* Bom para testar disparos de eventos ;)