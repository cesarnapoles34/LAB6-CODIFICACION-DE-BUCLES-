let resultados = [];

for (let i = 1; i <= 105; i++) {
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
    resultados.push(i);
  } else {
    resultados.push(texto);
  }
}

console.log(resultados);