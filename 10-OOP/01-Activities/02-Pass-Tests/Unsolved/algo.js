function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  // TODO: convert string to an array

  let result = str.split('').reverse().join("")
  // TODO: reverse substrings in array
  // TODO: convert array back into a string
  return result
};

Algo.prototype.isPalindrome = function(str) {
  if(str === this.reverse(str)){
    return true
  } else {
    return false
  }
};

Algo.prototype.capitalize = function(str) {
  return str
    .split(' ')
    .map(word => {
      return word.substring(0, 1).toUpperCase() + word.substring(1)
    })
};

module.exports = Algo;
