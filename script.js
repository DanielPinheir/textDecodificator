const textArea1 = document.querySelector('#text-cpripto');
const textArea2 = document.querySelector('#text-descripto');
const criptoButton = document.querySelector('#criptoButton');
const descriptoButton = document.querySelector('#descripButton');

criptoButton.addEventListener('click', () => {
  let textCripto = textArea1.value
    .toLowerCase()
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  textArea2.value = textCripto;
  textArea1.value = '';
});

descriptoButton.addEventListener('click', () => {
  let textDescripto = textArea2.value
    .toLowerCase()
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  textArea1.value = textDescripto;
  textArea2.value = '';
});
