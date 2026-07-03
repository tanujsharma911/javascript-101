

const counter = () => {
  let count = 0;

  const increment = () => {
    count++;
  }

  return {
    increment,
    getCount: () => count
  };
};

const myCounter = counter();

myCounter.increment();
myCounter.increment();

console.log(myCounter.getCount()); // What will this log?