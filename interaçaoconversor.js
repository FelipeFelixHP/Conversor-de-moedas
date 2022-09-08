function ConverterDolar(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; 
    var valorEmRealNumerico = Number(valor);

    var valorEmDolar = valorEmRealNumerico * 0.19;

    var elementoValorConvertido = document.getElementById("valorConvertido")

    var valorConvertido = ` O resuldado em Dolar U$ é  ${valorEmDolar}`
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBTC(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; 
    var valorEmRealNumerico = Number(valor);

    var valorEmBtc = valorEmRealNumerico * 0.000010;

    var elementoValorConvertido = document.getElementById("valorConvertido")

    var valorConvertido = ` O resuldado em Bitcoin é ₿ ${valorEmBtc}`
    elementoValorConvertido.innerHTML = valorConvertido;
}
