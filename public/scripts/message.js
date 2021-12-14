//criando objeto
var cliente = {}
function enviar() {
  'use strict';

  //pegando os dados do formulario de envio de email
  let nome = document.querySelector('#nome')
  let email = document.querySelector('#email')
  let anexo = document.querySelector('#anexo')
  // verificando se tem algum campo vazio
  if (nome.value == '' || email.value == '' || anexo.value == '') {
    alert('Um dos campos se encontra vazio')
  } else { 
    // pegando data atual e a data do email de markting q sera enviado daqui 3 meses 
    let data = new Date()
    let dia = `${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()}`
    let ano = data.getFullYear()
    let mes = data.getMonth() + 4
    let diaa = data.getDate()
    //verificão se o mes é maior q 12 se sim passa para o ano q vem 
    if (mes == 13) {
      ano += 1
      mes -= 12
     
      let diaemail = `${ano}/${mes}/${diaa}`


      cliente.nome = String(nome.value)
      cliente.email = String(email.value)
      cliente.anexo = String(anexo.value)
      cliente.dia = String(dia)
      cliente.diaemail = String(diaemail)

      //envio dos dados para o node
      let ajax = new XMLHttpRequest();
      let params = 'cliente=' + JSON.stringify(cliente)
      ajax.open('POST', 'http://localhost:8080/send');
      ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
          alert(ajax.responseText)
          nome.value = ''
          email.value = ''
          anexo.value = ''
          nome.focus()

        }

      }
      ajax.send(params);

    }

    if (mes == 14) {
      ano += 1
      mes -= 13
      let diaemail = `${ano}/${mes}/${diaa}`


      cliente.nome = String(nome.value)
      cliente.email = String(email.value)
      cliente.anexo = String(anexo.value)
      cliente.dia = String(dia)
      cliente.diaemail = String(diaemail)

      //envio dos dados para o node
      let ajax = new XMLHttpRequest();
      let params = 'cliente=' + JSON.stringify(cliente)
      ajax.open('POST', 'http://localhost:8080/send');
      ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
          alert(ajax.responseText)
          nome.value = ''
          email.value = ''
          anexo.value = ''
          nome.focus()

        }

      }
      ajax.send(params);

    }

    if (mes == 15) {
      ano += 1
      mes -= 14
      let diaemail = `${ano}/${mes}/${diaa}`

      cliente.nome = String(nome.value)
      cliente.email = String(email.value)
      cliente.anexo = String(anexo.value)
      cliente.dia = String(dia)
      cliente.diaemail = String(diaemail)

      //envio dos dados para o node
      let ajax = new XMLHttpRequest();
      let params = 'cliente=' + JSON.stringify(cliente)
      ajax.open('POST', 'http://localhost:8080/send');
      ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      ajax.onreadystatechange = function () {
        if (ajax.status == 200 && ajax.readyState == 4) {
          alert(ajax.responseText)
          nome.value = ''
          email.value = ''
          anexo.value = ''
          nome.focus()

        }

      }
      ajax.send(params);

    }

  }

}
