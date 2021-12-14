//criando objeto
let pessoa = {}
function logar() {
  //pegando dados dos formularios
  let user = document.querySelector('#user')
  let password = document.querySelector('#password')

  pessoa.nome = String(user.value)
  pessoa.senha = String(password.value)

  //verificando se nao esta vazio
  if (user.value == '' || password.value == '') {
    alert("Seu usuario ou senha esta vazio")

  } else {

    //mandando dados para o node verificar se o login esta correto se sim a pagina e direcionada para initial.html
    let ajax = new XMLHttpRequest();
    let params = 'pessoa=' + JSON.stringify(pessoa)
    ajax.open('POST', 'http://localhost:8080/login');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function () {
      if (ajax.status == 200 && ajax.readyState == 4) {
        if(ajax.responseText == 'usuario encontrado'){
          window.location.assign("http://localhost:8080/initial.html")
        }else{
          alert(ajax.responseText)
          user.value = ''
          password.value = ''
          user.focus()
  

        }
     
      }

    }
    ajax.send(params);








  }

}