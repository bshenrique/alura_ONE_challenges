const botaoCriptografar = document.querySelector('#criptografar')
const botaoDescriptografar = document.querySelector('#descriptografar')
const botaoCopiar = document.querySelector('#copiar')

botaoCriptografar.onclick = function () {
  let texto = document.querySelector('#texto-input').value
  let textoCriptografado = ''

  for (let letra of texto) {
    switch (letra.toLowerCase()) {
      case 'a':
        textoCriptografado += 'ai'
        break
      case 'e':
        textoCriptografado += 'enter'
        break
      case 'i':
        textoCriptografado += 'imes'
        break
      case 'o':
        textoCriptografado += 'ober'
        break
      case 'u':
        textoCriptografado += 'ufat'
        break
      default:
        textoCriptografado += letra.toLowerCase()
    }
  }

  document.querySelector('#texto-output').value = textoCriptografado
}

botaoDescriptografar.onclick = function () {
  let texto = document.querySelector('#texto-input').value
  let textoDescriptografado = ''

  for (let i = 0; i < texto.length; i++) {
    switch (texto[i]) {
      case 'a':
        textoDescriptografado += 'a'
        i++
        break
      case 'e':
        textoDescriptografado += 'e'
        i += 4
        break
      case 'i':
        textoDescriptografado += 'i'
        i += 3
        break
      case 'o':
        textoDescriptografado += 'o'
        i += 3
        break
      case 'u':
        textoDescriptografado += 'u'
        i += 3
        break
      default:
        textoDescriptografado += texto[i]
    }
  }

  document.querySelector('#texto-output').value = textoDescriptografado
}

botaoCopiar.onclick = function () {
  let texto = document.querySelector('#texto-output').value
  navigator.clipboard.writeText(texto)
}
