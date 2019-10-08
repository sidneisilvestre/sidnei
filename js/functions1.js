function data(){
/*declara as variaveis */
var dia = document.querySelector("#n1");
var mes = document.querySelector("#n2");
var ano = document.querySelector("#n3");
/*concatena as variaveis */
var dataCompleta = dia.value+"/"+mes.value+"/"+ano.value;
/*envia para a chamada o texto que contem  */
s.textContent = dataCompleta; 
}
function novaData(){
var mes = document.querySelector("#n2");
var ano = document.querySelector("#n3");
var anoMes = "A data "+mes.value+"/"+ano.value+" foi adicionada com sucesso";
p1.textContent = anoMes;
}
function injeta(ids,msgs){
var saidas = document.querySelector(ids);
var n2 = document.querySelector(msgs);
saidas.textContent = soma;



}