import HelloWorld from '../src/HelloWorld';
import Fizzbuzz from '../src/FizzBuzz'


test('Hello World should return "Hello World!"', () => {
  expect(HelloWorld()).toBe('Hello World!');
});

test('Calling the Fizzbuzz function will return 1 - 100', () => {
  //Arange
  const expectedNumberOfLines= 100;
  
  //Act
  const fizzBuzz = Fizzbuzz();
  const lineCount = fizzBuzz.split('\n').length

  const firstLine = fizzBuzz.split('\n')[0];
  const thirdToLastLine = fizzBuzz.split('\n')[97]

  //Assert
  expect(lineCount).toEqual(expectedNumberOfLines);

  expect(firstLine).toEqual('1');
  expect(thirdToLastLine).toEqual('98');
});


test('Calling the Fizzbuzz function will give us Fizz for any number that is divisible by 3', () => {
    
 //Arange
  
  //Act
  const fizzBuzz = Fizzbuzz();
  const lineCount = fizzBuzz.split('\n').length

  const thirdItem = fizzBuzz.split('\n')[2];
  const sixthItem = fizzBuzz.split('\n')[5]
  const ninteyNinthItem = fizzBuzz.split('\n')[98]
  //Assert

  expect(thirdItem).toEqual('Fizz');
  expect(sixthItem).toEqual('Fizz');
  expect(ninteyNinthItem).toEqual('Fizz');


})

test('Calling the Fizzbuzz function will give us Buzz for any number that is divisible by 5', () => {
    
 //Arange
  
  //Act
  const fizzBuzz = Fizzbuzz();
  const lineCount = fizzBuzz.split('\n').length

  const thirdItem = fizzBuzz.split('\n')[4];
  const sixthItem = fizzBuzz.split('\n')[9]
  const ninteyNinthItem = fizzBuzz.split('\n')[79]
  const lastItem= fizzBuzz.split('\n')[99]
  //Assert

  expect(thirdItem).toEqual('Buzz');
  expect(sixthItem).toEqual('Buzz');

  expect(ninteyNinthItem).toEqual('Buzz');
  expect(lastItem).toEqual('Buzz');

})

test('Calling the Fizzbuzz function will give us FizzBuzz for any number that is divisible by 5 and 3', () => {
    
 //Arange
  
  //Act
  const fizzBuzz = Fizzbuzz();
  const lineCount = fizzBuzz.split('\n').length

  const thirdItem = fizzBuzz.split('\n')[14];
  const sixthItem = fizzBuzz.split('\n')[29]
  const ninteyNinthItem = fizzBuzz.split('\n')[89]
  //Assert

  expect(thirdItem).toEqual('FizzBuzz');
  expect(sixthItem).toEqual('FizzBuzz');
  expect(ninteyNinthItem).toEqual('FizzBuzz');


})
