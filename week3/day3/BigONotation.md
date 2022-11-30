# Time and space complexity / Big O Notation

- how fast is your program and how much space does it require

Somewhere in your computer's memory is a bunch of squares that store information. So when you define a variable, it gets stored in one of those squares. It's also given a memory address, a whole lot of numbers and letters

If you try to print that variable, the computer grabs the memory address and looks for it.

For your computer, to read/write variables, it happens instantly. Well, it happens in a super small amount of time like nanoseconds. But that'll vary depending on a ton of different factors, so we measure that time in Big O Notation instead.

O(1)
O of 1. constant time operation. Happens immediately. Defining a variable, printing a variable, doing simple math

What about a list? A list is much different type of data.
students = []
students = ["meg", "vinny", "jay"]
Your computer will look for three squares that are right next to each other.
students will store the memory address for meg, vinny, and jay, which the computer will look for.

if someone wants to join the students list and there's no more room in that spot in the memory, the whole list has to move to find somewhere to fit everyone.
so even if it happens basically instantaneously, the computer is still doing work to pull that list and move it somewhere with more room.

big O is for the worse case scenario, handling large amounts of data.

let's say there are 30 million people on facebook and they all decide to do 30 different things all at the same time. And all that stuff is going into your computer at the same time.
If you know the index of a list, it is O(1). If you don't know the index, you have to traverse the list. Worse case scenario, the thing you need is at the very end of the list. O(n). n represents whatever the size of the list is. That's just to find the memory, wherever it is.
Writing, or creating, a list is also O(n). There are some differences when you have certain list methods that add/subtract things from the beginning/end/middle of a list.
So if you know the index, life is great. It is O(1). If you don't know the index, life sucks, O(n).

Next: dictionaries
student = {name: "joe"}
to call "joe", you'd type in student["name"]
reading and writing to a dictionary is very efficient.
reading is O(1) because you can't access something out of a dictionary without a key.
storing is O(n)?

linked list
clever invention
cool thing is that it remembers things...
it's O(1) to read, O(n)? to write.
But the diference in traversing the list is interesting.
students = {
vinny{name: "vinny", next: 123},
meg: {name: "meg", next: 456},
jaye: {name: "jay", next: 789}
}
linked lists aren't picky. It goes through your computer and will plug in the values wherever there is space, instead of insisting that they all sit next to each other. Hey Vinny, where's Meg? Oh, she's at 456. Meg, where's Jaye? Oh, she's at 789.
So the values remember the location of the next thing in line. Not the value of the next thing, but the location.
But the problem is, what if we want to add something in the middle of the link list? Still chill! Still ok!
If Adam wants to sit between vinny and meg, vinny will now point to adam and adam will point to meg.
But you still have to traverse some. Worse case scenario, you still have to traverse everything. So inserting in the middle/end is O(n). That's why lots of things have things to add stuff to the front or end, so it's O(1). It might be O(logn)? Joe's not sure.
Accessing things in the middle might be O(logn) as well.

definitely look at books on data structures and stuff.

loops
a simple for loop is O(n)
a nested loop might be useful for some things, but it isn't very efficient. it's O(n^2) (O of n squared). sometimes that's the only solution though. A lot of times, nested loops is the brute force way.
3 loops: O(n^3) and so on

If you're in an interview doing an algo, solve the problem, then look at your solution and try to make it more efficient. If you over-complicate it, you'll probably get marked down because your Big O is too high.

2 books: Cracking the Coding Interview, Grokking Algorithms

algoexpert data structures, or YouTube videos, etc.

Good companies will ask you stuff like, "I want to do xyz. How would you design that?" And you'll have to explain your logic out and ask questions.

flashcards, tic tac toe, etc.
