// Vinicio - using module.exports

// module.exports is an object I can use to expose names


function secret() {
  console.log('Kali is cute');
}

// module.exports = function getBiggest(a, b, c) {
//
// };

// Vinicio - these type of modules are called CommonJS modules
module.exports = {};

module.exports.getBiggest = function (a, b, c) {
  // Vinicio - I know, you can solve this with ternaries, but
  // is not as easy to read for beginners.
  let biggestSoFar = null;
  if (a > b) {
    biggestSoFar = a; // Vinicio - this line is not being tested :(
  } else {
    biggestSoFar = b;
  }

  if(biggestSoFar > c) {
    return biggestSoFar;
  } else {
    return c;
  }
};

module.exports.getSmallest = function (a, b, c) {

};

module.exports.secretPin = '123';
