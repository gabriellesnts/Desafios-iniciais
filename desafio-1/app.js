//1. Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo",
//mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
diaDaSemana = prompt ('Qual o dia da semana?');
if (diaDaSemana == sabado) {
    alert ('Bom fim de semana!')
} else if (diaDaSemana == domingo); {
    alert ('Bom fim de semana!');
} else {
    alert ('Boa semana');
}

//2. Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
numero = prompt ('Digite um número postivo ou negativo.');
if (numero) > 0 {
    alert ('Esse número é positivo!');
} else {
    alert ('Esse número é negativo');
}

//3. Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, 
//mostre "Parabéns, você venceu!" no console do navegador. Caso contrário, mostre 
//"Tente novamente para ganhar.".
pontos = prompt ('Digite um número.');
pontos = parseInt(pontos);
if (pontos) >= 100 {
    console.log ('Parabéns, você venceu!')
} else if (pontos < 100) {
    console.log ('Tente novamente para ganhar!');
}

//4. Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma 
//template string para incluir o valor do saldo.
saldoDaConta = prompt ('Qual o saldo da sua conta?');
alert (`O saldo da sua conta é: ${saldoDaConta}.`);

//Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta 
//de boas-vindas usando esse nome.
let nome = prompt ('Qual o seu nome?');
alert (`Boas vindas, ${nome}!`);

