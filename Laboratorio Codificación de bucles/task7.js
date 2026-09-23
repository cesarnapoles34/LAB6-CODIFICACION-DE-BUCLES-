// Refer to Task 7 in your Instructions to complete this task

let buzzWords = [
    "Fizz",
    "Buzz",
    "Woof",
    "Bark",
    "Awoo",
    "Bang"
  ];
  
  let primos = [3, 5, 7, 11, 13, 17];

for (let i = 1; i <= 105; i++) {
  let texto = "";

  for (let j = 0; j < primos.length; j++) {
    if (i % primos[j] === 0) {
      texto = texto + buzzWords[j];
    }
  }

  if (texto === "") {
    console.log(i);
  } else {
    console.log(texto);
  }
}