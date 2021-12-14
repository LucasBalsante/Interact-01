
function carregar() {
  let nome = document.querySelector("#nome")

  nome = String(nome.value)


  let ajax = new XMLHttpRequest();
  let params = 'nome=' + JSON.stringify(nome)
  ajax.open('POST', 'http://localhost:8080/lista');
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.onreadystatechange = function () {
    if (ajax.status == 200 && ajax.readyState == 4) {

      let lista = JSON.parse(ajax.responseText)

      let container = document.querySelector('#container')



      for (post in lista.id) {
        let linha = document.createElement('div')
        linha.setAttribute('id', 'linha')
        linha.setAttribute('class', 'row')
        container.appendChild(linha)

        let coluna1 = document.createElement('div')
        coluna1.setAttribute('id', 'colnome')
        coluna1.setAttribute('class', 'col')
        coluna1.innerHTML = `${lista.nome[post]}`
        linha.appendChild(coluna1)

        let coluna2 = document.createElement('div')
        coluna2.setAttribute('id', 'colemail')
        coluna2.setAttribute('class', 'col')
        coluna2.innerHTML = `${lista.email[post]}`
        linha.appendChild(coluna2)

        let coluna3 = document.createElement('div')
        coluna3.setAttribute('id', 'coldata')
        coluna3.setAttribute('class', 'col')
        coluna3.innerHTML = `${lista.data[post]}`
        linha.appendChild(coluna3)


      }
      let ultimarow = document.createElement('div')
      ultimarow.setAttribute('id', 'row2')
      ultimarow.setAttribute('class', 'row')
      container.appendChild(ultimarow)


    }

  }
  ajax.send(params);

}

function buscar() {
  let nome = document.querySelector("#nome")

  nome = String(nome.value)


  let ajax = new XMLHttpRequest();
  let params = 'nome=' + JSON.stringify(nome)
  ajax.open('POST', 'http://localhost:8080/lista');
  ajax.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  ajax.onreadystatechange = function () {
    if (ajax.status == 200 && ajax.readyState == 4) {

      let lista = JSON.parse(ajax.responseText)


      let node = document.querySelector('#container')
      node.parentNode.removeChild(node)

      let pai = document.querySelector('#pai')


      let container = document.createElement('div')
      container.setAttribute('id', 'container')
      container.setAttribute('class', 'container')
      pai.appendChild(container)

      let linha1 = document.createElement('div')
      linha1.setAttribute('id', 'row')
      linha1.setAttribute('class', 'row')
      container.appendChild(linha1)

      let colunanome = document.createElement('div')
      colunanome.setAttribute('class', 'col')
      colunanome.innerHTML = `Nome`
      linha1.appendChild(colunanome)

      let colunaemail = document.createElement('div')
      colunaemail.setAttribute('class', 'col')
      colunaemail.innerHTML = `Email`
      linha1.appendChild(colunaemail)

      let colunadata = document.createElement('div')
      colunadata.setAttribute('class', 'col')
      colunadata.innerHTML = `Data`
      linha1.appendChild(colunadata)




      for (post in lista.id) {
        let linha = document.createElement('div')
        linha.setAttribute('id', 'linha')
        linha.setAttribute('class', 'row')
        container.appendChild(linha)

        let coluna1 = document.createElement('div')
        coluna1.setAttribute('id', 'colnome')
        coluna1.setAttribute('class', 'col')
        coluna1.innerHTML = `${lista.nome[post]}`
        linha.appendChild(coluna1)

        let coluna2 = document.createElement('div')
        coluna2.setAttribute('id', 'colemail')
        coluna2.setAttribute('class', 'col')
        coluna2.innerHTML = `${lista.email[post]}`
        linha.appendChild(coluna2)

        let coluna3 = document.createElement('div')
        coluna3.setAttribute('id', 'coldata')
        coluna3.setAttribute('class', 'col')
        coluna3.innerHTML = `${lista.data[post]}`
        linha.appendChild(coluna3)


      }
      let ultimarow = document.createElement('div')
      ultimarow.setAttribute('id', 'row2')
      ultimarow.setAttribute('class', 'row')
      container.appendChild(ultimarow)


    }

  }
  ajax.send(params);


}
