// The Object.defineProperty() and Object.defineProperties() methods allow us to define custom behavior for an object’s properties. You can do everything from preventing enumeration which means the property will not show up but would be accessible. You can also pre-set a value when the object is created and also define custom getters and setters.

// This lets you treat your Object like a custom schema where all properties can be configured as needed. In this exercise, let’s build a constructor function which produces a prototype object for a Car. You can set the brand, model, transmission and color properties. On part of the object, the id property is pre-assigned and a changelog array is populated with a log of changes automatically.

// Start by opening up the main.js file. You’ll notice a constructor function in place. If you see the terminal output, you will see properties being populated and accessed. This is standard behavior since the constructor function merely instantiates an empty object which we’re filling up and displaying on the terminal after iterating through its properties.

// To customize each property, rewrite the Car constructor function implementing Object.defineProperties() as shown below.

const Car = function () {
  let brand = '';
  let model = '';
  let transmission = '';
  let color = '';
  let changeLog = [];
  Object.defineProperties(this, {
    id: {
      enumerable: true,
      value: `CAR-012X-DB1`,
    },
    brand: {
      enumerable: true,
      set(val) {
        changeLog.push(`Brand changed to ${val}`);
        brand = val;
      },
      get() {
        return brand;
      },
    },
    model: {
      enumerable: true,
      set(val) {
        changeLog.push(`Model changed to ${val}`);
        model = val;
      },
      get() {
        return model;
      },
    },
    transmission: {
      enumerable: true,
      set(val) {
        changeLog.push(`Transmission changed to ${val}`);
        transmission = val;
      },
      get() {
        return transmission;
      },
    },
    color: {
      enumerable: true,
      set(val) {
        changeLog.push(`Color changed to ${val}`);
        color = val;
      },
      get() {
        return color;
      },
    },
    changeLog: {
      enumerable: false,
      get() {
        return changeLog;
      },
    },
  });
};

const Civic = new Car();

Civic.brand = 'Honda';
Civic.model = 'Civic';
Civic.transmission = 'AT';
Civic.color = 'Galaxy Grey';

Civic.model = 'Civic 1.8S';
Civic.color = 'Pearl White';

for (let prop in Civic) {
  console.log(`${prop}: ${Civic[prop]}`);
}

console.log(Civic.changeLog);
