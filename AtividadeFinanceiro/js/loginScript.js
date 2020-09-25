document.login.senha.addEventListener('blur', senhaValida)
function senhaValida() {

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
  var retorno = 0;

  for (var i = 0; i < senha.length; i++) {
    if (letrasMaiusculas.test(senha[i])) {
      auxMaiuscula++;
    } else if (letrasMinusculas.test(senha[i])) {
      auxMinuscula++;
    } else if (numeros.test(senha[i])) {
      auxNumero++;
    } else if (caracteresRegulares.test(senha[i])) {
      auxEspecial++;
    }
  }
  //    console.log(auxMaiuscula);
  //    console.log(auxMinuscula);
  //    console.log(auxNumero);
  //    console.log(auxEspecial);
  var testeGeral = auxMaiuscula + auxMinuscula + auxNumero + auxEspecial;
  //    console.log(document.login.senha.value.length);
  // Só entra no laço se tamanho da senha for diferente de 0
  if (document.login.senha.value.length != 0) {
    if (senha.length < 6 || testeGeral != 0) {

      resSenha.innerHTML = "Insira uma senha válida."
      retorno = 1;
    } else {
      resSenha.innerHTML = ""
      retorno = 0;
    }
  } else {
    retorno = 1;
  }
  return retorno;
}

console.log(senhaValida());

document.login.enviar.addEventListener('click', validarPedido)
function validarPedido() {
  var valid = 0
  valid += senhaValida()

  if (valid != 0) {
    event.preventDefault()
  }
}
