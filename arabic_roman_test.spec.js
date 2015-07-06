var AR = require('./arabic_roman.js');

describe("Arabic numeral to Roman numeral", function() {
  var a2r = new AR();

  it("One. Offical Test.", function() {
    var result = a2r.arabicToRoman(1);
    expect(result).toEqual('I');
  });

  it("Two", function() {
    var result = a2r.arabicToRoman(2);
    expect(result).toEqual('II');
  });

  it("Three. Offical Test.", function() {
    var result = a2r.arabicToRoman(3);
    expect(result).toEqual('III');
  });

  it("Four", function() {
    var result = a2r.arabicToRoman(4);
    expect(result).toEqual('IV');
  });

  it("Five", function() {
    var result = a2r.arabicToRoman(5);
    expect(result).toEqual('V');
  });

  it("Six", function() {
    var result = a2r.arabicToRoman(6);
    expect(result).toEqual('VI');
  });

  it("Seven", function() {
    var result = a2r.arabicToRoman(7);
    expect(result).toEqual('VII');
  });

  it("Eight", function() {
    var result = a2r.arabicToRoman(8);
    expect(result).toEqual('VIII');
  });

  it("Nine. Offical Test.", function() {
    var result = a2r.arabicToRoman(9);
    expect(result).toEqual('IX');
  });

  it("Ten", function() {
    var result = a2r.arabicToRoman(10);
    expect(result).toEqual('X');
  });

  it("Thirteen", function() {
    var result = a2r.arabicToRoman(13);
    expect(result).toEqual('XIII');
  });

  it("Fourteen", function() {
    var result = a2r.arabicToRoman(14);
    expect(result).toEqual('XIV');
  });

  it("Fifteen", function() {
    var result = a2r.arabicToRoman(15);
    expect(result).toEqual('XV');
  });

  it("Eighteen", function() {
    var result = a2r.arabicToRoman(18);
    expect(result).toEqual('XVIII');
  });

  it("Nineteen", function() {
    var result = a2r.arabicToRoman(19);
    expect(result).toEqual('XIX');
  });

  it("Twenty", function() {
    var result = a2r.arabicToRoman(20);
    expect(result).toEqual('XX');
  });

  it("Thirty", function() {
    var result = a2r.arabicToRoman(30);
    expect(result).toEqual('XXX');
  });

  it("Thirty eight", function() {
    var result = a2r.arabicToRoman(38);
    expect(result).toEqual('XXXVIII');
  });

  it("Thirty nine", function() {
    var result = a2r.arabicToRoman(39);
    expect(result).toEqual('XXXIX');
  });

  it("Forty", function() {
    var result = a2r.arabicToRoman(40);
    expect(result).toEqual('XL');
  });

  it("Fifty", function() {
    var result = a2r.arabicToRoman(50);
    expect(result).toEqual('L');
  });

  it("Sixty", function() {
    var result = a2r.arabicToRoman(60);
    expect(result).toEqual('LX');
  });

  it("Eighty", function() {
    var result = a2r.arabicToRoman(80);
    expect(result).toEqual('LXXX');
  });

  it("Ninety", function() {
    var result = a2r.arabicToRoman(90);
    expect(result).toEqual('XC');
  });

  it("101", function() {
    var result = a2r.arabicToRoman(101);
    expect(result).toEqual('CI');
  });

  it("212", function() {
    var result = a2r.arabicToRoman(212);
    expect(result).toEqual('CCXII');
  });

  it("353", function() {
    var result = a2r.arabicToRoman(353);
    expect(result).toEqual('CCCLIII');
  });

  it("404", function() {
    var result = a2r.arabicToRoman(404);
    expect(result).toEqual('CDIV');
  });

  it("555", function() {
    var result = a2r.arabicToRoman(555);
    expect(result).toEqual('DLV');
  });

  it("846", function() {
    var result = a2r.arabicToRoman(846);
    expect(result).toEqual('DCCCXLVI');
  });

  it("927", function() {
    var result = a2r.arabicToRoman(927);
    expect(result).toEqual('CMXXVII');
  });

  it("1008", function() {
    var result = a2r.arabicToRoman(1008);
    expect(result).toEqual('MVIII');
  });

  it("1066. Offical Test.", function() {
    var result = a2r.arabicToRoman(1066);
    expect(result).toEqual('MLXVI');
  });

  it("1989. Offical Test.", function() {
    var result = a2r.arabicToRoman(1989);
    expect(result).toEqual('MCMLXXXIX');
  });

  it("1999", function() {
    var result = a2r.arabicToRoman(1999);
    expect(result).toEqual('MCMXCIX');
  });

  it("2420", function() {
    var result = a2r.arabicToRoman(2420);
    expect(result).toEqual('MMCDXX');
  });

  it("3888", function() {
    var result = a2r.arabicToRoman(3888);
    expect(result).toEqual('MMMDCCCLXXXVIII');
  });

  it("3999", function() {
    var result = a2r.arabicToRoman(3999);
    expect(result).toEqual('MMMCMXCIX');
  });

  it("I to 1. Offical Test.", function() {
    var result = a2r.romanToArabic('I');
    expect(result).toEqual(1);
  });

  it("III to 3. Offical Test.", function() {
    var result = a2r.romanToArabic('III');
    expect(result).toEqual(3);
  });

  it("IX to 9. Offical Test.", function() {
    var result = a2r.romanToArabic('IX');
    expect(result).toEqual(9);
  });

  it("MLXVI to 1066. Offical Test.", function() {
    var result = a2r.romanToArabic('MLXVI');
    expect(result).toEqual(1066);
  });

  it("MCMLXXXIX to 1989. Offical Test.", function() {
    var result = a2r.romanToArabic('MCMLXXXIX');
    expect(result).toEqual(1989);
  });

});
