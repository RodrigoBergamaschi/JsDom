function simuladorSalario() {
    const SALARIO_COMERCIAL = 1300;
    const PERCENTUAL_COMISSAO = 0.1;
    const META = 1000;

    var nomeVendedor = document.getElementById("inputNomeVendedor").value;
    var totalVendas = document.getElementById("inputTotalVendas").value;

    if (totalVendas >= META) {
        var salarioBruto = SALARIO_COMERCIAL + (totalVendas * PERCENTUAL_COMISSAO);
        var comissao = totalVendas * PERCENTUAL_COMISSAO;
        exibirMensagemSucesso(nomeVendedor, salarioBruto, comissao);
    }
    else{
        exibirMensagemErro(nomeVendedor);
    }
    
    console.log("Nome do vendedor: " + nomeVendedor);
    console.log("Total de vendas: " + totalVendas);
    console.log("Salario Bruto: " + salarioBruto);
}

function exibirMensagemSucesso(nomevendedor, salariobruto, comissao) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-28">' +
        '<div class="alert alert-success" role="alert">' +
        '<h4>' + nomevendedor + ', seu salário bruto será de ' + salariobruto + ' reais.<br> Você recebeu ' + comissao + ' reais de comissão. </h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("menssagemResultado");
    mensagemResultado.className = "row visible";
    mensagemResultado.innerHTML = html;

}

function exibirMensagemErro(nomevendedor) {
    let html = '<div class="col-sm-12 col-md-9 col-lg-9 pt-28">' +
        '<div class="alert alert-danger" role="alert">' +
        '<h4>' + nomevendedor + ', voce ainda nao atingiu a meta de vendas para receber uma comissao.' + '</h4>' +
        '</div>' +
        '</div>';
    let mensagemResultado = document.getElementById("menssagemResultado");
    mensagemResultado.className = "row visible";
    mensagemResultado.innerHTML = html;

}
