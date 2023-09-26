---
id: "dsa"
title: "Data Structures and Algorithms"
summary: "Every software developer should know the fundamental principles computer science"
date: "2023-08-22"
quote: { "content": "", "author": "" }
coverImage: "/assets/blog/dsa/cover.webp"
ogImage:
  url: "/assets/blog/dsa/cover.jpg"
---

Data structures and algorithms change the way you approach programming. Understanding them will create a natural control over programming, trigger the analytical thinking and avoid getting lost within problems. It will alter your perspective on programming and empower you to manage your code efficiently.

## Data Structures

Data structures is basically **to manage** the data.

The fundamental data structure is the arrays, then comes the linked lists, stacks, queues, trees, and graphs. How to decide on which one to use depends on the operations expected the data structure to perform. Add, delete, update, search...

#### Array [arrays](../codes/arrays)

- _Linear_ data structure
- Have _fixed size_ determined at the time of creation.
- Every element has an _index_ and accessed using its index. For instance in a 0-based array first element is at index 0, second is at index 1.
- Array elements are stored in adjacent memory locations where the first element is stored in the smallest memory location.

- **Good performance:**

  - _Accessing_ an element takes constant time because of the indexed structure.

- **Bad performance:**
  - _Insertion_ and _deletion_ take in worst case shifting the whole array elements to accomodate the change in the size.
  - When there are big gaps between the elements of the collection leads to inefficient memory usage.

#### Linked list

- _Linear_ data structure
- Is a sequence of elements, where each element is a node containing both the actual _data_ and _a reference to the next node_ in the sequence
- New nodes can be added or deleted without the need of a resizing.
- Efficient insertion and deletion compared to arrays.

- Has **3 types**:

  - _[Singly linked list](../codes/singlyLinkedList):_ Each node points to the next node in the sequence. Last node points to null.
  - _Doubly linked list:_ Each node has reference both to the next and previous nodes.
  - _Circular linked list:_ The last node's reference points to the firsts node creating a loop. Circular linked list can be singly or doubly.

- **Good performance:**

  - Dynamic _resizing_,
  - Frequent _insertions_ and _deletions_,
  - Size of the data structure is unknown.

- **Bad perfomance:**
  - Compared to arrays with _access_ operations. Arrays has the advantage of indexes.

#### Stack

- _Linear_ data structure
- Follows the **Last-In-First-Out (LIFO)** principle. Last element added to the stack is the first element to be removed.
- Can be implemented using arrays or linked lists.(implementation in code examples data structures)

- Operations:

  - _Push:_ Adds an element to the top of the stack.
  - _Pop:_ Removes and returns the top element from the stack.
  - _Peek(Top)_: Returns the top element.
  - _IsEmpty_: Checks if the stack is empty.
  - _Size_: Returns the number of elements in the stack.

- Common **use cases**:

  - _Function call:_ Programming langauges use stack to manage function calls. When a functions is called, its local variables and context are pushed to the stack. When the functions is complete, the stack pops the variables and context.
  - _Expression evaluation:_ _Infix to postfix_ conversion, or evaluating the _postfix expressions_. (link to some postfix stack code examples.)
  - _Undo operations:_ (give and web page undo example)
  - _Backtracking:_ Solving mazes, searching for solutions(give concrete examples and link to the algorithm exercises)

- **Good performance:**

  - Push: O(1)
    - Pop: O(1)
    - Peek: O(1)
    - IsEmpty: O(1)

- **Bad performance:**
  - Scenarios that require _random access_ to elements.

#### Queue

- _Linear_ data structure
- Follows the **First-In-First-Out (FIFO)** principle. First element added to the queue is the first one to be removed.
- Can be implemented using arrays or linked lists.

- Operations:

  - _Enqueue:_ Adds an element to the back (end) of the queue.
  - _Dequeue:_ Removes and returns the front (first) element from the queue.
  - _Front:_ Returns the front element.
  - _IsEmpty:_ Checks if the queue is empty.
  - _Size:_ Returns the number of elements in the queue.

- Common **use cases**:

  - _Task processing:_ Manage tasks that need to be processed in a specific _order_, print jobs, requests in a web server queue(wgive web example)
  - _Breadth First Search(BFS)_:(link to the example in algorithms)
  - _Scheduling:_ _Scheduling_ tasks in real time systems.

- **Good performance:**

  - Enqueue: O(1)
    - Dequeue: O(1)
    - Front: O(1)
    - IsEmpty: O(1)

- **Bad performance:**
  - Scenarios such as _access_ to the middle element.

#### Tree

- _Hierarchical_ data structure
- Consists of _nodes_ connected by _edges_, with a starting node called the _root_. Each node can have zero or more _children_, resembling an upside down tree.
- (put an image showing all the relation of a tree, node, edge,sibling,leaves, depth,height,root,parent,child)

- Tree **Types**:

  - _Binary Tree:_ Each node has at most _2 children_.
  - _Binary Search Tree(BST):_ Special binary tree where all nodes on a left subtree are smaller than its right subtree. link to the bst in data structures
    - _Balanced Tree:_ Trees with _minimal height_. _Avl tree_ and _red-black trees_(link to the example in data structures)

- **Traversal**:

  - _InOrder:_ root-left-right
  - _PreOrder:_ left-right-root
  - _PostOrder:_

- Common **use cases**:

  - Representing _hierarchical_ data structures, file systems
  - Implementing _search_ algorithms, binary search
  - _Organizing_ data in db, b-trees
  - _Machine learning_ and _decision making_, decision trees

- **Good performance:**

- **Bad performance:**

#### Graph

....

## Algorithms

### Search Algortihms

Search algortihms are techniques used to traverse through data structures such as graphs, trees and arrays to find elements or patterns.
There are two types of search algorithms:

- Linear Search: Traverses a list or array until the target element is found. Time complexity in worst case O(n), where n is the number of elements in the list, and has to search the whole list.

```
  LinearSearch(list, target):
    for each element in list:
        if element equals target:
            return element
    return not found
```

- Binary Search: Traverses a **sorted** list or array. Repeatedly divides the list into half, narrowing down the search medium until the target element is found. Has time complexity O(logn).

```
	BinarySearch(sortedList, target):
    left = 0
    right = length of sortedList - 1

    while left <= right:
        mid = (left + right) / 2
        if sortedList[mid] equals target:
            return mid
        else if sortedList[mid] < target:
            left = mid + 1
        else:
            right = mid - 1

    return not found
```

#### BFS - Breadth First Search

- Graph traversal algorithm
- Traverse the graphs in breadth direction, exploring all the nodes on a level before passing to the next level.
- Uses queue to keep track of the vertices to visit.
- Common **use cases**:
  - Shortest path between two nodes
  - Visiting all nodes in a connected component.
- Algorithm steps:
  1.  Start from the specified node.
  2.  Enqueue the node.
  3.  While queue is not empty:
      3.1. Dequeue
      3.2. Processed the dequeued
      3.3. Enqueue all the neighbours
- **Good performance:**
  - Shortest paths in unweighted graphs

### Sort Algorithms
