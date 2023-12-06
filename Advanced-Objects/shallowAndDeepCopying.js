//shallow copying is best for objects which dont contain nested fields(in Objects)
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

//shallow copying using spread method
let shallowcopy = { ...student };
console.log(shallowcopy);

//Deep copying

const deepCopy = function (obj) {
  let tempObj = {};
  for (let key in obj) {
    tempObj = {
      ...tempObj,
      [key]:
        typeof obj[key] === 'object' && !Array.isArray(obj[key])
          ? { ...deepCopy(obj[key]) }
          : typeof obj[key] === 'object' && !Array.isArray(obj[key])
          ? [...obj[key]]
          : obj[key],
    };
  }

  return tempObj;
};

console.log(deepCopy(student));
