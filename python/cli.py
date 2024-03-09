from reverse_string import reverse_string, isPalindrome

def main():
    print("Ready to reverse string")
    while True:
        user_input = input("Enter string: ")
        reversed_string = reverse_string(user_input)
        print("Reversed string:", reversed_string)
        
        if isPalindrome(user_input):
            print("This string is a palindrome!")
        else:
            print("This string is not a palindrome.")

        continue_input = input("Do you want to reverse another string? (y/n): ")
        if continue_input.lower() != 'y':
            break

if __name__ == "__main__":
    main()
