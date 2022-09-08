function ConverterDolar(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; 
    var valorEmDolarNumerico = Number(valor);

    var valorEmReal = valorEmDolarNumerico * 0.19;

    var elementoValorConvertido = document.getElementById("valorConvertido")

    var valorConvertido = ` O resuldado em Dolar U$ é  ${valorEmReal}`
    elementoValorConvertido.innerHTML = valorConvertido;
}

function ConverterBTC(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value; 
    var valorEmBtcNumerico = Number(valor);

    var valorEmReal = valorEmBtcNumerico * 0.000010;

    var elementoValorConvertido = document.getElementById("valorConvertido")

    var valorConvertido = ` O resuldado em Bitcoin é ₿ ${valorEmReal}`
    elementoValorConvertido.innerHTML = valorConvertido;
}
