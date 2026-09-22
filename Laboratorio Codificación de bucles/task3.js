// Refer to Task 3 in your Instructions to complete this task

for (let i = 1; i <= 105; i++) {
  let texto = "";
  if (i % 3 === 0) {
    texto = texto + "Fizz";
  }
  if (i % 5 === 0) {
    texto = texto + "Buzz";
  }
  if (texto === "") {  
    console.log(i);
  } else {
    console.log(texto); 
  } 
};