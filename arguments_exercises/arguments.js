// function sum() {
//   let sum = 0;
//   args = Array.from(arguments);

//   args.forEach( (el) => {
//     sum += el;
//   });

//   return sum;
// }

function sum(...args) {
  let sum = 0;

  args.forEach((el) => {
    sum += el;
  });

  return sum;
}

// sum(1, 2, 3, 4) === 10;

// Function.prototype.myBind = function (context) {
//   let args = Array.from(arguments);
//   let that = this;
//   args.shift();
  
//   return function() {
//     let args2 = Array.from(arguments);
//     args = args.concat(args2);

//     that.apply(context, args);
//    };
// }

Function.prototype.myBind = function (context, ...args) {

  return (...args2) => {
    args = args.concat(args2);
    this.apply(context, args);
  };
}

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");``

// function curriedSum(numArgs) {
//   let numbers = [];

//   function _curriedSum(num) {
//     numbers.push(num);
//     if (numbers.length === numArgs) {
//       let sum = 0;
//       numbers.forEach( (n) => {
//         sum += n;
//       });
//       return sum;
//     } else {
//       return _curriedSum;
//     }
//   }

//   return _curriedSum;
// }

// const sum = curriedSum(4);
// sum(5)(30)(20)(1);

function sum(...args) {
  let sum = 0;
  console.log(this);
  args.forEach((el) => {
    sum += el;
  });

  return sum;
}

Function.prototype.curry = function(numArgs) {
  let args = [];

  const _curry = (arg) => {
    args.push(arg);
    if (args.length === numArgs) {
      return this.apply(null, args);
    } else {
      return _curry;
    }
  }

  return _curry;
}

const curriedSum = sum.curry(4);
curriedSum(5)(30)(20)(1);

sum.bind(new Array(), [2, 3])();
sum.apply(new Array()), [2, 3]);