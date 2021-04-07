# There is an integer array nums sorted in ascending order (with distinct values).
# Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
# Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
# Input: nums = [4,5,6,7,0,1,2], target = 0
# Output: 4
class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        start, end = 0, len(nums) - 1
        while start <= end:
            mid = (start + end) // 2
            if nums[mid] == target:
                return mid
            if nums[0] <= nums[mid]:
                if nums[0] <= target <= nums[mid]:
                    end = mid - 1
                else:
                    start = mid + 1
            if nums[mid] <= nums[len(nums) - 1]:
                if nums[mid] <= target <= nums[len(nums) - 1]:
                    start = mid + 1
                else:
                    end = mid - 1
        return -1;           