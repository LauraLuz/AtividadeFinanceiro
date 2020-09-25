document.login.senha.addEventListener('blur', senhaValida)
function senhaValida(){

  var letrasMaiusculas = /[A-Z]/;
  var letrasMinusculas = /[a-z]/;
  var numeros = /[0-9]/;
  var caracteresRegulares = /[!@#\$%\^&\*]/;

  var auxMaiuscula = 0;
  var auxMinuscula = 0;
  var auxNumero = 0;
  var auxEspecial = 0;

  var senha = document.login.senha.value
  var resSenha = document.querySelector('#idSenha~span')


  for(var i=0; i< senha.length; i++){
    if(letrasMaiusculas.test(senha[i])){
      auxMaiuscula++;
    }else if(letrasMinusculas.test(senha[i])){
      auxMinuscula++;
    }else if(numeros.test(senha[i])){
      auxNumero++;
    }else if(caracteresRegulares.test(senha[i])){
      auxEspecial++;
    }
}
//    console.log(auxMaiuscula);
//    console.log(auxMinuscula);
//    console.log(auxNumero);
//    console.log(auxEspecial);
    var testeGeral = auxMaiuscula + auxMinuscula + auxNumero + auxEspecial;


    if( senha == " " || senha.length < 6 || testeGeral != 0){

      resSenha.innerHTML = "Insira uma senha válida."
      return 1
    }else{
      resSenha.innerHTML = ""
      return 0
    }
  }

console.log(senhaValida());




document.login.enviar.addEventListener('click', validarPedido)
function validarPedido() {
  var valid = 0
  valid += senhaValida()

  if(valid != 0){
        event.preventDefault()
    }
}
