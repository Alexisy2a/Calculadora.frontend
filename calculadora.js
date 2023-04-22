// Obtener el botón y el div de la pantalla
// Obtener una referencia a cada botón mediante su id
const boton1 = document.getElementById('1');
const boton2 = document.getElementById('2');
const boton3 = document.getElementById('3');
const boton4 = document.getElementById('4');
const boton5 = document.getElementById('5');
const boton6 = document.getElementById('6');
const boton7 = document.getElementById('7');
const boton8 = document.getElementById('8');
const boton9 = document.getElementById('9');
const boton0 = document.getElementById('0');
const botonSuma = document.getElementById('suma');
const botonResta = document.getElementById('resta');
const botonMultiplica = document.getElementById('multiplica');
const botonDivide = document.getElementById('divide');
const botonIgual = document.getElementById('igual');
const botonAC = document.getElementById('ac');
let num1;
let num2;
let op;
let resultado;

boton1.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '1';
  
});

boton2.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '2';
});

boton3.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '3';
});

boton4.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '4';
});

boton5.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '5';
});

boton6.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '6';
});

boton7.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '7';
});

boton8.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '8';
});

boton9.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '9';
});

boton0.addEventListener('click', () => {
  document.getElementById('pantalla').textContent += '0';
});
botonSuma.addEventListener('click', () => {
  op=1;
  num1=parseFloat(document.getElementById('pantalla').textContent);
  document.getElementById('pantalla').textContent=''

});
botonResta.addEventListener('click', () => {

  op=2;
  num1=parseFloat(document.getElementById('pantalla').textContent);
  document.getElementById('pantalla').textContent=''
});
botonMultiplica.addEventListener('click', () => {
  op=3;
  num1=parseFloat(document.getElementById('pantalla').textContent);
  document.getElementById('pantalla').textContent=''
});
botonDivide.addEventListener('click', () => {
  op=4;
  num1=parseFloat(document.getElementById('pantalla').textContent);
  document.getElementById('pantalla').textContent=''
});
botonAC.addEventListener('click', () => {
  
  document.getElementById('pantalla').textContent=0
  num1=0;
  num2=0;
});

botonIgual.addEventListener('click', () => {
  num2=parseFloat(document.getElementById('pantalla').textContent);
  switch (op){
    case 1:
      res=num1+num2;
      document.getElementById('pantalla').textContent = res;
      num1=res;
      num2=0;
      break;
      case 2:
      res=num1-num2;
      document.getElementById('pantalla').textContent = res;
      num1=res;
      num2=0;
      break;
      case 3:
      res=num1*num2;
      document.getElementById('pantalla').textContent = res;
      num1=res;
      num2=0;
      break;
      case 4:
      res=num1/num2;
      document.getElementById('pantalla').textContent = res;
      num1=res;
      num2=0;

      break;




  }
});

