'use strict';
//object
const rectangles = [
  {
    id: 'Rectangle - 01',
    width: 129.2,
    height: 80.9,
  },
  {
    id: 'Rectangle - 02',
    width: 342,
    height: 120,
    area() {
      return this.width * this.height;
    },
  },
];

//function to calculate area
const calcArea = function () {
  return this.width * this.height;
};

//foreach method to call in function to calculate area
//before console logging we are going to use an ternary operator + .hasOwnProperty to check if the object inserted has the field(property) "area"
rectangles.forEach(rect =>
  console.log(
    `${rect.id} : ${
      rect.hasOwnProperty('area') ? rect.area() : calcArea.call(rect)
    }`
  )
);
