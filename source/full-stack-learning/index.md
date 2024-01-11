---
title: 全栈学习
---

## 概述

这一页记录我围绕`.Net Core (C#)`展开的全栈学习笔记

主要参考：
- [Edison Zhou](https://www.cnblogs.com/edisonchou/)
- [Hello Algo](https://www.hello-algo.com/)
- [Wikipedia](https://www.wikipedia.com/)
- *Illustrated C# 7 (Fifth Edition)*

## 目录

### 有关 .Net 的六个重要概念

[文章地址](../full-stack-learning/six-important-concepts/)
[原文地址](https://www.codeproject.com/Articles/76153/Six-important-NET-concepts-Stack-heap-value-types)

### 数据结构 / Data Structure

#### 线性表 / Linear List

{% markmap 200px %}
- 线性表
  - 数组
  - 链表
    - 单向链表
    - 双向链表
    - 环形链表
  - 列表
{% endmarkmap %}

线性表是由若干个数据元素/节点组成的**有限序列**

| 线性表 | 数组 | 链表 |
| --- | --- | --- |
| 逻辑结构 | 连续 | 连续 |
| 内存空间 | 连续 | 非连续 |

列表最显著的特征就是**大小可变**，作为一种更抽象的数据结构，列表可以用数组或链表实现。因此，在使用列表的时候，通常不需要考虑容量的限制问题。

但列表的缺点也很明显：如果是数组的实现，则会出现内存浪费的问题；如果是链表的实现，则在访问元素时会有一定的性能损耗。

现代的高级语言中，通常都会提供列表的实现，比如`C#`中的`List<T>`，`Java`中的`ArrayList`等。

- [数组](../full-stack-learning/data-structure/array-list/)
- [链表](../full-stack-learning/data-structure/linked-list/) *施工中*
- 列表 *施工中*