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
