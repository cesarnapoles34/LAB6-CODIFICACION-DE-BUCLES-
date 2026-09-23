const prompt = require("prompt-sync")();
let lineas =Number(prompt("Cuántas líneas quieres?"));



for (let i = 1; i <= lineas; i++) {
  let texto = "";
  if (i % 3 === 0) {
    texto = texto + "Fizz";
  }
  if (i % 5 === 0) {
    texto = texto + "Buzz";
  }
  if (i % 7 === 0) {
    texto = texto + "Woof";
  }  
  if (texto === "") {  
    console.log(i);
  } else {
    console.log(texto); 
  } 
};