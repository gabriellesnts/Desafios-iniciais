// 2 Altere o conteúdo da tag h1 com document.querySelector e 
// atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do desafio';

// 3 Crie uma função que exiba no console a mensagem O botão foi 
// clicado sempre que o botão Console for pressionado.
function exibirMensagemNoConsole () {
    console.log ('O botão console foi clicado.')
}

// 4 Crie uma função que exiba um alerta com a mensagem: Eu amo JS, 
// sempre que o botão Alerta for pressionado.
function exibirEuAmoJs () {
    alert ('Eu amo JS');
}

// 5 Crie uma função que é executada quando o botão prompt é clicado,
// perguntando o nome de uma cidade do Brasil. Em seguida, exiba
// um alerta com a mensagem concatenando a resposta com o texto: Estive
// em {cidade} e lembrei de você.
function botaoPrompt () {
    let cidade = prompt ('Digite o nome de uma cidade do Brasil');
} alert (`Estive em ${cidade} e lembrei de você!`);

// 6 Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado 
// da soma em um alerta.
function botaoSoma () {
    let numeroInteiro1 = prompt ('Digite um número inteiro:');
    let numeroInteiro2 = prompt ('Digite outro número inteiro:');
    let numeroInteiro1 = parseInt (numeroInteiro1);
    let numeroInteiro2 = parseInt (numeroInteiro2);
    let resultado = numeroInteiro1 + numeroInteiro2;
} alert = soma (`A soma de ${numeroInteiro1} + ${numeroInteiro2} é igual a: ${resultado}`);

// outro ponto de vista da questão 6
function botaoSoma() {
    let numeroInteiro1 = prompt('Digite um número inteiro:');
    let numeroInteiro2 = prompt('Digite outro número inteiro:');

    // Converte as entradas para números inteiros
    numeroInteiro1 = parseInt(numeroInteiro1);
    numeroInteiro2 = parseInt(numeroInteiro2);

    // Verifica se a conversão foi bem-sucedida
    if (isNaN(numeroInteiro1) || isNaN(numeroInteiro2)) {
        alert('Por favor, digite números inteiros válidos.');
        return;
    }

    let resultado = numeroInteiro1 + numeroInteiro2;

    // Exibe o resultado em um alerta
    alert(`A soma de ${numeroInteiro1} e ${numeroInteiro2} é: ${resultado}`);
}