"use strict";

//You’ll see an associative array of date pair strings. The objective is to compute the difference between the pair of dates and be able to present the difference in either days, hours, minutes or seconds.

// The bit involving iteration through the dates array, converting each string to a date object and invoking the dateDiff() function has been done for you however it won’t produce any result since the function itself hasn’t been defined as yet.

// diff : diff has been simplified by using Math.abs(diff) which will return an absolute value, obliterating the need to use a ternary.

const dates = [
  ["10 Feb, 2021", "1 Mar, 2021"],
  ["25 Dec, 2020", "25 Dec, 1999"],
  ["1 Jan, 2021", "1 Jan, 1954"],
];

const dateDiff = (start, end, format = "D") => {
  const diff = end - start;
  const suffix = diff <= 0 ? "elapsed..." : "left...";
  const days = `${(Math.abs(diff) / 86400000).toPrecision(5)} days`;
  const hours = `${Math.ceil(Math.abs(diff) / 3600000)} hours`;
  const minutes = `${Math.ceil(Math.abs(diff) / 60000)} minutes`;
  const seconds = `${Math.ceil(Math.abs(diff) / 1000)} seconds`;
  switch (format) {
    case "D": {
      return `${days} ${suffix}`;
    }
    case "H": {
      return `${hours} ${suffix}`;
    }
    case "M": {
      return `${minutes} ${suffix}`;
    }
    case "S": {
      return `${seconds} ${suffix}`;
    }
  }
};

dates.forEach(([d1, d2]) => {
  const dateD1 = new Date(d1);
  const dateD2 = new Date(d2);
  console.log(
    `Diff between ${d1} and ${d2} is ${dateDiff(dateD1, dateD2, "D")}`
  );
});

//As you can see from the function above, the actual difference between date objects is just simple subtraction. After that, all that you’ve got to do is transform the milliseconds value to days, hours, minutes and seconds and return back the value as demanded using the format keyword parameter.
