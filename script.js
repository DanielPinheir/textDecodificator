//variáveis globais
const textArea1 = document.querySelector('#text-cpripto');
const textArea2 = document.querySelector('#text-descripto');
const criptoButton = document.querySelector('#criptoButton');
const descriptoButton = document.querySelector('#descripButton');

//functions
const eventTextCripto = () => {
  criptoButton.addEventListener('click', () => {
    if (textArea1.value === '') {
      alert('Digite um texto para criptografar.');
    }
    let textCripto = textArea1.value
      .toLowerCase()
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    textArea2.value = textCripto;
    textArea1.value = '';
    localStorage.setItem('textCripto', JSON.stringify(textArea2.value));
    localStorage.setItem('textDescripto', JSON.stringify(textArea1.value));
  });
};

const eventTextDescripto = () => {
  descriptoButton.addEventListener('click', () => {
    if (textArea2.value === '') {
      alert('Para descriptografar é preciso criptografar um texto.');
    }
    let textDescripto = textArea2.value
      .toLowerCase()
      .replace(/enter/g, 'e')
      .replace(/imes/g, 'i')
      .replace(/ai/g, 'a')
      .replace(/ober/g, 'o')
      .replace(/ufat/g, 'u');
    textArea1.value = textDescripto;
    textArea2.value = '';
    localStorage.setItem('textCripto', JSON.stringify(textArea2.value));
    localStorage.setItem('textDescripto', JSON.stringify(textArea1.value));
  });
};

const getTextLocalStorage = () => {
  textArea1.value = JSON.parse(localStorage.getItem('textDescripto'));
  textArea2.value = JSON.parse(localStorage.getItem('textCripto'));
};

window.onload = () => {
  eventTextCripto();
  eventTextDescripto();
  getTextLocalStorage();
};
