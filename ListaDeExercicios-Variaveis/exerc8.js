/*var:

Funcional ou global (se declarado fora de uma função).
Comportamento: Pode ser redeclarado e reatribuído.

let:

Bloco (o que significa que só é acessível dentro do bloco onde foi declarado).

const:

Escopo: Bloco (igual ao let).
*/
function exemplo() {
    if (true) {
        var x = 10;  
    }
    console.log(x); 

    if (true) {
        let y = 20; 
    }
    // console.log(y);  // Erro: y não está definido, pois 'let' tem escopo de bloco

    const z = 30; 
    console.log(z); 
    // z = 40;  
}

exemplo();



