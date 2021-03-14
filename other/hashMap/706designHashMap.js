// Design a HashMap without using any built-in hash table libraries.
// Implement the MyHashMap class:
// MyHashMap() initializes the object with an empty map.
// void put(int key, int value) inserts a (key, value) pair into the HashMap. If the key already exists in the map, update the corresponding value.
// int get(int key) returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key.
// void remove(key) removes the key and its corresponding value if the map contains the mapping for the key.
// Input: 
// [
//     ["MyHashMap", "put", "put", "get", "get", "put", "get", "remove", "get"],
//     [[], [1, 1], [2, 2], [1], [3], [2, 1], [2], [2], [2]]
// ]
// Output: [null, null, null, 1, -1, null, 1, null, -1]

/**
 * Initialize your data structure here.
 */
var MyHashMap = function() {
    this.MAP_SIZE = 1000;
    this.map = new Array(this.MAP_SIZE).fill(0).map(() => []);
};

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    const list = this.map[key % this.MAP_SIZE];
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] == key && list[i][1] != value) {
            list[i][1] = value;
            return;
        }
    }
    list.push([key, value]);
    return;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    const list = this.map[key % this.MAP_SIZE];
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] == key) {
            return list[i][1];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    const list = this.map[key % this.MAP_SIZE];
    for (let i = 0; i < list.length; i++) {
        if (list[i][0] == key) {
            list.splice(i, 1);
            return;
        }
    }
    return;
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */