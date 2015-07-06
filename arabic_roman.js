var AR = function() {
  this._romanNumerals = ['M','D','C','L','X','V','I'];
};

/** Converts arabic numbers to roman numerals given an array of numerals.
  *
  *  input: A number less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of roman numerals arranged highest to lowest. First/largest numeral
  *    must be a power of ten and array must have an odd number of elements.
  */
AR.prototype.arabicToRoman = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals)==='undefined') numerals = this._romanNumerals.concat();

  var output = '',
      power = Math.pow(10,Math.floor(numerals.length/2)), // power: The value of the largest numeral.
      // optimized code to use the fewest number of calculations
      powerBelow = power/10, fiveBelow = 5*powerBelow,
      fourBelow = 4*powerBelow, numOvrPwr = input/power;

  // if input has repeatable numerals ie I, X, C, or M
  if(numOvrPwr >= 1 && numOvrPwr < 4) {
    for( var i = 0, numOvrPwrRnd = Math.floor(numOvrPwr); i < numOvrPwrRnd; i++)
      output += numerals[0];
    input %= power;
  }

  // if input is a nine or four
  if(input%fiveBelow >= fourBelow) { // input%5 >= 4 is always true for input%10 >= 9
    var nineBelow = 9*powerBelow;
    // if input is nine
    if(input%power >= nineBelow) {
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
    numerals.shift(); numerals.shift(); // remove the two largest numeral from array
    output += this.arabicToRoman(input,numerals);
  }

  return output;
}


/** Converts roman numerals to arabic numbers given an array of numerals.
  *
  *  input: A string of roman numerals less that 4 times the value of the largest numeral in the numerals array.
  *  numerals: (optional) An array of roman numerals arranged highest to lowest. First/largest numeral
  *    must be a power of ten and array must have an odd number of elements.
  */
AR.prototype.romanToArabic = function(input, numerals) {

  // if numerals aren't provided copy _romanNumerals
  if (typeof(numerals) === 'undefined') numerals = this._romanNumerals.concat();

  // if input is a string turn it into an array
  if (typeof(input) === 'string') input = input.split('');

  var output = 0,
      power = Math.pow(10,Math.floor(numerals.length/2)); // power: The value of the largest numeral.

  // repeatable numerals ie I, X, C, or M
  while(input[0] === numerals[0]){
    output += power;
    input.shift();
  }

  // if input is possibly a IV or IX
  if(input[0] === numerals[2]){ // e.g. input[0] == 'I' while the largest numeral (numerals[0]) is 'X'
    // if input is IX
    if(input[1] === numerals[0]){ // the next numeral is the largest numeral
      output += 9*Math.floor(power/10);
      input.shift(); input.shift();
    }
    // if input is IV
    else if(input[1] === numerals[1]){ // the next numeral is the second largest numeral
      output += 4*Math.floor(power/10);
      input.shift(); input.shift();
    }
  }

  // if input is a V
  if(input[0] === numerals[1]){
    output += 5*Math.floor(power/10);
    input.shift();
  }

  if(input.length !== 0 && numerals.length !== 0){
    numerals.shift(); numerals.shift(); // remove the two largest numeral from array
    output += this.romanToArabic(input,numerals);
  }

  return output;
}

module.exports = AR;
