const validator = {
  isValid: function (inputNumero) {
    //Convertir numero en Array´
    let digitos = Array.from(inputNumero).map( i=> Number(i) );
    //algoritmo de Lunh

    //Invertir numeros
    digitos = digitos.reverse();

    let sum = 0;

    for (let i = 0; i < digitos.length; i++) {
      if (i%2===1){
        if ((digitos[i]*2) >=10){
          digitos[i] = digitos[i]*2-9;
        } else{
          digitos[i] = digitos[i]*2;
        }
      } else{
        digitos[i];
      }
      //suma de digitos
      sum = sum + digitos[i];
    }
    //si la suma de los digitos es multiplo de 10 es tarjeta valida
    return sum%10 === 0;
  },

  maskify: (inputNumero) => {

    let mask = " ";

    for (let i = 0; i < inputNumero.length; i++) {

      if (i <= inputNumero.length -5) {
        mask += "#";
      } else{
        mask += inputNumero[i];
      }
    }

    return mask;
  }
};
  export default validator;
