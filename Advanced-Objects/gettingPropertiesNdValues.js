//object.values(),keys() and entries() have access to properties,access values in an object and use array methods

const student = {
  fName: 'Luciano',
  lName: 'Da Graça',
  age: 20,
  studentID: 1234,
  subjects: {
    favSubject: 'Computer Science',
    leastFavSubject: 'Business studies',
  },
};

const grades = {
  chemistry: 10,
  mathematics: 9,
};
//combining two objects using spread operator
const togeda = { ...student, ...grades };
console.log(togeda);

if (Object.keys(student).includes('fName')) {
  console.log(
    `Object.keys() to print first name if fName property exists ==> ${student.fName}`
  );
}

function findValues(value, obj) {
  return `\nObject.values to check if a value exists in an object ==> ${Object.values(
    obj
  ).includes(value)}`;
}
console.log(findValues('Luciano', student));
// object entries(usually returns an array) to print both the property and value in a string form
for (let [key, value] of Object.entries(student)) {
  console.log(`${key}:`, value);
}
