//Restrições para a página de solicitação de empréstimos
document.dados.salario.addEventListener('blur', validarSalario)
function validarSalario() {
  var salario = parseFloat(document.dados.salario.value)
  var resSal = document.querySelector('#idSalario~span')

  if(salario <= 0 || isNaN(salario)){
    resSal.innerHTML = "Insira uma quantia válida"
    event.preventDefault()
  }else{
    resSal.innerHTML = ""
  }
}

document.dados.tempoemp.addEventListener('blur', validarTempo)
function validarTempo() {
  var tempo = parseFloat(document.dados.tempoemp.value)
  var resTemp = document.querySelector('#idTempoEmp~span')

  if(tempo <= 0 || isNaN(tempo) || tempo > 100){
    resTemp.innerHTML = "Insira uma quantia válida"
    event.preventDefault()
  }else{
    resTemp.innerHTML = ""
  }
}

document.dados.valor.addEventListener('blur', validarValor)
function validarValor() {
  var valor = parseFloat(document.dados.valor.value)
  var resValor = document.querySelector('#idValor~span')
  if(valor <= 0 || isNaN(valor)){
    resValor.innerHTML = "Insira uma quantia válida"
    event.preventDefault()
  }else{
    resValor.innerHTML = ""
  }
}

document.dados.enviar.addEventListener('click', validarPedido)
function validarPedido() {
  var salario = parseFloat(document.dados.salario.value)
  var tempo = parseFloat(document.dados.tempoemp.value)
  var valor = parseFloat(document.dados.valor.value)
  var emprestimo = valor/salario
    if(tempo < 3){
      if(emprestimo <= 0.7){
        alert("Pedido enviado para análise!")
      }else{
        alert("O valor do empréstimo não pode ser superior a 70% do seu salário")
      }
    }else if(tempo => 3){
        if(emprestimo <= 1.5){
          alert("Pedido enviado para análise!")
        }else{
          alert("O valor do empréstimo não pode ser superior a 150% do seu salário")
        }
    }
}
