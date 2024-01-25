---
title: 数据结构：线性表 - 数组
date: 2024-01-03 10:09:39
permalink: full-stack-learning/data-structure/array-list/
toc: true
categories:
    - [.Net Full Stack, Data Structure]
tags:
    - Data Structure
    - Array List
---

## 介绍

数组是线性的数据结构，其特点是会将**相同类型**的元素存储在**连续**的内存空间中

由于其内存空间的连续，通过下标访问元素的时间复杂度为`O(1)`

## 基本概念

假设存在一个数组：`1, 1, 4, 5, 1, 4`

相关的重要概念有：
- 元素：数组的构成单位，要求类型相同或**继承自相同的类型**，比如`1`，`5`
- 元素长度：在`.Net`中，`int`的大小是32位，详见[整型数值类型](https://learn.microsoft.com/zh-cn/dotnet/csharp/language-reference/builtin-types/integral-numeric-types)
- 维度：上述例子的数组是一维数组。二维数组的定义方式，如`int[,] arr = new int[2, 3]`，表示一个2行3列的二维数组
- 维度长度：数组中每一个维度的长度，如上述例子的维度长度为6
- 索引：元素在数组中的位置。在`C#`中，**索引从`0`开始**，比如元素`5`的索引是`3`

## .Net 对数组的处理

在`.Net`中，数组是**引用类型**的，从[Base Class Library](https://learn.microsoft.com/zh-CN/dotnet/standard/glossary#bcl)的基类`System.Array`派生，但数组元素**可以**是值类型的。
但如果数组的元素是引用类型的，那么数组存储的将会是**对象的引用**

因此，`.Net`会将数组放在**托管堆**上，而不是栈

## 操作

### 实例化

一维数组：
```csharp
int[] arr = new int[5]; // 5个元素的数组
int[] arr2 = new int[] { 1, 2, 3 }; // 显式初始化，数组长度由编译器推断
```

多维数组：
```csharp
int[,] arr = new int[2, 3]; // 2行3列的二维数组
int[,] arr2 = new int[,] { { 1, 2 }, { 3, 4 } }; // 显式初始化，数组长度由编译器推断

int[,,] arr3 = new int[2, 3, 4]; // 2行3列4层的三维数组
int[,,] arr4 = new int[,,] { 
            { { 1, 2, 3, 4 }, { 5, 6, 7, 8 }, { 9, 10, 11, 12 } }, 
            { { 13, 14, 15, 16 }, { 17, 18, 19, 20 }, { 21, 22, 23, 24 } } 
            }; // 显式初始化，数组长度由编译器推断
```

### 访问

数组在内存中是连续存储的，其优势在于可以**效率极高**地访问任意元素，时间复杂度为`O(1)`

```csharp
int[] arr = new int[] { 1, 2, 3 };
Console.WriteLine(arr[0]); // 输出1
```

### 插入&删除&添加

以插入操作为例：

在内存中连续存储的特性导致数组难以快速插入元素。因此，如果需要插入元素，需要先把插入位置后面的元素全部后移，然后再插入。

然而，如果要让原数组的元素得以保留，那么就需要新建一个更长的数组，然后把原数组的元素复制到新数组中，再插入元素。

这也是基于数组实现列表的基本原理之一。

```csharp
int[] arr = {1, 1, 5, 1, 4};
int[] arr2 = new int[6];
int insert_position = 2;
int insert_number = 4;
for (int i = 0; i < insert_position; i++)
{
    arr2[i] = arr[i];
}
arr2[insert_position] = insert_number;
for (int i = insert_position+1; i < arr2.Length; i++)
{
    arr2[i] = arr[i-1];
} // 1, 1, 4, 5, 1, 4
```

不难发现，由于在数组中，元素紧密排列，从而导致在最坏情况下，插入元素的时间复杂度为`O(n)`

进而可以得知，删除或添加元素的时间复杂度也为`O(n)`

## 总结

得益于数组在内存中的连续存储特性：
- 数组对内存拥有更高效率的利用：元素在数组中的紧密排列意味着数组几乎**不会浪费内存**
- 极高的访问速度：通过索引访问元素的时间复杂度为`O(1)`

但也因为这个特性：
- 新增&插入&删除的效率低：涉及到元素增删的操作会不可避免地导致元素的移动，时间复杂度为`O(n)`
- 固定的长度：如果出现数组长度不够用的情况，需要**扩容**
