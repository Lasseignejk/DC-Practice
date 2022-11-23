# Tandem Bicycle
# A tandem bicycle is a bicycle that's operated by two people: person A and person B. Both people pedal the bicycle, but the person that pedals faster dictates the speed of the bicycle. So if person A pedals at a speed of 5, and person B pedals at a speed of 4, the tandem bicycle moves at a speed of 5 (i.e., tandemSpeed = max(speedA, speedB)).

# You're given two lists of powitive integers: one that contains the speeds of riders wearing red shirts and one that contains the speeds of riders wearing blue shirts. Each rider is represented by a single positive integer, which is the speed that they pedal a tandem bicycle at. Both lists have the same length, meaning that there are as many red-shirt riders as there are blue-shirt riders. Your goal is to pair every rider wearing a red shirt with a rider wearing a blue shirt to operate a tandem bicycle.

# Write a function that returns the maximum possible total speed or the minimum possible total speed of all of the tandem bicycles being ridden based on an input parameter, fastest. If fastest = true, your function should return the maximum possible total speed; otherwise it should return the minimum total speed.

# "Total speed" is defined as the sum of the speeds of all the tandem bicycles being ridden. For example, if there are 4 riders (2 red shirts and 2 blue shirts) who have speeds of 1, 3, 4, 5, and if they're paired on tandem bicycles as follows: [1,4], [5,3], then the total speed of these tandem bicycles is 4+5=9.
# end goal is to return an integer

# You probably don't need to loop as much as you will want to
# Try not to make another list. Keep it to just the two lists provided
# try brute force first

redShirtSpeeds = [5, 5, 3, 9, 2]
blueShirtSpeeds = [3, 6, 7, 2, 1]

redShirtSpeeds.sort(reverse=True)
# [9, 5, 5, 3, 2]
blueShirtSpeeds.sort(reverse=False)
# [1, 2, 3, 6 ,7]


def totalSpeed(fastest):
    if fastest == True:
        counter = 0
        maxSpeed = 0
        for rider in redShirtSpeeds:
            if rider >= blueShirtSpeeds[counter]:
                maxSpeed += redShirtSpeeds[counter]
            else:
                maxSpeed += blueShirtSpeeds[counter]
            counter += 1
        print(
            f"The max speed for this group of tandem bicycles is {maxSpeed}.")
    else:
        counter = 0
        minSpeed = 0
        for rider in redShirtSpeeds:
            if rider <= blueShirtSpeeds[counter]:
                minSpeed += redShirtSpeeds[counter]
            else:
                minSpeed += blueShirtSpeeds[counter]
            counter += 1
        print(
            f"The min speed for this group of tandem bicycles is {minSpeed}.")


totalSpeed(False)