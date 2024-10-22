# Java Function Examples

## 1. Check if a Number is Even

```java
public class NumberCheck {
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isEven(10)); // Output: true
        System.out.println(isEven(7));  // Output: false
    }
}
```

This example demonstrates how to use a function to check if a number is even or odd.

## 2. Sum of Array Elements

```java
public class ArrayOperations {
    public static int sumArray(int[] numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        return sum;
    }

    public static void main(String[] args) {
        int[] myArray = {1, 2, 3, 4, 5};
        System.out.println(sumArray(myArray)); // Output: 15
    }
}
```

This example shows how to sum the elements of an array using a function.

## 3. Find Maximum of Three Numbers

```java
public class MaxValue {
    public static int findMax(int a, int b, int c) {
        return Math.max(a, Math.max(b, c));
    }

    public static void main(String[] args) {
        System.out.println(findMax(10, 20, 15)); // Output: 20
    }
}
```

This example demonstrates how to find the maximum of three numbers using a function.

## 4. Factorial Calculation (Recursion)

```java
public class Factorial {
    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // Output: 120
    }
}
```

This example shows how to calculate the factorial of a number using recursion.

## 5. Check for Palindrome String

```java
public class PalindromeCheck {
    public static boolean isPalindrome(String word) {
        int start = 0;
        int end = word.length() - 1;
        while (start < end) {
            if (word.charAt(start) != word.charAt(end)) {
                return false;
            }
            start++;
            end--;
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPalindrome("racecar")); // Output: true
        System.out.println(isPalindrome("hello"));   // Output: false
    }
}
```

This example demonstrates how to check if a string is a palindrome.

## 6. Temperature Conversion (Celsius to Fahrenheit and Vice Versa)

```java
public class TemperatureConverter {
    public static double celsiusToFahrenheit(double celsius) {
        return (celsius * 9 / 5) + 32;
    }

    public static double fahrenheitToCelsius(double fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    public static void main(String[] args) {
        System.out.println(celsiusToFahrenheit(25));  // Output: 77.0
        System.out.println(fahrenheitToCelsius(77));  // Output: 25.0
    }
}
```

This example demonstrates how to convert temperatures between Celsius and Fahrenheit using functions.
