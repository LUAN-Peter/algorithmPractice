// You are given a data structure of employee information, which includes the employee's unique id, their importance value and their direct subordinates' id.
// For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. 
// Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.
// Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all their subordinates.
/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
    const importance = new Map();
    const staff = new Map();
    for (const employee of employees) {
        importance.set(employee.id, employee.importance);
        staff.set(employee.id, employee.subordinates);
    }
    let result = 0;
    let record = [id];
    while (record.length != 0) {
        result += importance.get(record[0]);
        let id = record.shift();
        record.push(...staff.get(id));
    }
    return result;
};