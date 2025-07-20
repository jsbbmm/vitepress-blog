### 第3章：Java基础数据类型存储
在Java中，数据类型分为两种：基本数据类型（Primitive Data Type）和引用数据类型（Reference Data Type）。

#### 1， 数组
数组是一种数据结构，用于存储多个相同类型的元素。在Java中，数组是一种引用数据类型，它可以存储基本数据类型和引用数据类型。
数组的声明方式如下：
```java
// 声明一个整数数组
int[] numbers;	// 数组的声明方式
// 声明一个字符串数组
String[] names;	// 数组的声明方式
```
数组的初始化方式如下：
```java
// 初始化一个整数数组
int[] numbers = new int[5];	// 数组的初始化方式
// 初始化一个字符串数组
String[] names = new String[5];	// 数组的初始化方式
```
数组的元素可以通过索引访问，索引从0开始。
```java
// 访问数组的第一个元素
int firstNumber = numbers[0];	// 数组的元素访问方式
// 访问数组的第二个元素
String secondName = names[1];	// 数组的元素访问方式
```	
数组的长度可以通过length属性获取。
```java
// 获取数组的长度
int length = numbers.length;	// 数组的长度获取方式
```
数组的遍历方式如下：
```java
// 遍历数组	
for (int i = 0; i < numbers.length; i++) {	// 数组的遍历方式
    System.out.println(numbers[i]);	// 数组的元素访问方式
}	// 数组的遍历方式
```
数组的复制方式如下：
```java
// 复制数组
int[] newNumbers = new int[numbers.length];	// 数组的复制方式
for (int i = 0; i < numbers.length; i++) {	// 数组的复制方式
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的复制方式
```
数组的排序方式如下：
```java
// 排序数组
Arrays.sort(numbers);	// 数组的排序方式
```
数组的查找方式如下：
```java
// 查找数组中的元素
int index = Arrays.binarySearch(numbers, 5);	// 数组的查找方式
```
数组的扩容方式如下：
```java
// 扩容数组
int[] newNumbers = new int[numbers.length * 2];	// 数组的扩容方式
for (int i = 0; i < numbers.length; i++) {	// 数组的扩容方式
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的扩容方式
numbers = newNumbers;	// 数组的扩容方式	
```
数组的缩容方式如下：
```java
// 缩容数组
int[] newNumbers = new int[numbers.length / 2];	// 数组的缩容方式	
for (int i = 0; i < newNumbers.length; i++) {	// 数组的缩容方式
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的缩容方式	
numbers = newNumbers;	// 数组的缩容方式
```
数组的插入方式如下：
```java
// 插入数组中的元素
int[] newNumbers = new int[numbers.length + 1];	// 数组的插入方式
for (int i = 0; i < index; i++) {	// 数组的插入方式
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的插入方式
newNumbers[index] = 5;	// 数组的元素赋值方式
for (int i = index + 1; i < newNumbers.length; i++) {	// 数组的插入方式
    newNumbers[i] = numbers[i - 1];	// 数组的元素赋值方式
}	// 数组的插入方式
numbers = newNumbers;	// 数组的插入方式	
```
数组的删除方式如下：
```java
// 删除数组中的元素
int[] newNumbers = new int[numbers.length - 1];	// 数组的删除方式	
for (int i = 0; i < index; i++) {	// 数组的删除方式	
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的删除方式	
for (int i = index; i < newNumbers.length; i++) {	// 数组的删除方式	
    newNumbers[i] = numbers[i + 1];	// 数组的元素赋值方式
}	// 数组的删除方式
numbers = newNumbers;	// 数组的删除方式		
```
数组的反转方式如下：
```java	
// 反转数组
int[] newNumbers = new int[numbers.length];	// 数组的反转方式
for (int i = 0; i < numbers.length; i++) {	// 数组的反转方式
    newNumbers[i] = numbers[numbers.length - 1 - i];	// 数组的元素赋值方式
}	// 数组的反转方式
numbers = newNumbers;	// 数组的反转方式
```
数组的去重方式如下：
```java	
// 去重数组	
int[] newNumbers = new int[numbers.length];	// 数组的去重方式	
int index = 0;	// 数组的去重方式
for (int i = 0; i < numbers.length; i++) {	// 数组的去重方式
    if (i == 0 || numbers[i] != numbers[i - 1]) {	// 数组的去重方式
        newNumbers[index] = numbers[i];	// 数组的元素赋值方式
        index++;	// 数组的去重方式
    }	// 数组的去重方式
}	// 数组的去重方式
numbers = newNumbers;	// 数组的去重方式
```
数组的扩容方式如下：
```java
// 扩容数组
int[] newNumbers = new int[numbers.length * 2];	// 数组的扩容方式
for (int i = 0; i < numbers.length; i++) {	// 数组的扩容方式
    newNumbers[i] = numbers[i];	// 数组的元素赋值方式
}	// 数组的扩容方式	
numbers = newNumbers;	// 数组的扩容方式	
```


#### 2, 内存
内存是计算机中的重要组成部分，用于存储数据和程序。内存的主要组成部分有：寄存器、高速缓存、内存、磁盘。
在Java中，内存主要分为堆内存和栈内存。堆内存用于存储对象，栈内存用于存储基本数据类型和引用数据类型。
堆内存的分配方式如下：
```java
// 分配堆内存
Object obj = new Object();	// 堆内存的分配方式
```
栈内存的分配方式如下：
```java
// 分配栈内存
int number = 5;	// 栈内存的分配方式
String name = "John";	// 栈内存的分配方式
```
堆内存的释放方式如下：
```java
// 释放堆内存
obj = null;	// 堆内存的释放方式
```
栈内存的释放方式如下：
```java
// 释放栈内存
number = 0;	// 栈内存的释放方式
name = null;	// 栈内存的释放方式
```
堆内存的垃圾回收方式如下：
```java
// 垃圾回收
System.gc();	// 堆内存的垃圾回收方式
```
栈内存的垃圾回收方式如下：
```java 
// 垃圾回收
number = 0;	// 栈内存的垃圾回收方式
name = null;	// 栈内存的垃圾回收方式
```
xxx.java文件编译成xxx.class文件后，加载到内存中，从方法去执行，执行完毕后，从方法区卸载。栈中存放变量，堆中存放对象。

#### 二维数组
二维数组是一种数据结构，用于存储多个相同类型的元素。在Java中，二维数组是一种引用数据类型，它可以存储基本数据类型和引用数据类型。
二维数组的声明方式如下：
```java 
// 声明一个整数二维数组
int[][] numbers;	// 二维数组的声明方式
// 声明一个字符串二维数组
String[][] names;	// 二维数组的声明方式
```
二维数组的初始化方式如下：
```java
// 初始化一个整数二维数组
int[][] numbers = new int[3][4];	// 二维数组的初始化方式
// 初始化一个字符串二维数组
String[][] names = new String[3][4];	// 二维数组的初始化方式
```
二维数组的元素可以通过索引访问，索引从0开始。
```java
// 访问二维数组的第一个元素
int firstNumber = numbers[0][0];	// 二维数组的元素访问方式
// 访问二维数组的第二个元素
String secondName = names[1][1];	// 二维数组的元素访问方式
```
二维数组的长度可以通过length属性获取。
```java
// 获取二维数组的长度
int length = numbers.length;	// 二维数组的长度获取方式
```
二维数组的遍历方式如下：
```java
// 遍历二维数组
for (int i = 0; i < numbers.length; i++) {	// 二维数组的遍历方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的遍历方式
        System.out.println(numbers[i][j]);	// 二维数组的元素访问方式
    }	// 二维数组的遍历方式
}	// 二维数组的遍历方式
```
二维数组的复制方式如下：
```java
// 复制二维数组
int[][] newNumbers = new int[numbers.length][numbers[0].length];	// 二维数组的复制方式   
for (int i = 0; i < numbers.length; i++) {	// 二维数组的复制方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的复制方式
        newNumbers[i][j] = numbers[i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的复制方式
}	// 二维数组的复制方式
```
二维数组的排序方式如下：
```java
// 排序二维数组
for (int i = 0; i < numbers.length; i++) {	// 二维数组的排序方式
    Arrays.sort(numbers[i]);	// 二维数组的排序方式
}	// 二维数组的排序方式
```
二维数组的查找方式如下：
```java
// 查找二维数组中的元素
int index = -1;	// 二维数组的查找方式
for (int i = 0; i < numbers.length; i++) {	// 二维数组的查找方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的查找方式
        if (numbers[i][j] == 5) {	// 二维数组的查找方式
            index = i;	// 二维数组的查找方式
            break;	// 二维数组的查找方式
        }	// 二维数组的查找方式
    }	// 二维数组的查找方式
}	// 二维数组的查找方式
```
二维数组的扩容方式如下：
```java
// 扩容二维数组
int[][] newNumbers = new int[numbers.length * 2][numbers[0].length];	// 二维数组的扩容方式
for (int i = 0; i < numbers.length; i++) {	// 二维数组的扩容方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的扩容方式
        newNumbers[i][j] = numbers[i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的扩容方式
}	// 二维数组的扩容方式
numbers = newNumbers;	// 二维数组的扩容方式
```
二维数组的缩容方式如下：
```java
// 缩容二维数组
int[][] newNumbers = new int[numbers.length / 2][numbers[0].length];	// 二维数组的缩容方式   
for (int i = 0; i < newNumbers.length; i++) {	// 二维数组的缩容方式   
    for (int j = 0; j < newNumbers[i].length; j++) {	// 二维数组的缩容方式
        newNumbers[i][j] = numbers[i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的缩容方式
}	// 二维数组的缩容方式   
numbers = newNumbers;	// 二维数组的缩容方式
```
二维数组的插入方式如下：
```java
// 插入二维数组中的元素
int[][] newNumbers = new int[numbers.length + 1][numbers[0].length];	// 二维数组的插入方式
for (int i = 0; i < index; i++) {	// 二维数组的插入方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的插入方式
        newNumbers[i][j] = numbers[i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的插入方式
}	// 二维数组的插入方式
for (int j = 0; j < numbers[0].length; j++) {	// 二维数组的插入方式
    newNumbers[index][j] = 5;	// 二维数组的元素赋值方式
}	// 二维数组的插入方式
for (int i = index + 1; i < newNumbers.length; i++) {	// 二维数组的插入方式
    for (int j = 0; j < numbers[i - 1].length; j++) {	// 二维数组的插入方式
        newNumbers[i][j] = numbers[i - 1][j];	// 二维数组的元素赋值方式
    }	// 二维数组的插入方式
}	// 二维数组的插入方式
numbers = newNumbers;	// 二维数组的插入方式
```
二维数组的删除方式如下：
```java
// 删除二维数组中的元素
int[][] newNumbers = new int[numbers.length - 1][numbers[0].length];	// 二维数组的删除方式
for (int i = 0; i < index; i++) {	// 二维数组的删除方式   
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的删除方式
        newNumbers[i][j] = numbers[i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的删除方式
}	// 二维数组的删除方式
for (int i = index; i < newNumbers.length; i++) {	// 二维数组的删除方式
    for (int j = 0; j < numbers[i + 1].length; j++) {	// 二维数组的删除方式
        newNumbers[i][j] = numbers[i + 1][j];	// 二维数组的元素赋值方式
    }	// 二维数组的删除方式
}	// 二维数组的删除方式   
numbers = newNumbers;	// 二维数组的删除方式
```
二维数组的反转方式如下：
```java
// 反转二维数组
int[][] newNumbers = new int[numbers.length][numbers[0].length];	// 二维数组的反转方式
for (int i = 0; i < numbers.length; i++) {	// 二维数组的反转方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的反转方式
        newNumbers[i][j] = numbers[numbers.length - 1 - i][j];	// 二维数组的元素赋值方式
    }	// 二维数组的反转方式
}	// 二维数组的反转方式   
numbers = newNumbers;	// 二维数组的反转方式
```
二维数组的去重方式如下：
```java
// 去重二维数组
int[][] newNumbers = new int[numbers.length][numbers[0].length];	// 二维数组的去重方式
int index = 0;	// 二维数组的去重方式
for (int i = 0; i < numbers.length; i++) {	// 二维数组的去重方式
    for (int j = 0; j < numbers[i].length; j++) {	// 二维数组的去重方式
        if (i == 0 || numbers[i][j] != numbers[i - 1][j]) {	// 二维数组的去重方式   
            newNumbers[index][j] = numbers[i][j];	// 二维数组的元素赋值方式
            index++;	// 二维数组的去重方式
        }	// 二维数组的去重方式
    }	// 二维数组的去重方式
}	// 二维数组的去重方式
numbers = newNumbers;	// 二维数组的去重方式
```