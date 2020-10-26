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