var AR = function() {
  this._romanNumerals = ['M','D','C','L','X','V','I'];
};

/** Converts arabic numbers to roman numerals given an array of numerals.
  *
  *  input: A number less that 4 times the value of the largest numeral.
  *  numerals: An array of roman numerals arranged highest to lowest. First/largest numeral must be a power of ten
  *    and array must have an odd number of elements.
  */
AR.prototype.arabicToRoman = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals)==='undefined') numerals = this._romanNumerals.concat();

  var output = '',
      base = Math.pow(10,Math.floor(numerals.length/2)), // base: The value of the largest numeral.
      // optimized code to use the fewest number of calculations
      baseBelow = base/10, fiveBelow = 5*baseBelow,
      fourBelow = 4*baseBelow, nineBelow = 9*baseBelow,
      numOverBase = input/base, numOverBaseRounded = Math.floor(numOverBase);

  // if input has repeatable numerals ie I, X, C, or M
  if(numOverBase >= 1 && numOverBaseRounded < 4) {
    for( var i = 0; i < numOverBaseRounded; i++) output += numerals[0];
    input %= base;
  }

  // if input is a nine or four
  if(input%fiveBelow >= fourBelow) { // input%5 >= 4 is always true for input%10 >= 9
    // if input is nine
    if(input%base >= nineBelow) {
      output += numerals[2] + numerals[0]; // ie IX
      input -= nineBelow;
    } else {
      output += numerals[2] + numerals[1]; // ie IV
      input -= fourBelow;
    }
  }

  // if input has a five numeral ie single numeral
  if(input/fiveBelow >= 1) {
    output += numerals[1]; // V, L , D
    input -= fiveBelow;
  }

  if(input !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove top two numeral from array
    output += this.arabicToRoman(input,numerals);
  }

  return output;
}

AR.prototype.romanToArabic = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals) === 'undefined') numerals = this._romanNumerals.concat();

  // if input is a string turn it into an array
  if (typeof(input) === 'string') input = input.split('');

  var output = 0,
      base = Math.pow(10,Math.floor(numerals.length/2)), // base: The value of the largest numeral.
      // optimized code to use the fewest number of calculations
      baseBelow = Math.floor(base/10), fiveBelow = 5*baseBelow,
      fourBelow = 4*baseBelow, nineBelow = 9*baseBelow;

  // if input is possibly a IV or IX
  if(input[0] === numerals[2]){
    // if input is IX
    if(input[1] === numerals[0]){
      output += nineBelow;
      input.shift(); input.shift();
    }
    // if input is IV
    else if(input[1] === numerals[1]){
      output += fourBelow;
      input.shift(); input.shift();
    }
  }

  // repeatable numerals ie I, X, C, or M
  while(input[0] === numerals[0]){
    output += base;
    input.shift();
  }

  // if input is a V
  if(input[0] === numerals[1]){
    output += fiveBelow;
    input.shift();
  }

  if(input.length !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove top two numeral from array
    output += this.romanToArabic(input,numerals);
  }

  return output;
}

module.exports = AR;
