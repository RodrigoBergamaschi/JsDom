function compararNumeros() {
    var numero1 = parseInt(document.getElementById("valorNumero1").value);
    var numero2 = parseInt(document.getElementById("valorNumero2").value);
    var maior;
    var menor;
    if (numero1 > numero2) {
        maior = numero1;
        menor = numero2;
        exibirResultado(maior, menor);
    }
    else if (numero1 < numero2) {
        maior = numero2;
        menor = numero1;
        exibirResultado(maior, menor);
    }
    else{
        exibirErro();
    }
}

function exibirResultado(valor1, valor2) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-28">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>'+ "O número " + valor1 + ' é maior que ' + valor2 + "." + '</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("menssagemResultado");
    mensagemResultado.className = "row visible";
    mensagemResultado.innerHTML = html;
}

function exibirErro() {
    
        let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-28">' +
            '<div class="alert alert-danger" role="alert">' +
            '<h4>' + "Os dois valores não podem ser iguais!" + '</h4>' +
            '</div>' +
            '</div>';
        let mensagemResultado = document.getElementById("menssagemResultado");
        mensagemResultado.className = "row visible";
        mensagemResultado.innerHTML = html;
    }
