// ** Controle de Fluxo **
// É tipo um jogo, parecido com Detroit ou qualquer jogo com escolhas. Basicamente, permite que o programa tome decisões e repita ações com base em condições e interações do usuário. Principais estruturas de Cotrole de Fluxo: if, else e else if (condicionais); while e for (loops.)

// Exemplo de Condicionais

let escolha = prompt("Você quer seguir para Front-End ou Back-End?");

if (escolha === "Front-End") {
    let tecnologia = prompt("Você quer aprender React ou Vue?");
    console.log(`Ótima escolha! ${tecnologia} é muito usado no mercado.`);
} 
else if (escolha === "Back-End") {
    let tecnologia = prompt("Você quer aprender C# ou Java?");
    console.log(`Ótima escolha! ${tecnologia} é muito utilizado para servidores.`);
} 
else {
    console.log("Escolha inválida. Tente novamente!");
}

// Exemplo de Loops

let continuar = "ok";
while (continuar === "ok") {
    let tecnologia = prompt("Digite uma tecnologia que você gostaria de aprender:");
    console.log(`Interessante! ${tecnologia} tem bastante aplicação no mercado.`);
    continuar = prompt("Tem mais alguma tecnologia que você gostaria de aprender? (ok para continuar, qualquer outra tecla para sair)");
}
