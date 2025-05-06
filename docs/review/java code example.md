# Java code example

当然可以！以下是几个适合初学者学习 Java 的示例代码，涵盖基础概念和常见问题。每个示例都附有详细注释，帮助学生理解代码的逻辑。

## Basic

### **1. 基础：打印“Hello, World!”**

```java
public class HelloWorld {
    public static void main(String[] args) {
        // 打印输出
        System.out.println("Hello, World!");
    }
}
```

**说明**：

- 这是 Java 的入门程序，帮助学生理解程序的基本结构。
- `public class HelloWorld`：定义一个类，类名必须与文件名一致。
- `public static void main(String[] args)`：程序的主入口。

---

### **2. 变量与数据类型**

```java
public class VariablesExample {
    public static void main(String[] args) {
        // 定义变量
        int number = 10;          // 整数
        double pi = 3.14;         // 浮点数
        char letter = 'A';        // 字符
        String name = "Java";     // 字符串
        boolean isTrue = true;    // 布尔值

        // 打印变量
        System.out.println("Number: " + number);
        System.out.println("Pi: " + pi);
        System.out.println("Letter: " + letter);
        System.out.println("Name: " + name);
        System.out.println("Is True: " + isTrue);
    }
}
```

**说明**：

- 展示 Java 中的基本数据类型及其用法。
- 强调变量声明和初始化的语法。

---

### **3. 条件语句（if-else）**

```java
public class IfElseExample {
    public static void main(String[] args) {
        int number = 7;

        // 判断数字是奇数还是偶数
        if (number % 2 == 0) {
            System.out.println(number + " 是偶数。");
        } else {
            System.out.println(number + " 是奇数。");
        }
    }
}
```

**说明**：

- 演示如何使用`if-else`语句进行条件判断。
- 学生可以修改`number`的值，观察输出结果。

---

### **4. 循环（for 循环）**

```java
public class ForLoopExample {
    public static void main(String[] args) {
        // 打印1到10的数字
        for (int i = 1; i <= 10; i++) {
            System.out.println(i);
        }
    }
}
```

**说明**：

- 展示`for`循环的基本用法。
- 学生可以尝试修改循环条件，例如打印偶数或倒序输出。

---

### **5. 数组**

```java
public class ArrayExample {
    public static void main(String[] args) {
        // 定义一个整数数组
        int[] numbers = {10, 20, 30, 40, 50};

        // 遍历数组并打印每个元素
        for (int i = 0; i < numbers.length; i++) {
            System.out.println("元素 " + i + ": " + numbers[i]);
        }
    }
}
```

**说明**：

- 展示如何定义和遍历数组。
- 学生可以尝试修改数组内容或长度。

---

### **6. 方法（函数）**

```java
public class MethodExample {
    public static void main(String[] args) {
        int result = add(5, 3);  // 调用add方法
        System.out.println("5 + 3 = " + result);
    }

    // 定义一个方法，计算两个整数的和
    public static int add(int a, int b) {
        return a + b;
    }
}
```

**说明**：

- 展示如何定义和调用方法。
- 学生可以尝试编写其他方法，例如计算乘积或差。

---

### **7. 面向对象编程（类与对象）**

```java
// 定义一个类
class Dog {
    // 属性
    String name;
    int age;

    // 方法
    void bark() {
        System.out.println(name + " 正在汪汪叫！");
    }
}

public class OOPExample {
    public static void main(String[] args) {
        // 创建对象
        Dog myDog = new Dog();
        myDog.name = "旺财";
        myDog.age = 3;

        // 调用方法
        myDog.bark();
    }
}
```

**说明**：

- 展示面向对象编程的基本概念，包括类、对象、属性和方法。
- 学生可以尝试添加更多属性和方法。

---

### **8. 异常处理**

```java
public class ExceptionExample {
    public static void main(String[] args) {
        try {
            int result = 10 / 0;  // 除以零会抛出异常
            System.out.println("结果: " + result);
        } catch (ArithmeticException e) {
            System.out.println("发生错误: " + e.getMessage());
        } finally {
            System.out.println("程序执行完毕。");
        }
    }
}
```

**说明**：

- 展示如何使用`try-catch-finally`处理异常。
- 学生可以尝试修改代码，观察不同异常的处理方式。

---

### **9. 字符串操作**

```java
public class StringExample {
    public static void main(String[] args) {
        String text = "Hello, Java!";

        // 获取字符串长度
        System.out.println("长度: " + text.length());

        // 提取子字符串
        System.out.println("子字符串: " + text.substring(7));

        // 转换为大写
        System.out.println("大写: " + text.toUpperCase());

        // 检查是否包含某个字符串
        System.out.println("包含 'Java' 吗？ " + text.contains("Java"));
    }
}
```

**说明**：

- 展示常见的字符串操作方法。
- 学生可以尝试其他字符串操作，例如替换或分割。

---

### **10. 文件读写**

```java
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

public class FileExample {
    public static void main(String[] args) {
        try {
            // 创建文件
            File file = new File("example.txt");
            if (file.createNewFile()) {
                System.out.println("文件创建成功: " + file.getName());
            } else {
                System.out.println("文件已存在。");
            }

            // 写入文件
            FileWriter writer = new FileWriter(file);
            writer.write("这是一个示例文件。");
            writer.close();
            System.out.println("文件写入成功。");
        } catch (IOException e) {
            System.out.println("发生错误: " + e.getMessage());
        }
    }
}
```

**说明**：

- 展示如何创建、写入文件。
- 学生可以尝试读取文件内容。

---

### **总结**

这些示例代码涵盖了 Java 的基础知识和常见操作，适合初学者学习和练习。通过逐步增加复杂度，学生可以逐步掌握编程技能。记得鼓励学生动手实践，并尝试修改代码以观察不同结果！

当然！以下是几个基本算法的 Java 实现示例，适合初学者学习和理解算法的基本原理。每个示例都附有详细注释，帮助学生理解代码的逻辑。

---

## Sort and Search

### **1. 线性查找**

```java
public class LinearSearch {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};
        int target = 30; // 要查找的目标值
        int index = linearSearch(arr, target);

        if (index != -1) {
            System.out.println("找到目标值 " + target + "，索引为 " + index);
        } else {
            System.out.println("未找到目标值 " + target);
        }
    }

    // 线性查找算法
    public static int linearSearch(int[] arr, int target) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == target) {
                return i; // 返回目标值的索引
            }
        }
        return -1; // 未找到目标值
    }
}
```

**说明**：

- 线性查找是最简单的查找算法，逐个遍历数组元素，直到找到目标值。

---

### **2. 二分查找**

```java
public class BinarySearch {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50}; // 必须是有序数组
        int target = 30; // 要查找的目标值
        int index = binarySearch(arr, target);

        if (index != -1) {
            System.out.println("找到目标值 " + target + "，索引为 " + index);
        } else {
            System.out.println("未找到目标值 " + target);
        }
    }

    // 二分查找算法
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2; // 计算中间索引
            if (arr[mid] == target) {
                return mid; // 找到目标值
            } else if (arr[mid] < target) {
                left = mid + 1; // 目标值在右半部分
            } else {
                right = mid - 1; // 目标值在左半部分
            }
        }
        return -1; // 未找到目标值
    }
}
```

**说明**：

- 二分查找适用于有序数组，通过不断缩小查找范围来提高效率。

---

### **3. 冒泡排序**

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] arr = {64, 34, 25, 12, 22, 11, 90};
        bubbleSort(arr);
        System.out.println("排序后的数组:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // 冒泡排序算法
    public static void bubbleSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // 交换相邻元素
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
```

**说明**：

- 冒泡排序通过多次遍历数组，每次将最大的元素“冒泡”到数组末尾。

---

### **4. 选择排序**

```java
public class SelectionSort {
    public static void main(String[] args) {
        int[] arr = {64, 25, 12, 22, 11};
        selectionSort(arr);
        System.out.println("排序后的数组:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // 选择排序算法
    public static void selectionSort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // 找到最小元素的索引
                }
            }
            // 交换最小元素和当前元素
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}
```

**说明**：

- 选择排序每次从未排序部分选择最小的元素，放到已排序部分的末尾。

---

### **5. 插入排序**

```java
public class InsertionSort {
    public static void main(String[] args) {
        int[] arr = {12, 11, 13, 5, 6};
        insertionSort(arr);
        System.out.println("排序后的数组:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // 插入排序算法
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; i++) {
            int key = arr[i]; // 当前要插入的元素
            int j = i - 1;

            // 将比key大的元素向后移动
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j--;
            }
            arr[j + 1] = key; // 插入key
        }
    }
}
```

**说明**：

- 插入排序通过将未排序部分的元素插入到已排序部分的正确位置。

---

### **6. 递归：计算阶乘**

```java
public class Factorial {
    public static void main(String[] args) {
        int n = 5;
        System.out.println(n + " 的阶乘是 " + factorial(n));
    }

    // 递归计算阶乘
    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1;
        }
        return n * factorial(n - 1);
    }
}
```

**说明**：

- 递归是一种通过函数调用自身来解决问题的方法。

---

### **7. 斐波那契数列**

```java
public class Fibonacci {
    public static void main(String[] args) {
        int n = 10; // 计算前10个斐波那契数
        System.out.println("斐波那契数列:");
        for (int i = 0; i < n; i++) {
            System.out.print(fibonacci(i) + " ");
        }
    }

    // 递归计算斐波那契数列
    public static int fibonacci(int n) {
        if (n == 0) {
            return 0;
        } else if (n == 1) {
            return 1;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
```

**说明**：

- 斐波那契数列是经典的递归问题，每个数是前两个数的和。

---

### **8. 快速排序**

```java
public class QuickSort {
    public static void main(String[] args) {
        int[] arr = {10, 7, 8, 9, 1, 5};
        quickSort(arr, 0, arr.length - 1);
        System.out.println("排序后的数组:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // 快速排序算法
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high); // 分区操作
            quickSort(arr, low, pi - 1);  // 递归排序左半部分
            quickSort(arr, pi + 1, high); // 递归排序右半部分
        }
    }

    // 分区操作
    public static int partition(int[] arr, int low, int high) {
        int pivot = arr[high]; // 选择最后一个元素作为基准
        int i = low - 1; // 较小元素的索引

        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // 交换arr[i]和arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        // 交换arr[i+1]和基准元素
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1;
    }
}
```

**说明**：

- 快速排序是一种高效的排序算法，通过分治法将数组分为两部分递归排序。

---

### **总结**

这些基本算法的代码示例涵盖了查找、排序和递归等常见算法，适合初学者学习和练习。通过理解这些算法的原理并动手实践，学生可以逐步掌握编程和算法设计的基本技能。

好的！以下是一些更简单的算法示例，比如 **校验和（Checksum）**、**求最大值/最小值**、**计算平均值** 等。这些算法非常适合初学者理解基础编程逻辑。

---

## Checksum

### **1. 校验和（Checksum）**

校验和是一种简单的错误检测方法，通常用于验证数据的完整性。以下是一个计算整数数组校验和的示例：

```java
public class ChecksumExample {
    public static void main(String[] args) {
        int[] data = {10, 20, 30, 40, 50}; // 示例数据
        int checksum = calculateChecksum(data);
        System.out.println("校验和: " + checksum);
    }

    // 计算校验和
    public static int calculateChecksum(int[] data) {
        int sum = 0;
        for (int num : data) {
            sum += num; // 累加数组中的所有元素
        }
        return sum;
    }
}
```

**说明**：

- 校验和是数组中所有元素的总和。
- 学生可以尝试修改数组内容，观察校验和的变化。

---

### **2. 求最大值和最小值**

```java
public class MaxMinExample {
    public static void main(String[] args) {
        int[] numbers = {5, 3, 9, 1, 7}; // 示例数组
        int max = findMax(numbers);
        int min = findMin(numbers);
        System.out.println("最大值: " + max);
        System.out.println("最小值: " + min);
    }

    // 求最大值
    public static int findMax(int[] arr) {
        int max = arr[0]; // 假设第一个元素是最大值
        for (int num : arr) {
            if (num > max) {
                max = num; // 更新最大值
            }
        }
        return max;
    }

    // 求最小值
    public static int findMin(int[] arr) {
        int min = arr[0]; // 假设第一个元素是最小值
        for (int num : arr) {
            if (num < min) {
                min = num; // 更新最小值
            }
        }
        return min;
    }
}
```

**说明**：

- 通过遍历数组，找到最大值和最小值。
- 学生可以尝试用更复杂的数组测试代码。

---

### **3. 计算平均值**

```java
public class AverageExample {
    public static void main(String[] args) {
        int[] numbers = {10, 20, 30, 40, 50}; // 示例数组
        double average = calculateAverage(numbers);
        System.out.println("平均值: " + average);
    }

    // 计算平均值
    public static double calculateAverage(int[] arr) {
        int sum = 0;
        for (int num : arr) {
            sum += num; // 累加数组中的所有元素
        }
        return (double) sum / arr.length; // 计算平均值
    }
}
```

**说明**：

- 平均值是数组中所有元素的总和除以元素个数。
- 学生可以尝试用浮点数数组计算平均值。

---

### **4. 判断素数**

```java
public class PrimeCheck {
    public static void main(String[] args) {
        int number = 29; // 要检查的数字
        if (isPrime(number)) {
            System.out.println(number + " 是素数。");
        } else {
            System.out.println(number + " 不是素数。");
        }
    }

    // 判断一个数是否是素数
    public static boolean isPrime(int num) {
        if (num <= 1) {
            return false; // 小于等于1的数不是素数
        }
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                return false; // 如果能被整除，则不是素数
            }
        }
        return true; // 否则是素数
    }
}
```

**说明**：

- 素数是只能被 1 和它本身整除的数。
- 学生可以尝试输入不同的数字测试代码。

---

### **5. 反转数组**

```java
public class ReverseArray {
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5}; // 示例数组
        reverseArray(arr);
        System.out.println("反转后的数组:");
        for (int num : arr) {
            System.out.print(num + " ");
        }
    }

    // 反转数组
    public static void reverseArray(int[] arr) {
        int left = 0;
        int right = arr.length - 1;
        while (left < right) {
            // 交换左右两端的元素
            int temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
}
```

**说明**：

- 通过双指针法反转数组。
- 学生可以尝试用字符串或更长的数组测试代码。

---

### **6. 计算阶乘（非递归）**

```java
public class Factorial {
    public static void main(String[] args) {
        int n = 5; // 计算5的阶乘
        int result = factorial(n);
        System.out.println(n + " 的阶乘是 " + result);
    }

    // 计算阶乘
    public static int factorial(int n) {
        int result = 1;
        for (int i = 1; i <= n; i++) {
            result *= i; // 累乘
        }
        return result;
    }
}
```

**说明**：

- 阶乘是 1 到 n 所有整数的乘积。
- 学生可以尝试用更大的数字测试代码。

---

### **7. 判断回文数**

```java
public class PalindromeCheck {
    public static void main(String[] args) {
        int number = 12321; // 要检查的数字
        if (isPalindrome(number)) {
            System.out.println(number + " 是回文数。");
        } else {
            System.out.println(number + " 不是回文数。");
        }
    }

    // 判断一个数是否是回文数
    public static boolean isPalindrome(int num) {
        int original = num;
        int reversed = 0;
        while (num > 0) {
            int digit = num % 10; // 获取最后一位数字
            reversed = reversed * 10 + digit; // 反转数字
            num /= 10; // 去掉最后一位
        }
        return original == reversed; // 判断是否相等
    }
}
```

**说明**：

- 回文数是指正序和倒序相同的数。
- 学生可以尝试用字符串实现回文检查。

---

### **总结**

这些简单的算法示例涵盖了常见的编程任务，如校验和、最大值/最小值、平均值、素数判断、数组反转等。通过这些例子，学生可以逐步掌握基本的编程逻辑和算法思想。记得鼓励学生动手实践，并尝试修改代码以观察不同结果！
