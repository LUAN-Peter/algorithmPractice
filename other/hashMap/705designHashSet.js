// Design a HashSet without using any built-in hash table libraries.
// Implement MyHashSet class:
// void add(key) Inserts the value key into the HashSet.
// bool contains(key) Returns whether the value key exists in the HashSet or not.
// void remove(key) Removes the value key in the HashSet. If key does not exist in the HashSet, do nothing.
// Input: 
// [
//     ["MyHashSet", "add", "add", "contains", "contains", "add", "contains", "remove", "contains"],
//     [[], [1], [2], [1], [3], [2], [2], [2], [2]]
// ]
// Output: [null, null, null, true, false, null, true, null, false]
/**
 * Initialize your data structure here.
 */
var MyHashSet = function() {
    this.MAP_SIZE = 1000;
    this.map = new Array(1000).fill(0).map(() => []);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let target = key % this.MAP_SIZE;
    let list = this.map[target];
    for (let i = 0; i < list.length; i++) {
        if (list[i] == key) {
            return;
        }
    }
    list.push(key);
    return;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let target = key % this.MAP_SIZE;
    let list = this.map[target];
    for (let i = 0; i < list.length; i++) {
        if (list[i] == key) {
            list.splice(i, 1);
        }
    }
    return;
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let target = key % this.MAP_SIZE;
    let list = this.map[target];
    for (let i = 0; i < list.length; i++) {
        if (list[i] == key) {
            return true;
        }
    }
    return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
