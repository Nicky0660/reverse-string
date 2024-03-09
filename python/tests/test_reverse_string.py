from reverse_string import reverse_string


# testing for reverse_string()
def test_reverse_string():
    assert reverse_string("hello") == "olleh"

def test_reverse_string_empty():
    assert reverse_string("") == ""

def test_reverse_string_multiple_characters():
    assert reverse_string("xax23 it4 7 !") == "! 7 4ti 32xax"

def test_reverse_string_with_whitespace():
    assert reverse_string("T H I S H  A S @   Whit e sp a ce!") == "!ec a ps e tihW   @ S A  H S I H T"

def test_reverse_string_with_special_characters():
    assert reverse_string("#%@*$# &$^#*") == "*#^$& #$*@%#"

# testing for isPalindrome
from reverse_string import isPalindrome    

def test_is_palindrome():
    assert isPalindrome("radar") == True 

def test_is_not_palindrome():
    assert isPalindrome("hello") == False

def test_empty_string():
    assert isPalindrome(" ") == True

def test_single_character():
    assert isPalindrome("a") == True

def test_palindrome_with_complex_phrase():
    assert isPalindrome("Able was I, ere I saw Elba!") == True