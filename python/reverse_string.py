# create a python environment that allows use of pytest
# write a function that starts at the last index and iterates backwards until the 0 index
# this will have an effect that can reverse a string element


def reverse_string(str):
    reversed_string = ''
    for i in range(len(str)-1, -1 , -1):
        reversed_string += str[i]
    return reversed_string


# testing print statements for console output
# toggle these on an off to use cli.py without seeing these print statements

# print("Expecting: 'ereht yeh'")
# print(reverse_string('hey there')) 

# print("Expecting: 'a'")
# print(reverse_string('a'))

# print("Expecting: ' '")
# print(reverse_string(' '))

# print("Expecting: '! 7 4ti 32xax'")
# print(reverse_string('xax23 it4 7 !'))

def isPalindrome(str):
    modified_str = ''.join(char.lower() for char in str if char.isalnum())
    return modified_str == modified_str[::-1]