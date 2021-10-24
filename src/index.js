import validator from './validator.js';

const formulario = document.querySelector('#formulario-tarjeta');


for (let i = 1; i <= 12; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectMes.appendChild(opcion);
}
const yearActual = new Date().getFullYear;
for (let i = yearActual; i <= yearActual + 8; i++) {
    let opcion = document.createElement('option');
    opcion.value = i;
    opcion.innerText = i;
    formulario.selectYear.appendChild(opcion);
}
//* input de numero de tarjeta
formulario.inputnumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
//* elimino espacios en blanco 
    .replace(/\s/g, '')
//* elimino las letras
    .replace(/\D/g, '')
//* espaciado cada cuatro digitos
.replace(/([0-9]{4})/g), '$1 ')
//* elimina el ultimo espacio
.trim();
})

if(valorInput==''){
    #inputNumero = 'Ingrese Número de Tarjeta'
}
//* input nombre
formulario.inputNombre.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
//* eliminar numeros en el nombre
    formulario.inputNombre.value = valorInput.replace(/[0-9]/g, '');
if (valorInput == ''){
    inputNombre = 'Ingrese Nombre'
}
})

//* Select del mes
formulario.selectMes.addEventListener('change', (e)=>{
    
})





console.log(validator);
var = numeroTarjeta
function cardnumber(inputtxt) 
{
    
}
    
}
