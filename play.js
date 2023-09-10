// ! challenge 1

function even(arr) {
  let c = [];
  for (let i of arr) {
    if (i % 2 == 0) {
      c.push(i);
    }
  }
  return c;
}

// ! challenge 2

let above30 = (arr) => {
  let c = [];
  for (let i of arr) {
    if (i.age > 30) {
      c.push(i);
    }
  }
  return c;
};

// ! challenge 3

let stack = [];
stack.push("one");
stack.push("two");
stack.push("three");

// ! challenge 4

let queue = [];
queue.unshift("one");
queue.unshift("two");
queue.unshift("three");

// ! challenge 5
let stringSlicer = (str) => {
  const vowels = ["a", "e", "i", "o", "u"];
  str = str
    .split("")
    .filter((e) => {
      return vowels.includes(e) === false;
    })
    .join("");
  return str;
};

// ! challenge 6

let uniq = (arr1, arr2) => {
  return Array.from(new Set([...arr1, ...arr2]));
};
