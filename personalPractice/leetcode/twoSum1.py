# Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
# You can return the answer in any order.

nums = [3, 2, 4]
target = 6


def twoSum(nums, target):
    # passed every test except when nums was [3,3]
    # for index in range(len(nums)):
    #     start = nums[index]
    #     for num in nums[1:]:
    #         if start + num == target:
    #             index1 = nums.index(start)
    #             index2 = nums.index(num)
    #             print(index1, index2)
    #             break
    #         break
    # found online after an hour of trying and failing, this is basically what i was trying to do, just got messed up with the nested loops
    for i in range(0, len(nums)):
        for j in range(i+1, len(nums)):
            if nums[i] + nums[j] == target:
                return ([i, j])


twoSum(nums, target)
