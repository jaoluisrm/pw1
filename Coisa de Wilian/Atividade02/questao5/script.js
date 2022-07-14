function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h2>Contando de 10 até 30</h2>`

  let cont = 10
  while (cont <= 30) {
      saida.innerHTML += ` ${cont} &#x1F449;`
      cont ++ // Corresponde a cont = cont + 1
  }
  saida.innerHTML += ` &#x1F3C1;`
}