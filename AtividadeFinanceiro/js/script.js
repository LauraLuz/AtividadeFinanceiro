

//Restrições para a página de solicitação de empréstimos
document.emprestimo.salario.addEventListener('blur', validarSalario)
function validarSalario() {
  var salario = parseFloat(document.emprestimo.salario.value)
  var resSal = document.querySelector('#idSalario~span')

  if(salario <= 0 || isNaN(salario)){
    resSal.innerHTML = "Insira uma quantia válida"
    return 1
  }else{
    resSal.innerHTML = ""
    return 0
  }
}

document.emprestimo.tempoemp.addEventListener('blur', validarTempo)
function validarTempo() {
  var tempo = parseFloat(document.emprestimo.tempoemp.value)
  var resTemp = document.querySelector('#idTempoEmp~span')

  if(tempo <= 0 || isNaN(tempo) || tempo > 100){
    resTemp.innerHTML = "Insira uma quantia válida"
    return 1
  }else{
    resTemp.innerHTML = ""
    return 0
  }
}

document.emprestimo.valor.addEventListener('blur', validarValor)
function validarValor() {
  var valor = parseFloat(document.emprestimo.valor.value)
  var resValor = document.querySelector('#idValor~span')
  if(valor <= 0 || isNaN(valor)){
    resValor.innerHTML = "Insira uma quantia válida"
    event.preventDefault('enviar')
    return 1
  }else{
    resValor.innerHTML = ""
    return 0
  }
}

document.emprestimo.enviar.addEventListener('click', validarPedido)
function validarPedido() {
  var valid = 0
  valid += validarSalario()
  valid += validarTempo()
  valid += validarValor()

  var salario = parseFloat(document.emprestimo.salario.value)
  var tempo = parseFloat(document.emprestimo.tempoemp.value)
  var valor = parseFloat(document.emprestimo.valor.value)
  var emprestimo = valor/salario
  if(valid == 0){
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
    }else{
        alert("Preencha todos os campos corretamente!")
    }

}
