// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// The number of elements initialized in nums1 and nums2 are m and n respectively. 
// You may assume that nums1 has a size equal to m + n such that it has enough space to hold additional elements from nums2.
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    const record = [];
    let start1 = 0, start2 = 0;
    while (start1 < m && start2 < n) {
        if (nums1[start1] < nums2[start2]) {
            record.push(nums1[start1]);
            start1++;
        } else {
            record.push(nums2[start2]);
            start2++;
        }
    }
    if (start1 == m) {
        while (start2 < n) {
            record.push(nums2[start2]);
            start2++;
        }
    }
    if (start2 == n) {
        while (start1 < m) {
            record.push(nums1[start1]);
            start1++;
        }
    }
    for (let i = 0; i < m + n; i++) {
        nums1[i] = record[i];
    }
    return nums1;
};