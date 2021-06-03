# Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
# For example, the array nums = [0,1,4,4,5,6,7] might become: [4,5,6,7,0,1,4] if it was rotated 4 times.

class Solution:
    def findMin(self, nums: List[int]) -> int:
        start, end = 0, len(nums) - 1
        while start < end:
            pivot = start + (end - start) // 2
            if nums[pivot] < nums[end]:
                end = pivot
            elif nums[pivot] > nums[end]:
                start = pivot + 1
            else:
                end -= 1
        return nums[start]