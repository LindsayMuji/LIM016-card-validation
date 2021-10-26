//import validator from './validator.js';

const formulario = document.querySelector('#formulario-tarjeta');
let inputNumero = document.querySelector('#inputNumero');
let inputNombre = document.querySelector('#inputNombre');
var btn = document.getElementById('btn-validar');


//* ingresar datos del mes 
    for (let i = 1; i <= 12; i++) {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectMes.appendChild(opcion);    
    }

//* ingresar datos del año
    const yearActual = new Date().getFullYear();
    for (let i = yearActual; i <= yearActual + 8; i++) {
        let opcion = document.createElement('option');
        opcion.value = i;
        opcion.innerText = i;
        formulario.selectYear.appendChild(opcion);
    }

//* input de numero de tarjeta
formulario.inputNumero.addEventListener('keyup', (e) => {
    let valorInput = e.target.value;
    formulario.inputNumero.value = valorInput
//* elimino espacios en blanco 
    .replace(/\s/g, '')
//* elimino las letras
    .replace(/\D/g, '')
//* espaciado cada cuatro digitos
    .replace(/([0-9]{4})/g, '$1 ')
//* elimina el ultimo espacio
    .trim();
})

if(inputNumero==''){
    alert = "Ingrese Número de Tarjeta"
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



