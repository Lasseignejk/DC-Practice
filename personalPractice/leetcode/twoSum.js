// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same eleemnt twice.
// nums = [2,7,11,15], target == 9
// output: [0,1]

// nums = [2, 7, 11, 15];
// target = 9;
// // [0,1]

nums = [3, 2, 4];
target = 6;
// [1,2]

// nums = [3, 3];
// target = 6;
// [0,1]

const twoSum = (nums, target) => {
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			const total = nums[i] + nums[j];
			if (total == target) {
				return [i, j];
			}
		}
	}
};

twoSum(nums, target);
