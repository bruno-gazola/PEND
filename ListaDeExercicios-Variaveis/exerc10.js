let mensagem = "Olá, esta é uma mensagem global!";

function exibirMensagem() {
    let mensagemLocal = "Esta é uma mensagem local dentro da função.";

    console.log("Dentro da função (global): " + mensagem);
    
    console.log("Dentro da função (local): " + mensagemLocal);
}

exibirMensagem();

console.log("Fora da função (global): " + mensagem);

// Isso causará erro, pois a variável mensagemLocal é local à função
console.log("Fora da função (local): " + mensagemLocal);
