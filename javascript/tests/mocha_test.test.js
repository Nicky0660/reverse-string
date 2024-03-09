const assert = require('assert');
const { reverseString } = require('../reverse_string');

describe('Reverse String', function() {
  it('should reverse a string', function() {
    assert.strictEqual(reverseString('hi'), 'ih');
  });

  it('should handle empty string', function() {
    assert.strictEqual(reverseString(''), '');
  });

  it('should handle single character', function() {
    assert.strictEqual(reverseString('a'), 'a');
  });

  it('should handle multiple characters', function() {
    assert.strictEqual(reverseString('catbaby'), 'ybabtac');
  });

  it('should handle multiple word strings', function() {
    assert.strictEqual(reverseString('This has multiple words'), 'sdrow elpitlum sah sihT');
  });
});

// test cases for Palindrome behaviors

const { isPalindrome } = require('../reverse_string');

describe('isPalindrome', function() {
  it('should ignore white space, special characters, and punctuation', function() {

    assert.strictEqual(isPalindrome("A man, a plan, a canal, Panama"), true);
    assert.strictEqual(isPalindrome("Madam, in Eden I'm Adam"), true);
    assert.strictEqual(isPalindrome("racecar"), true);


    assert.strictEqual(isPalindrome("hello"), false);
    assert.strictEqual(isPalindrome("Palindrome test"), false);
    assert.strictEqual(isPalindrome("12321a"), false);
  });
});
