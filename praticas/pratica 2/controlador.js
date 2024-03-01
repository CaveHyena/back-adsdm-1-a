
const Contato = require ('./modelo');
const contatos = [];

function adicionarContato() {
    const nome = ("Informe seu nome: ");
    const email = readline.question("Informe seu email: ");
    const telefone = readline.question("Informe seu telefone: ");
    const novo = {nome, email, telefone};
    contatos.push(novo);
}

function listarContato() {
    contatos.forEach((contatos) =>
    console.log(contatos.nome, "-", contatos.email, "-", contatos.telefone));
}

function buscarContato() {
    const nome = readline.question("Informe o nome: ");
    const buscou = contatos.find(contatos => contatos.nome === nome);
    if (buscou) {
        console.log(buscou.nome, "-", buscou.email, "-", buscou.telefone);
    } else {
        console.log("Contato não encontrado");
    }
}

function atualizarContato() {
    const nome = readline.question("Informe o nome: ");
    const buscou = contatos.find(contatos => contatos.nome === nome);
    if (buscou) {
       const outroNome = readline.question("Informe outro nome: ");
       const outroEmail = readline.question("Informe outro email: ");
       const outroTelefone = readline.question("Informe outro telefone: ");
       buscou.nome = outroNome;
       buscou.email = outroEmail;
       buscou.telefone = outroTelefone;
    } else {
        console.log("Contato não encontrado");
    }
}

function removerContato() {
    const nome = readline.question("Informe o nome: ");
    const posicao = contatos.findIndex((contatos) => contatos.nome === nome);
    if (posicao >= 0) {
        contatos.splice(posicao, 1);
    } else {
        console.log("Contato não encontrado");
    }
}

module.exports = {adicionarContato, listarContato, buscarContato, atualizarContato, removerContato};