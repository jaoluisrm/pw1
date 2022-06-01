const resultado = document.querySelector('#resultado')
const imc = document.querySelector('#imc')
const altura = document.querySelector('#altura')

const calcPI = () => {

  if (imc.value !== '' && altura.value !== '') {
    const pi = (imc.value * (altura.value * altura.value)).toFixed(2)

    resultado.innerHTML = `Peso Ideal: ${pi}`

  } 
  else {
    resultado.innerHTML = 'Preencha os campos'
  }
}

/*  IMC desejado (homens): (22 kg/m²)
IMC desejado (mulheres): (21 kg/m²)

Por exemplo, Renata pesa 85 kg e tem 1,76 m de altura.

PI = IMC desejado x (Altura x Altura)
PI = 21 x (1,76 x 1,76)
PI = 21 x 3,09
PI = 64,9 kg

O peso ideal para Renata é 64,9 kg. */