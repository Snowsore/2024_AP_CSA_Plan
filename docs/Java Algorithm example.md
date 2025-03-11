# Java Algorithm Examples

## Selection Sort Algorithm

Selection Sort is an in-place comparison sorting algorithm. It has an O(n^2) time complexity, making it inefficient on large lists. The algorithm divides the input list into two parts: the sublist of items already sorted, which is built up from left to right, and the sublist of items remaining to be sorted that occupy the rest of the list. Initially, the sorted sublist is empty, and the unsorted sublist is the entire input list. The algorithm proceeds by finding the smallest (or largest, depending on the sorting order) element from the unsorted sublist, swapping it with the leftmost unsorted element (putting it in sorted order), and moving the sublist boundaries one element to the right.

### Example

Let's consider the Selection Sort algorithm with an initial array: [3, 2, 4, 5, 6]

1. **First Iteration:**

   - Initial array: [3, 2, 4, 5, 6]
   - Find the minimum element (2) and swap it with the first element (3).
   - Array after the first iteration: [2, 3, 4, 5, 6]

2. **Second Iteration:**

   - Array: [2, 3, 4, 5, 6]
   - The next minimum element (3) is already in the correct position.
   - Array remains unchanged: [2, 3, 4, 5, 6]

3. **Third Iteration:**

   - Array: [2, 3, 4, 5, 6]
   - The next minimum element (4) is already in the correct position.
   - Array remains unchanged: [2, 3, 4, 5, 6]

4. **Fourth Iteration:**
   - Array: [2, 3, 4, 5, 6]
   - The next minimum element (5) is already in the correct position.
   - Array remains unchanged: [2, 3, 4, 5, 6]

After these iterations, the entire array is sorted.

```java
public class SelectionSort {

    // Method to perform selection sort on an array
    public static void selectionSort(int[] arr) {
        // Iterate over the array except the last element
        for (int i = 0; i < arr.length - 1; i++) {
            int minIndex = i; // Assume the current element is the minimum
            // Iterate over the unsorted subarray to find the actual minimum element
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] < arr[minIndex]) {
                    minIndex = j; // Update the index of the minimum element
                }
            }
            // Swap the found minimum element with the first element of the unsorted subarray
            int temp = arr[minIndex];
            arr[minIndex] = arr[i];
            arr[i] = temp;
        }
    }
}
```

## Insertion Sort Algorithm

Insertion Sort is a simple and efficient comparison sort. It works similarly to the way you sort playing cards in your hands. The array is virtually split into a sorted and an unsorted part. Values from the unsorted part are picked and placed at the correct position in the sorted part. The algorithm iterates over the array, growing the sorted list behind it. At each array-position, it checks the value there against the largest value in the sorted list (which happens to be next to it, in the previous array-position checked). If larger, it leaves the element in place and moves to the next. If smaller, it finds the correct position within the sorted list, shifts all the larger values up to make a space, and inserts it there.

### Example

Let's consider the Insertion Sort algorithm with an initial array: [5, 3, 2, 6, 4]

1. **First Iteration:**

   - Initial array: [5, 3, 2, 6, 4]
   - Take the second element (3) and insert it into the sorted sublist [5].
   - Array after the first iteration: [3, 5, 2, 6, 4]

2. **Second Iteration:**

   - Array: [3, 5, 2, 6, 4]
   - Take the third element (2) and insert it into the sorted sublist [3, 5].
   - Array after the second iteration: [2, 3, 5, 6, 4]

3. **Third Iteration:**

   - Array: [2, 3, 5, 6, 4]
   - Take the fourth element (6) and insert it into the sorted sublist [2, 3, 5].
   - Array remains unchanged after the third iteration: [2, 3, 5, 6, 4]

4. **Fourth Iteration:**
   - Array: [2, 3, 5, 6, 4]
   - Take the fifth element (4) and insert it into the sorted sublist [2, 3, 5, 6].
   - Array after the fourth iteration: [2, 3, 4, 5, 6]

After these iterations, the entire array is sorted.

```java
public class InsertionSort {

    // Method to perform insertion sort on an array
    public static void insertionSort(int[] arr) {
        // Iterate from the second element to the end of the array
        for (int i = 1; i < arr.length; i++) {
            int key = arr[i]; // Store the current element as key
            int j = i - 1;

            // Move elements of arr[0..i-1], that are greater than key,
            // to one position ahead of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            // Place the key at its correct position
            arr[j + 1] = key;
        }
    }
}
```

## Merge Sort Algorithm

Merge Sort is an efficient, stable, comparison-based, divide and conquer sorting algorithm. Most implementations produce a stable sort, meaning that the implementation preserves the input order of equal elements in the sorted output. It works by recursively dividing the unsorted list into n sublists, each containing one element (a list of one element is considered sorted), then repeatedly merges sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list. Merge Sort has an O(n log n) time complexity.

### Example

Initial array: [3, 2, 4, 5, 6]

1. Divide the array into two halves: [3, 2, 4] and [5, 6]
2. Recursively divide the halves until each sublist contains one element: [3], [2], [4], [5], [6]
3. Merge the sublists to produce sorted sublists: [2, 3, 4], [5, 6]
4. Merge the sorted sublists to produce the final sorted array: [2, 3, 4, 5, 6]

```java
public class MergeSort {
    public static void mergeSort(int[] arr, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(arr, left, mid);
            mergeSort(arr, mid + 1, right);
            merge(arr, left, mid, right);
        }
    }

    private static void merge(int[] arr, int left, int mid, int right) {
        int n1 = mid - left + 1;
        int n2 = right - mid;

        int[] L = new int[n1];
        int[] R = new int[n2];

        for (int i = 0; i < n1; i++) {
            L[i] = arr[left + i];
        }
        for (int j = 0; j < n2; j++) {
            R[j] = arr[mid + 1 + j];
        }

        int i = 0, j = 0;
        int k = left;
        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            } else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }
}
```

## Quick Sort Algorithm

Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively. This can be done in-place, requiring small additional amounts of memory to perform the sorting. Quick Sort has an average-case time complexity of O(n log n), but a worst-case time complexity of O(n^2).

### Example

Initial array: [3, 2, 4, 5, 6]

1. Choose a pivot element (e.g., 6) and partition the array into elements less than the pivot and elements greater than the pivot: [3, 2, 4, 5] and [6]
2. Recursively apply the same process to the sub-arrays: [3, 2, 4, 5] -> [2, 3, 4, 5]
3. Combine the sorted sub-arrays and the pivot to produce the final sorted array: [2, 3, 4, 5, 6]

```java
public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            int pi = partition(arr, low, high);
            quickSort(arr, low, pi - 1);
            quickSort(arr, pi + 1, high);
        }
    }

    private static int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = (low - 1);
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;
        return i + 1;
    }
}
```

## Sequential Search Algorithm

Sequential Search, also known as Linear Search, is the simplest search algorithm. It works by iterating through each element of the array and comparing it with the target value. If the target value is found, the index of the target is returned. If the target value is not found, the algorithm returns -1. The time complexity of Sequential Search is O(n), where n is the number of elements in the array.

### Example

Initial array: [3, 2, 4, 5, 6]
Target value: 4

1. Compare the target value with each element in the array: 3, 2, 4
2. The target value is found at index 2.

```java
public class SequentialSearch {
    public static int sequentialSearch(int[] arr, int x) {
        for (int i = 0; i < arr.length; i++) {
            if (arr[i] == x) {
                return i;
            }
        }
        return -1;
    }
}
```

## Binary Search Algorithm

Binary Search is an efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item, until you've narrowed down the possible locations to just one. Binary Search requires a sorted array to function correctly. The time complexity of Binary Search is O(log n).

### Example

Initial array: [2, 3, 4, 5, 6]
Target value: 4

1. Compare the target value with the middle element of the array: 4
2. The target value is found at index 2.

```java
public class BinarySearch {
    public static int binarySearch(int[] arr, int x) {
        int left = 0, right = arr.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (arr[mid] == x) {
                return mid;
            }
            if (arr[mid] < x) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1;
    }
}
```
