// const log = console.log;

// recurse(10);

// function recurse(x) {
//   if (x > 0) {
//     log(x);
//     recurse(x - 1);
//   }
// }

// log('\n');

// const factorialResult = factorial(5);
// log(factorialResult);

// function factorial(n) {
//   if (n === 0) {
//     return 1;
//   }

//   return n * factorial(n - 1);
// }

let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

// The function to do the job
function sumSalaries(department) {
  if (Array.isArray(department)) { // case (1)
    return department.reduce((prev, current) => prev + current.salary, 0); // sum the array
  } else { // case (2)
    let sum = 0;
    for (let subdep of Object.values(department)) {
      sum += sumSalaries(subdep); // recursively call for subdepartments, sum the results
    }
    return sum;
  }
}

sumSalaries(company); // 7700