document.dados.nome.addEventListener('blur', validarNome)
function validarNome() {
  var nome = document.dados.nome.value
  var resNome = document.querySelector('#idNome~span')

  if( nome == "" || nome.indexOf(' ') == -1){
    resNome.innerHTML = "Insira seu nome completo."
    return 1
  }else{
    resNome.innerHTML = ""
    return 0
  }
}

document.dados.profissao.addEventListener('blur', validarProfissao)
function validarProfissao() {
  var prof = document.dados.profissao.value
  var resProf = document.querySelector('#idProfissao~span')

  if( prof == "" || prof.length > 20){
    resProf.innerHTML = "Insira uma profissão válida."
    return 1
  }else{
    resProf.innerHTML = ""
    return 0
  }
}

document.dados.idade.addEventListener('blur', validarIdade)
function validarIdade() {
  var idade = document.dados.idade.value
  var resIdade = document.querySelector('#idIdade~span')

  if( idade == "" || parseFloat(idade)< 18){
    resIdade.innerHTML = "O solicitante deve ter mais de 18 anos."
    return 1
  }else{
    resIdade.innerHTML = ""
    return 0
  }
}

document.dados.cpf.addEventListener('blur', validarCpf)
function validarCpf() {
  var cpf = document.dados.cpf.value
  var regex = /^([\d]{2,3})\.?([\d]{3})\.?([\d]{3})\-?([\d]{2})$/
  var resCpf = document.querySelector('#idCpf~span')

  if( cpf == "" || !regex.test(cpf) ){
    resCpf.innerHTML = "CPF inválido."
    return 1
  }else{
    var cpfFormat = cpf.replace(regex, '$1.$2.$3-$4')
    resCpf.innerHTML = ""
    return 0
  }
}


document.dados.email.addEventListener('blur', validarEmail)
function validarEmail(){
  var email = document.dados.email.value
  var arrobaEmail = email.indexOf('@')
  var pontoEmail = email.lastIndexOf('.')
  var resEmail = document.querySelector('#idEmail~span')

  if(email == "" || arrobaEmail == -1 || pontoEmail == -1 || arrobaEmail > pontoEmail){
    resEmail.innerHTML = 'Digite um e-mail válido.'
    return 1
  }else{
    resEmail.innerHTML = ''
    return 0
  }
}

document.dados.enviar.addEventListener('click', validarPedido)
function validarPedido() {
  var valid = 0
  valid += validarNome()
  valid += validarProfissao()
  valid += validarIdade()
  valid += validarCpf()
  valid += validarEmail()

  if(valid != 0){
        event.preventDefault()
    }
}
