const readline = require("readline-sync");

const contatoControlador = require("./controlador.js");

function menu () {
    console.log("1. Adicionar contato");
    console.log("2. Listar contatos");
    console.log("3. Buscar contato");
    console.log("4. Atualizar contato");
    console.log("5. Remover contato");
    console.log("6. Sair");
}

function escolherOpcao(opcao) {
    switch(opcao) {
        case '1' :
        contatoControlador.adicionarContato();
        break;
        case '2' : 
        contatoControlador.listarContato()
        break;
        case '3' :
        contatoControlador.buscarContato();
        break;
        case '4' :
        contatoControlador.atualizarContato();
        break;
        case '5' :
        contatoControlador.removerContato();
        break;
        case '6' : process.exit(0);
        default: console.log('Opcao Invalida');

    }
}

function main () {
    while (true) {
        menu();
        const opcao = readline.question("Entre com uma opcao: ");
        escolherOpcao(opcao);
    }
}

main();