function enter(num){
    let numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero + num;
}

function clean(){
    document.getElementById("display").innerHTML = ""
}

function back(){
    let numero = document.getElementById("display").innerHTML;
    document.getElementById("display").innerHTML = numero.substring(0, numero.length -1);
}

function calcular() {
    let resultado = document.getElementById("display").innerHTML;
    let contAberto = 0;
    let contFechado = 0;

    // Verificar o balanceamento de parênteses
    for (let i = 0; i < resultado.length; i++) {
        const caractere = resultado.charAt(i);
        if (caractere === "(") {
            contAberto++;
        } else if (caractere === ")") {
            contFechado++;
        }
    }

    if (contAberto !== contFechado) {
        window.alert("Os parênteses não estão balanceados. Não é possível fazer essa conta.");
    } else {
        // Se os parênteses estão balanceados, avalie a expressão
        document.getElementById("display").innerHTML = eval(resultado);
    }
}