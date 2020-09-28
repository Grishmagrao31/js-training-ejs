"use strict";
class Group {
    constructor() {
        this.content = [];
    }
    add(number) {
        if (!this.has(number)) {
            this.content.push(number);
        }
    }
    delete(number) {
        if (this.has(number)) {
            this.content.shift(number);
        }
    }
    has(number) {
        return this.content.includes(number);
    }
    static from(total) {
        let group = new Group;
        for (let number of total) {
            group.add(number);
        }
        return group;
    }
}
let group = Group.from([10, 20]);
console.log(group.has(10));
console.log(group.has(30));
group.add(10);
group.delete(10);
console.log(group.has(10));