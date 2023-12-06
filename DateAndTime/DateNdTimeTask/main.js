const data = require('./data');

// Task 1: Convert comma-separated data to an array of string rows
const csvToRows = str => {
  return str.split('\n');
};

// Task 2: Remove duplicate rows from the array
const removeDuplicateRows = arr => {
  const seenIds = new Set();
  return arr.filter((row, index) => {
    if (index === 0) return true;
    const id = row.split(',')[0];
    if (!seenIds.has(id)) {
      seenIds.add(id);
      return true;
    }
    return false;
  });
};

// Task 3: Convert array of string rows to objects using the header row as property names
const strRowsToObjects = rows => {
  const header = rows[0].split(',');
  return rows.slice(1).map(row => {
    const values = row.split(',');
    return header.reduce((obj, key, index) => {
      obj[key] = values[index];
      return obj;
    }, {});
  });
};

// Task 4: Sort the array alphabetically (ascending) by first_name
const sortByFirstName = arr => {
  return [...arr].sort((a, b) => a.first_name.localeCompare(b.first_name));
};

// Task 5: Convert the registeredOn epoch timestamps to Date objects
const timeToDate = arr => {
  return arr.map(user => ({
    ...user,
    registeredOn: new Date(user.registeredOn * 1000),
  }));
};

// Task 6: Add a new property named permissions to every object
const addUserPermissions = arr => {
  return arr.map(user => ({
    ...user,
    permissions: {
      admin: false,
      profile: true,
      billing: true,
      supervisor: false,
    },
  }));
};

// Task 7: Construct the data processing pipeline
const processData = data => {
  const rows = csvToRows(data);
  const uniqueRows = removeDuplicateRows(rows);
  const users = strRowsToObjects(uniqueRows);
  const sortedUsers = sortByFirstName(users);
  const usersWithDates = timeToDate(sortedUsers);
  const usersWithPermissions = addUserPermissions(usersWithDates);
  return usersWithPermissions;
};

// Task 8: Find users with invalid email IDs
const findBadEmailIds = users => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return users.filter(user => user.email && !regex.test(user.email));
};

const processedData = processData(data);
console.log(findBadEmailIds(processedData));
// PLEASE DO NOT DELETE/MODIFY THE CODE BELOW
module.exports = {
  csvToRows,
  removeDuplicateRows,
  strRowsToObjects,
  timeToDate,
  sortByFirstName,
  addUserPermissions,
  findBadEmailIds,
  processData,
};
