function calcularIMC(){
    //recuperar o peso e a idade da caixa de texto
    let peso = document.getElementById("peso").value //busca o valor digitado no elemento com o Id de peso
    //document representa toda a pagina html
    let altura = document.getElementById("altura").value
    
    // calculo do IMC
    //IMC = peso/(altura * altura)
    let imc = peso/(altura^2)
    alert(imc.toFixed(2)) //mostra o imc com duas casas depois da ,
}