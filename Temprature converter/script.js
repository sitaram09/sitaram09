let inputFahrenheit = document.getElementById("fahrenheit");
let inputCelcius = document.getElementById("celcius");
let inputKelvin = document.getElementById("kelvin");

let valueInFahrenheit;
let valueInCelcius;
let valueInKelvin;

inputFahrenheit.addEventListener('dblclick', inputZero());
inputFahrenheit.addEventListener('input' , (event1) => {

   valueInFahrenheit = inputFahrenheit.value;

   console.log("*F ->", valueInFahrenheit);

   valueInCelcius = (valueInFahrenheit - 32)*5/9;

   valueInKelvin = parseFloat(valueInCelcius) + parseFloat(273.15);

   console.log("*c ->", valueInCelcius,"*K -> ",valueInKelvin);

   inputCelcius.value = valueInCelcius;

   inputKelvin.value = valueInKelvin;
  })

  
inputCelcius.addEventListener('click', inputZero());
inputCelcius.addEventListener('input' , (event2) => {
    
  valueInCelcius = inputCelcius.value;

  console.log("*C ->", valueInCelcius);

  valueInFahrenheit = (valueInCelcius * 9/5)+32;

  valueInKelvin = parseFloat(valueInCelcius) + parseFloat(273.15);
  
  console.log("*F ->", valueInFahrenheit,"*K -> ",valueInKelvin);

  inputFahrenheit.value = valueInFahrenheit;
  inputKelvin.value = valueInKelvin;
})


inputKelvin.addEventListener('click', inputZero());
inputKelvin.addEventListener('input' , (event3) => {
  
  valueInKelvin = inputKelvin.value;
  
  console.log("*K ->", valueInKelvin);
  
  valueInFahrenheit = (valueInKelvin - 273.15) * 9/5 + 32;
  
  valueInCelcius = parseFloat(valueInKelvin) - parseFloat(273.15);
  
  console.log("*F ->", valueInFahrenheit,"*C -> ",valueInCelcius);
  
  inputFahrenheit.value = valueInFahrenheit;
  
  inputCelcius.value = valueInCelcius;
  
  
  
  
})

function inputZero(){
  inputFahrenheit.value = null;

  inputCelcius.value = null;

  inputKelvin.value = null;

}

// var write_text = function() {
//   input.value+=text[current];
//   if(current < l-1) {
//     current++;
//     setTimeout(function(){write_text()},time);
//   } else {
//     input.setAttribute('value',input.value);
//   }
// }
// setTimeout(function(){write_text()},time);


// let celsius = document.getElementById('celsius');
//     let fahrenheit = document.getElementById('fahrenheit');
//     let kelvin = document.getElementById('kelvin');
//     celsius.oninput = function () {
//         let f = (parseFloat(celsius.value) * 9) / 5 + 32;
//         fahrenheit.value = parseFloat(f.toFixed(2));
      
//         let k = (parseFloat(celsius.value) + 273.15);
//         kelvin.value = parseFloat(k.toFixed(2));

//         fahrenheit.innerHTML = fahrenheit.value;
//         kelvin.innerHTML = kelvin.value;
//     }
//     fahrenheit.oninput = function () {
//         let c = ((parseFloat(
//             fahrenheit.value) - 32) * 5) / 9;
//         celsius.value = parseFloat(c.toFixed(2));
      
//         let k = (parseFloat(
//             fahrenheit.value) - 32) * 5 / 9 + 273.15;
//         kelvin.value = parseFloat(k.toFixed(2));
//     }
//     kelvin.oninput = function () {
//         let f = (parseFloat(
//             kelvin.value) - 273.15) * 9 / 5 + 32;
//         fahrenheit.value = parseFloat(f.toFixed(2));
      
//         let c = (parseFloat(kelvin.value) - 273.15);
//         celsius.value = parseFloat(c.toFixed(2));
//     }