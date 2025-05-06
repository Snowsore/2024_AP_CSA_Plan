# AP Computer Science A Exam A

## Section I: Multiple-Choice Questions

1. What is the output of the following code snippet?

   ```java
   int x = 5;
   int y = 10;
   System.out.println(x + y);
   ```

   (A) 15  
   (B) 510  
   (C) 105  
   (D) 5 + 10

2. Which of the following is a valid variable name in Java?
   (A) 1variable  
   (B) variable1  
   (C) variable-1  
   (D) variable 1

3. What value is stored in the variable `result` after the following code executes?

   ```java
   int result = 3 + 4 * 2;
   ```

   (A) 14  
   (B) 11  
   (C) 10  
   (D) 5

4. Which data type would you use to store a true/false value?
   (A) int  
   (B) double  
   (C) boolean  
   (D) char

5. What is the result of the following boolean expression?

   ```java
   boolean result = (5 > 3) && (8 < 6);
   ```

   (A) true  
   (B) false  
   (C) 5  
   (D) 8

6. What is the output of the following code snippet?

   ```java
   for(int i = 0; i < 5; i++) {
       System.out.print(i + " ");
   }
   ```

   (A) 0 1 2 3 4  
   (B) 1 2 3 4 5  
   (C) 0 1 2 3 4 5  
   (D) 1 2 3 4

7. Which of the following statements will correctly declare an array of integers in Java?
   (A) int[] arr = {1, 2, 3};  
   (B) int arr = [1, 2, 3];  
   (C) int arr[] = {1, 2, 3};  
   (D) Both A and C

8. What is the output of the following code?

   ```java
   int[] arr = {10, 20, 30, 40, 50};
   System.out.println(arr[2]);
   ```

   (A) 10  
   (B) 20  
   (C) 30  
   (D) 40

9. Which method can be used to find the length of a string in Java?
   (A) length()  
   (B) size()  
   (C) getLength()  
   (D) getSize()

10. What will be the output of the following code?

    ```java
    String str = "Hello";
    System.out.println(str.charAt(1));
    ```

    (A) H  
    (B) e  
    (C) l  
    (D) o

11. What is the purpose of the `break` statement in Java?
    (A) To exit a loop  
    (B) To skip the current iteration  
    (C) To exit a method  
    (D) To define a block of code

12. What will be the output of the following code?

    ```java
    int x = 5;
    int y = 10;
    System.out.println(x > y ? x : y);
    ```

    (A) 5  
    (B) 10  
    (C) true  
    (D) false

13. Which of the following is not a valid access modifier in Java?
    (A) public  
    (B) private  
    (C) protected  
    (D) package

14. What is the result of the following code snippet?

    ```java
    int x = 5;
    int y = 10;
    int z = x + y++;
    System.out.println(z);
    ```

    (A) 15  
    (B) 16  
    (C) 14  
    (D) 10

15. Which of the following is true about constructors in Java?
    (A) They have no return type  
    (B) They must have the same name as the class  
    (C) They can be overloaded  
    (D) All of the above

16. What is the output of the following code snippet?

    ```java
    String str = "Java";
    System.out.println(str.substring(1, 3));
    ```

    (A) Ja  
    (B) av  
    (C) va  
    (D) Jav

17. Which of the following statements creates an instance of an array list in Java?
    (A) ArrayList list = new ArrayList();  
    (B) ArrayList<int> list = new ArrayList<int>();  
    (C) ArrayList<Integer> list = new ArrayList<>();  
    (D) ArrayList<Integer> list = new ArrayList();

18. What will be the output of the following code?

    ```java
    ArrayList<String> list = new ArrayList<>();
    list.add("A");
    list.add("B");
    list.add("C");
    System.out.println(list.get(1));
    ```

    (A) A  
    (B) B  
    (C) C  
    (D) D

19. Which of the following loops is guaranteed to execute at least once?
    (A) for loop  
    (B) while loop  
    (C) do-while loop  
    (D) None of the above

20. What is the purpose of the `this` keyword in Java?
    (A) To refer to the current object  
    (B) To refer to the parent class  
    (C) To refer to the class itself  
    (D) To refer to a static method

21. What will be the output of the following code?

    ```java
    int[] arr = {1, 2, 3, 4, 5};
    for(int i = 0; i < arr.length; i++) {
        if(i == 2) {
            continue;
        }
        System.out.print(arr[i] + " ");
    }
    ```

    (A) 1 2 3 4 5  
    (B) 1 2 4 5  
    (C) 1 2 3 5  
    (D) 1 3 4 5

22. Which of the following is a wrapper class in Java?
    (A) int  
    (B) char  
    (C) Integer  
    (D) float

23. What will be the output of the following code?

    ```java
    String str = "abcdef";
    System.out.println(str.indexOf('d'));
    ```

    (A) 2  
    (B) 3  
    (C) 4  
    (D) -1

24. Which of the following exceptions is thrown when an array is accessed with an illegal index?
    (A) NullPointerException  
    (B) ArrayIndexOutOfBoundsException  
    (C) IllegalArgumentException  
    (D) IndexOutOfBoundsException

25. What is the output of the following code snippet?

    ```java
    int a = 5;
    int b = 10;
    int result = a > b ? a : b;
    System.out.println(result);
    ```

    (A) 5  
    (B) 10  
    (C) true  
    (D) false

26. Which of the following is not a valid keyword in Java?
    (A) static  
    (B) void  
    (C) private  
    (D) include

27. What is inheritance in Java?
    (A) A mechanism where one class acquires the properties of another class  
    (B) A mechanism where one method acquires the properties of another method  
    (C) A mechanism where one variable acquires the properties of another variable  
    (D) None of the above

28. What will be the output of the following code?

    ```java
    int x = 5;
    int y = 10;
    int z = x * y / x;
    System.out.println(z);
    ```

    (A) 5  
    (B) 10  
    (C) 15  
    (D) 20

29. Which of the following is true about interfaces in Java?
    (A) Interfaces can have method implementations  
    (B) Interfaces can have constructors  
    (C) Interfaces can extend multiple interfaces  
    (D) Interfaces can be instantiated

30. What is the output of the following code snippet?

    ```java
    int i = 0;
    while(i < 5) {
        System.out.print(i + " ");
        i++;
    }
    ```

    (A) 0 1 2 3 4  
    (B) 1 2 3 4 5  
    (C) 0 1 2 3 4 5  
    (D) 1 2 3 4

31. Which of the following is not a feature of object-oriented programming in Java?
    (A) Encapsulation  
    (B) Inheritance  
    (C) Polymorphism  
    (D) Compilation

32. What will be the output of the following code?

    ```java
    int x = 10;
    int y = 0;
    try {
        int z = x / y;
    } catch (ArithmeticException e) {
        System.out.println("Division by zero");
    }
    ```

    (A) 10  
    (B) 0  
    (C) Division by zero  
    (D) ArithmeticException

33. Which of the following is used to find the size of an array in Java?
    (A) size  
    (B) length  
    (C) count  
    (D) getSize

34. What is the purpose of the `super` keyword in Java?
    (A) To refer to the current object  
    (B) To refer to the parent class  
    (C) To refer to the class itself  
    (D) To refer to a static method

35. What will be the output of the following code?

    ```java
    for(int i = 1; i <= 5; i++) {
        if(i == 3) {
            break;
        }
        System.out.print(i + " ");
    }
    ```

    (A) 1 2 3 4 5  
    (B) 1 2  
    (C) 1 2 3  
    (D) 1 2 3 4

36. Which of the following is not a primitive data type in Java?
    (A) int  
    (B) float  
    (C) char  
    (D) String

37. What is the result of the following code snippet?

    ```java
    int[] arr = {1, 2, 3, 4, 5};
    int sum = 0;
    for(int i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    System.out.println(sum);
    ```

    (A) 10  
    (B) 12  
    (C) 15  
    (D) 20

38. What does the following code snippet do?

    ```java
    StringBuilder sb = new StringBuilder("Hello");
    sb.append(" World");
    System.out.println(sb);
    ```

    (A) Prints "Hello"  
    (B) Prints "HelloWorld"  
    (C) Prints "Hello World"  
    (D) Prints "WorldHello"

39. Which of the following is true about abstract classes in Java?
    (A) Abstract classes can be instantiated  
    (B) Abstract classes cannot have abstract methods  
    (C) Abstract classes can have constructors  
    (D) Abstract classes cannot have instance variables

40. What is polymorphism in Java?
    (A) The ability of a variable, function or object to take on multiple forms  
    (B) The ability of a class to extend another class  
    (C) The ability of a method to override another method  
    (D) None of the above

## Section II: Free-Response Questions

### Free-Response Question 1: Methods and Control Structures

#### Problem Statement

Write a class `Statistics` that contains a method to calculate the mean (average) and another method to calculate the median of an array of integers. The method to calculate the mean should take an array of integers as a parameter and return the mean as a double. The method to calculate the median should take an array of integers as a parameter and return the median as a double.

#### Requirements

1. The `mean` method should use a loop to sum the elements of the array and then divide by the number of elements to calculate the mean.
2. The `median` method should sort the array and then find the middle element(s) to calculate the median. If the array has an odd number of elements, the median is the middle element. If the array has an even number of elements, the median is the average of the two middle elements.

Complete the `Statistics` class below.

```java
public class Statistics {

    /** Returns the mean of the elements in the array. */
    public static double mean(int[] numbers) {
        int sum = 0;
        for (int number : numbers) {
            sum += number;
        }
        return (double) sum / numbers.length;
    }

    /** Returns the median of the elements in the array. */
    public static double median(int[] numbers) {
        Arrays.sort(numbers);
        int middle = numbers.length / 2;
        if (numbers.length % 2 == 0) {
            return (numbers[middle - 1] + numbers[middle]) / 2.0;
        } else {
            return numbers[middle];
        }
    }
}
```

### Free-Response Question 2: Class

#### Problem Statement

Write a class `Book` that represents a book in a library. The `Book` class should have instance variables for the title, author, and number of pages. The class should have a constructor to initialize these variables and getter methods to access them. Additionally, the class should have a method `isLongBook` that returns `true` if the book has more than 300 pages, and `false` otherwise.

#### Requirements

1. The class should have appropriate instance variables for the title, author, and number of pages.
2. The constructor should initialize the instance variables with the provided values.
3. The getter methods should return the values of the instance variables.
4. The `isLongBook` method should return `true` if the book has more than 300 pages, and `false` otherwise.

Complete the `Book` class below.

```java
public class Book {
    private String title;
    private String author;
    private int pages;

    /** Constructs a Book object with the specified title, author, and number of pages. */
    public Book(String title, String author, int pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    /** Returns the title of the book. */
    public String getTitle() {
        return title;
    }

    /** Returns the author of the book. */
    public String getAuthor() {
        return author;
    }

    /** Returns the number of pages in the book. */
    public int getPages() {
        return pages;
    }

    /** Returns true if the book has more than 300 pages, false otherwise. */
    public boolean isLongBook() {
        return pages > 300;
    }
}
```

### Free-Response Question 3: Array/ArrayList

#### Problem Statement

Write a class `GradeBook` that maintains a list of student names and their corresponding grades. The `GradeBook` class should have methods to add a student and their grade, calculate the average grade, and find the highest grade. Use an ArrayList to store the student names and grades.

#### Requirements

1. The class should use an ArrayList to store the student names and grades.
2. The `addStudent` method should add a student name and grade to the ArrayList.
3. The `getAverageGrade` method should calculate and return the average grade.
4. The `getHighestGrade` method should find and return the highest grade.

Complete the `GradeBook` class below.

```java
import java.util.ArrayList;

public class GradeBook {
    private ArrayList<String> studentNames;
    private ArrayList<Integer> studentGrades;

    /** Constructs a GradeBook object. */
    public GradeBook() {
        studentNames = new ArrayList<>();
        studentGrades = new ArrayList<>();
    }

    /** Adds a student and their grade to the grade book. */
    public void addStudent(String name, int grade) {
        studentNames.add(name);
        studentGrades.add(grade);
    }

    /** Calculates and returns the average grade. */
    public double getAverageGrade() {
        int sum = 0;
        for (int grade : studentGrades) {
            sum += grade;
        }
        return (double) sum / studentGrades.size();
    }

    /** Finds and returns the highest grade. */
    public int getHighestGrade() {
        int highest = studentGrades.get(0);
        for (int grade : studentGrades) {
            if (grade > highest) {
                highest = grade;
            }
        }
        return highest;
    }
}
```

### Free-Response Question 4: 2D Array

#### Problem Statement

Write a class `Matrix` that represents a 2D array of integers. The class should have methods to initialize the matrix, set a value at a specific position, get a value from a specific position, and calculate the sum of all elements in the matrix.

#### Requirements

1. The class should have a 2D array of integers as its instance variable.
2. The constructor should initialize the 2D array with the specified number of rows and columns.
3. The `setValue` method should set a value at a specific position in the matrix.
4. The `getValue` method should get a value from a specific position in the matrix.
5. The `sum` method should calculate and return the sum of all elements in the matrix.

Complete the `Matrix` class below.

```java
public class Matrix {
    private int[][] matrix;

    /** Constructs a Matrix object with the specified number of rows and columns. */
    public Matrix(int rows, int cols) {
        matrix = new int[rows][cols];
    }

    /** Sets the value at the specified row and column. */
    public void setValue(int row, int col, int value) {
        matrix[row][col] = value;
    }

    /** Gets the value from the specified row and column. */
    public int
```

# AP Computer Science A Exam B

## Section I: Multiple-Choice Questions

1. What is the output of the following code snippet?

   ```java
   int x = 5;
   int y = 3;
   System.out.println(x % y);
   ```

   (A) 2  
   (B) 1  
   (C) 5  
   (D) 3

2. Which of the following is a valid declaration of a double variable in Java?
   (A) double x = 5.0;  
   (B) double x = 5;  
   (C) double x = "5.0";  
   (D) double x = new double(5.0);

3. What will be the output of the following code?

   ```java
   int[] arr = {1, 2, 3, 4, 5};
   System.out.println(arr[1] + arr[3]);
   ```

   (A) 3  
   (B) 5  
   (C) 6  
   (D) 7

4. Which of the following is not a primitive data type in Java?
   (A) int  
   (B) byte  
   (C) char  
   (D) String

5. What does the following code print?

   ```java
   int x = 10;
   if (x > 5) {
       System.out.println("A");
   } else {
       System.out.println("B");
   }
   ```

   (A) A  
   (B) B  
   (C) A and B  
   (D) Nothing

6. What is the purpose of the `return` statement in Java?
   (A) To exit a loop  
   (B) To exit a method and return a value  
   (C) To skip the current iteration of a loop  
   (D) To print a value

7. What will be the output of the following code?

   ```java
   String str = "Hello";
   System.out.println(str.length());
   ```

   (A) 4  
   (B) 5  
   (C) 6  
   (D) 0

8. Which of the following is the correct way to create an object of the `Dog` class?
   (A) Dog d = new Dog();  
   (B) Dog d;  
   (C) new Dog d = Dog();  
   (D) Dog d = Dog();

9. What is the value of `x` after the following code executes?

   ```java
   int x = 5;
   x += 3;
   ```

   (A) 3  
   (B) 5  
   (C) 8  
   (D) 15

10. Which of the following is the correct syntax for a for loop in Java?
    (A) `for(int i = 0; i < 10; i++) { // code }`  
    (B) `for(int i = 0; i < 10; i++) // code`  
    (C) `for(int i = 0; i < 10; ++i) { // code }`  
    (D) Both A and C

11. What does the following code print?

    ```java
    int x = 3;
    switch (x) {
        case 1:
            System.out.println("One");
            break;
        case 2:
            System.out.println("Two");
            break;
        case 3:
            System.out.println("Three");
            break;
        default:
            System.out.println("Default");
    }
    ```

    (A) One  
    (B) Two  
    (C) Three  
    (D) Default

12. Which of the following keywords is used to create a subclass in Java?
    (A) super  
    (B) extends  
    (C) implements  
    (D) this

13. What is the output of the following code snippet?

    ```java
    int x = 5;
    int y = 10;
    System.out.println(x > y ? "X" : "Y");
    ```

    (A) X  
    (B) Y  
    (C) 5  
    (D) 10

14. Which of the following is not a valid loop in Java?
    (A) for  
    (B) while  
    (C) do-while  
    (D) repeat-until

15. What will be the output of the following code?

    ```java
    System.out.println(Math.max(3, 7));
    ```

    (A) 3  
    (B) 7  
    (C) 10  
    (D) Math.max(3, 7)

16. Which of the following methods is used to compare two strings in Java?
    (A) `compareTo()`  
    (B) `equals()`  
    (C) `==`  
    (D) Both A and B

17. What does the following code print?

    ```java
    int[] arr = {1, 2, 3, 4, 5};
    for (int i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            System.out.print(arr[i] + " ");
        }
    }
    ```

    (A) 1 2 3 4 5  
    (B) 2 4  
    (C) 1 3 5  
    (D) 0 2 4

18. Which of the following is a valid declaration of an array in Java?
    (A) int arr[] = new int[5];  
    (B) int[] arr = new int[5];  
    (C) int arr[] = {1, 2, 3, 4, 5};  
    (D) All of the above

19. What is the result of the following code snippet?

    ```java
    String str = "Java";
    str = str.concat(" Programming");
    System.out.println(str);
    ```

    (A) Java  
    (B) Java Programming  
    (C) Programming  
    (D) JavaProgramming

20. What is the output of the following code?

    ```java
    int x = 5;
    int y = 10;
    System.out.println(x + ", " + y);
    ```

    (A) 5, 10  
    (B) 510  
    (C) 5 10  
    (D) 5 + 10

21. Which of the following is true about method overloading in Java?
    (A) Methods must have the same name but different parameters  
    (B) Methods must have different names but the same parameters  
    (C) Methods must have the same name and the same parameters  
    (D) Methods must have different names and different parameters

22. What is the output of the following code snippet?

    ```java
    for (int i = 1; i <= 5; i++) {
        if (i == 3) {
            break;
        }
        System.out.print(i + " ");
    }
    ```

    (A) 1 2 3 4 5  
    (B) 1 2  
    (C) 1 2 3  
    (D) 1 3 5

23. Which of the following is not a feature of the Java programming language?
    (A) Platform independence  
    (B) Object-oriented  
    (C) Pointer manipulation  
    (D) Automatic garbage collection

24. What is the result of the following code snippet?

    ```java
    int x = 5;
    while (x > 0) {
        System.out.print(x + " ");
        x--;
    }
    ```

    (A) 5 4 3 2 1  
    (B) 5 4 3 2 1 0  
    (C) 4 3 2 1 0  
    (D) 1 2 3 4 5

25. Which of the following is used to generate random numbers in Java?
    (A) Random class  
    (B) Math.random()  
    (C) Both A and B  
    (D) None of the above

26. What is the output of the following code?

    ```java
    int x = 10;
    int y = 2;
    System.out.println(x / y);
    ```

    (A) 5  
    (B) 10  
    (C) 2  
    (D) 20

27. What will be the output of the following code?

    ```java
    String str = "Java";
    System.out.println(str.charAt(2));
    ```

    (A) J  
    (B) a  
    (C) v  
    (D) A

28. Which of the following is not a valid access modifier in Java?
    (A) public  
    (B) private  
    (C) protected  
    (D) static

29. What is the result of the following code snippet?

    ```java
    int x = 5;
    int y = 10;
    int z = x / y;
    System.out.println(z);
    ```

    (A) 0  
    (B) 0.5  
    (C) 5  
    (D) 10

30. What does the following code print?

    ```java
    int x = 0;
    do {
        System.out.print(x + " ");
        x++;
    } while (x < 5);
    ```

    (A) 0 1 2 3 4  
    (B) 1 2 3 4 5  
    (C) 0 1 2 3 4 5  
    (D) 1 2 3 4

31. Which of the following is a valid declaration of a char variable in Java?
    (A) `char c = 'A';`  
    (B) `char c = "A";`  
    (C) `char c = A;`  
    (D) `char c = 'A';`

32. What is the output of the following code?

    ```java
    System.out.println(Math.sqrt(16));
    ```

    (A) 2  
    (B) 4  
    (C) 8  
    (D) 16

33. Which of the following is used to create an object in Java?
    (A) new  
    (B) create  
    (C) object  
    (D) instance

34. What is the result of the following code snippet?

    ```java
    int x = 5;
    int y = 3;
    x %= y;
    System.out.println(x);
    ```

    (A) 2  
    (B) 3  
    (C) 5  
    (D) 8

35. What will be the output of the following code?

    ```java
    System.out.println(Math.pow(2, 3));
    ```

    (A) 6  
    (B) 8  
    (C) 9  
    (D) 16

36. Which of the following is true about constructors in Java?
    (A) Constructors cannot have a return type  
    (B) Constructors must have the same name as the class  
    (C) Constructors are called when an object is created  
    (D) All of the above

37. What is the output of the following code?

    ```java
    String str = "Hello";
    str = str.toUpperCase();
    System.out.println(str);
    ```

    (A) hello  
    (B) HELLO  
    (C) Hello  
    (D) hELLO

38. Which of the following is used to handle exceptions in Java?
    (A) try-catch block  
    (B) if-else statement  
    (C) switch statement  
    (D) for loop

39. What is the result of the following code snippet?

    ```java
    int x = 5;
    int y = 3;
    int z = x * y + y;
    System.out.println(z);
    ```

    (A) 15  
    (B) 18  
    (C) 20  
    (D) 10

40. What is the output of the following code?
    ```java
    int x = 5;
    int y = 3;
    int z = x % y;
    System.out.println(z);
    ```
    (A) 1  
    (B) 2  
    (C) 3  
    (D) 5

## Section II: Free-Response Questions

### Free-Response Question 1: Methods and Control Structures

#### Problem Statement

Write a class `EvenOddChecker` that contains a method to check if a number is even or odd. The method should take an integer as a parameter and return `true` if the number is even and `false` if the number is odd. Additionally, write a method to print all even numbers from 1 to a given number `n`.

#### Requirements

1. The `isEven` method should check if a number is even and return `true` if it is, otherwise return `false`.
2. The `printEvenNumbers` method should print all even numbers from 1 to `n` using a loop.

Complete the `EvenOddChecker` class below.

```java
public class EvenOddChecker {

    /** Returns true if the number is even, false if it is odd. */
    public static boolean isEven(int number) {
        return number % 2 == 0;
    }

    /** Prints all even numbers from 1 to n. */
    public static void printEvenNumbers(int n) {
        for (int i = 1; i <= n; i++) {
            if (isEven(i)) {
                System.out.print(i + " ");
            }
        }
    }
}
```

### Free-Response Question 2: Class

#### Problem Statement

Write a class `Person` that represents a person with a name and age. The `Person` class should have a constructor to initialize the name and age, getter methods to access the name and age, and a method `isAdult` that returns `true` if the person is 18 years old or older, and `false` otherwise.

#### Requirements

1. The class should have appropriate instance variables for the name and age.
2. The constructor should initialize the instance variables with the provided values.
3. The getter methods should return the values of the instance variables.
4. The `isAdult` method should return `true` if the person is 18 years old or older, and `false` otherwise.

Complete the `Person` class below.

```java
public class Person {
    private String name;
    private int age;

    /** Constructs a Person object with the specified name and age. */
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    /** Returns the name of the person. */
    public String getName() {
        return name;
    }

    /** Returns the age of the person. */
    public int getAge() {
        return age;
    }

    /** Returns true if the person is 18 years old or older, false otherwise. */
    public boolean isAdult() {
        return age >= 18;
    }
}
```

### Free-Response Question 3: Array/ArrayList

#### Problem Statement

Write a class `StudentGrades` that maintains a list of student names and their corresponding grades. The `StudentGrades` class should have methods to add a student and their grade, calculate the average grade, and find the highest grade. Use an ArrayList to store the student names and grades.

#### Requirements

1. The class should use an ArrayList to store the student names and grades.
2. The `addStudent` method should add a student name and grade to the ArrayList.
3. The `getAverageGrade` method should calculate and return the average grade.
4. The `getHighestGrade` method should find and return the highest grade.

Complete the `StudentGrades` class below.

```java
import java.util.ArrayList;

public class StudentGrades {
    private ArrayList<String> studentNames;
    private ArrayList<Integer> studentGrades;

    /** Constructs a StudentGrades object. */
    public StudentGrades() {
        studentNames = new ArrayList<>();
        studentGrades = new ArrayList<>();
    }

    /** Adds a student and their grade to the grade book. */
    public void addStudent(String name, int grade) {
        studentNames.add(name);
        studentGrades.add(grade);
    }

    /** Calculates and returns the average grade. */
    public double getAverageGrade() {
        int sum = 0;
        for (int grade : studentGrades) {
            sum += grade;
        }
        return (double) sum / studentGrades.size();
    }

    /** Finds and returns the highest grade. */
    public int getHighestGrade() {
        int highest = studentGrades.get(0);
        for (int grade : studentGrades) {
            if (grade > highest) {
                highest = grade;
            }
        }
        return highest;
    }
}
```

### Free-Response Question 4: 2D Array

#### Problem Statement

Write a class `Grid` that represents a 2D array of integers. The class should have methods to initialize the grid, set a value at a specific position, get a value from a specific position, and calculate the sum of all elements in the grid.

#### Requirements

1. The class should have a 2D array of integers as its instance variable.
2. The constructor should initialize the 2D array with the specified number of rows and columns.
3. The `setValue` method should set a value at a specific position in the grid.
4. The `getValue` method should get a value from a specific position in the grid.
5. The `sum` method should calculate and return the sum of all elements in the grid.

Complete the `Grid` class below.

```java
public class Grid {
    private int[][] grid;

    /** Constructs a Grid object with the specified number of rows and columns. */
    public Grid(int rows, int cols) {
        grid = new int[rows][cols];
    }

    /** Sets the value at the specified row and column. */
    public void setValue(int row, int col, int value) {
        grid[row][col] = value;
    }

    /** Gets the value from the specified row and column. */
    public int getValue(int row, int col) {
        return grid[row][col];
    }

    /** Calculates and returns the sum of all elements in the grid. */
    public int sum() {
        int total = 0;
        for (int[] row : grid
```
