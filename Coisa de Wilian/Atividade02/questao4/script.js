function contar() {
  let saida = document.getElementById('saida')

  saida.innerHTML += `<h2>Números pares de 100 até 120</h2>`
  let cont = 100
  while (cont <= 120) {
      saida.innerHTML += ` ${cont} &#x1F449;`
      cont += 2 // Corresponde a cont = cont + 2
  }
  saida.innerHTML += ` &#x1F3C1;`
}