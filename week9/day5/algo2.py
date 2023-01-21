# Remove nth node from end of list
# given the head of a linked list, remove the nth node from the end of the list and return its head

# example
# head = [1,2,3,4,5], n=2
# output: [1,2,3,5]

# data structure that is meant to be very fast and easy to access the data inside. each node has a 'value' and a 'next'

# Meg's value is 'Steak', next is 'Corey'.
# Corey's value is 'Century Egg', next is Mauro. etc etc etc 
# the next value is another memory address. the individual items are nodes.

# Rule #1: you can use recursion to traverse a linked list.
# Rule #2: you can use a while loop to traverse a linked list

head = [1,2,3,4,5]
n = 2

def removeNthFromEnd(head,n):
    counter = 1
    first = head
    second = head
    #        f                   s
    # head = 0 -> 1 -> 2 -> 3 -> 4 -> 5
    #n = 4
    while counter <= n:
        second = second.next
        counter += 1
    if second is None:
        head.value = head.next.value
        head.next = head.next.next
        # so this checks if the value we want to remove is the first node. if it is, make the head node point to the next node.
        return
    while second.next is not None:
        second = second.next
        first = first.next
    # first is pointing to the node right before the node we want to remove
    # first.next = NODE_TO_REMOVE
    # first.next = NODE_TO_REMOVE.next
    first.next = first.next.next