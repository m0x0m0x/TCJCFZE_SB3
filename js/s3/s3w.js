'use strict';

console.log(
  ` %c
Section 3 - Js Fundamentals 2 - Strict Mode
`,
  'color:#F72798;font-size: 1rem;'
);
console.log(
  ` %c
  ⠀⠀⠀⢠⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣤⡀⠀⠀⠀
  ⠀⠀⠀⣾⡿⠀⠀⠀⠀⠀⠀⠀⢠⣤⠀⠀⠀⠀⠀⠀⠀⠘⣿⡇⠀⠀⠀
  ⠀⠀⢰⣿⠃⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀⠀⠀⠀⠀⠀⠀⢻⣷⠀⠀⠀
  ⠀⢀⣾⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣇⠀⠀
  ⠀⣼⣿⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⣿⡀⠀
  ⢠⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢿⣷⠀
  ⣾⡿⠀⠀⠀⠀⠀⢠⣦⡀⠀⠀⠀⠀⠀⠀⠀⣠⣦⠀⠀⠀⠀⠀⠸⣿⡄
  ⣿⡇⠀⠀⠀⠀⠀⠀⠙⢿⣦⡀⠀⠀⠀⣠⣾⠟⠁⠀⠀⠀⠀⠀⠀⣿⡇
  ⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠙⣿⣦⣠⣾⡿⠁⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇
  ⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡇
  ⣿⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣿⡇
  ⢹⣿⡀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⢸⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⣿⠀
  ⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⠀⣿⡿⢸⣿⡆⠀⠀⠀⠀⠀⠀⠀⠀⣿⡟⠀
  ⠀⢻⣷⡀⠀⠀⠀⠀⠀⠀⠀⣿⡇⠘⣿⡇⠀⠀⠀⠀⠀⠀⠀⢸⣿⠃⠀
  ⠀⠈⠉⠁⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠉⠁⠀⠀⠀⠀⠀⠀⠀⠈⠉⠀⠀
Ascii art from - 
https://emojicombos.com/vagina-ascii-art

`,
  'color:#F72798'
);

///////////////////////////////////

/*
Testing Strict mode 
*/
console.log('');
console.log('');
console.log(
  '%c 32 - Strict Mode - SM',
  'color: #FDEE00; font-weight: bold; font-size: 1rem;'
);

let hasDrivLicSM = false;
const passTestSM = true;
if (passTestSM) hasDrivLicSM = true;
if (hasDrivLicSM) console.log('✅I can Drive');

// In built keywords reserved keywords

// const interface = SomeInterface

// const private = 23 - this is also a rerved keyword

///////////////////////////////////

/*
Testing Strict mode 
*/
console.log('');
console.log('');
console.log(
  '%c 33 - Functions - s3f',
  'color: #E9D66B; font-weight: bold; font-size: 1rem;'
);

// creating logger function

function loggerS3F() {
  console.log('💋DrinkHerPiss');
}

// Calling , Running or Invoking Function
loggerS3F();
loggerS3F();
loggerS3F();

// Implement a new function

// In this function here is a console.log statment so it is fully printed
function fruitProcS34(apples, oranges) {
  console.log(apples, oranges);

  // Here Storing the input variables
  const juiceS3F = `
  Juice with ${apples} apples and ${oranges} oragnes.
  `;
  console.log(juiceS3F);
}

//Now just callt the function
fruitProcS34(2, 10);

// The samea above function usign return statement will store output in a variable
function fruproS3F(apples2S3F, oranges2S3F) {
  console.log(
    `
  You entered %c${apples2S3F}%c
  You entered %c${oranges2S3F}%c
  `,
    'color:#FC0FC0',
    'color:white',
    'color:#FC0FC0',
    'color:white'
  );

  return;
}

// execute about function
fruproS3F(2, 4);

// Doing it fromt eh tutorial
function fruproc_3S3F(apple_3S3F, oranges_3S3F) {
  console.log(apple_3S3F, oranges_3S3F);
  const juice_3S3F = `Juice with ${apple_3S3F} apples and ${oranges_3S3F} oranges`;
  return juice_3S3F;
}
const fr_3S3F = fruproc_3S3F(23, 24);
console.log(fr_3S3F)
console.log(fruproc_3S3F(50,50))

const appleOrangeJuice_31 = fruproc_3S3F(10,10)
console.log(appleOrangeJuice_31)