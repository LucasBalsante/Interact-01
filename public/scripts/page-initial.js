//criando objeto
var cliente = {}
function verificar(){
    let data = new Date()
    let dia = `${data.getFullYear()}/${data.getMonth() + 1}/${data.getDate()}`
    

    
    cliente.dia = String(dia)
   
    //mandando a data de hoje para o node
    let ajax = new XMLHttpRequest();
    let params = 'cliente=' + JSON.stringify(cliente)
    ajax.open('POST', 'http://localhost:8080/automessage');
    ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    ajax.onreadystatechange = function () {
      if (ajax.status == 200 && ajax.readyState == 4) {
        alert(ajax.responseText)
       

      }

    }
    ajax.send(params);

}