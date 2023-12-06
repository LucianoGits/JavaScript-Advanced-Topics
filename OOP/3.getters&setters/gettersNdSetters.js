// To access a property of an object from within a method of the same object, you need to use the 'this' keyword.
//accessor properties
//get - to define a getter method to get the property value, getter methods are used to access the properties of an object.
// set - to define a setter method to set the property value,setter methods are used to change the values of an object.(takes exactly one param)
class Product {
  //A CONSTRUCTOR IS A SPECIAL METHOD OF A CLASS
  constructor(name, cost, acceptingOrders, quantity, description) {
    this.name = name;
    this.cost = cost;
    this.acceptingOrders = acceptingOrders;
    this.quantity = quantity;
    this.description = description;
  }

  //get Method
  get stockCost() {
    return this.cost * this.quantity;
  }
  get Productdesc() {
    return this.description;
  }
}

const iPadPro = new Product(
  "iPad Pro 11''",
  6100,
  'yes',
  2,
  'iPad Pro comes in with a new processor, Our fastest and Bestest M2 processor.'
);

console.log(iPadPro);
console.log(iPadPro.stockCost);
console.log(iPadPro.Productdesc);
console.log(__dirname);
