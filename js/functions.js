/*Função subtração */
function injetaTexto(conteudoSub){
var saida = document.querySelector("#s1");
saida.textContent = conteudoSub;
}
function subtrai(n1,n2){
var result = parseInt(n1)-parseInt(n2);
injetaTexto(result);
} 
function pegaValor(){
var v1 = document.querySelector("#n1");
var v2 = document.querySelector("#n2");
subtrai(n1.value,n2.value);
}
/*Função soma */
function injetaHtml(conteudo){
var saida = document.querySelector("#s");
saida.textContent = conteudo;
}

function soma(a,b){
var resultado = parseInt(a)+parseInt(b);
injetaHtml(resultado);
}
function pegaValores(){
var n1 = document.querySelector("#n1");
var n2 = document.querySelector("#n2");
soma(n1.value,n2.value);
}
