//setTimeout is an ansychronous function
console.log('hello from global scope');
let funcOne = () => console.log(`Hello from Function ONE`);
//because I applied setTimeout(), funcTwo will be the last to be loaded
let funcTwo = () => {
  setTimeout(() => console.log(`Hello from Function TWO`), 5000);
};
let funcThree = () => console.log(`Hello from Function THREE`);
funcOne();
funcTwo();
funcThree();
