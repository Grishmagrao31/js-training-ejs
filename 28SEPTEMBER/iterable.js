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
        for (let value of total) {
            group.add(value);
        }
        return group;
    }
    [Symbol.iterator]() {
        return new GroupIterator(this);
}
}
//let group = Group.from([10, 20]);
class GroupIterator {
    constructor (group) {
        this.group = group;
        this.a = 0;
    }
    next () {
        if (this.a >= this.group.content.length) {
           return { done : true}; 
        } else {
            let result = {value : this.group.content[this. a], done : false};
            this.a ++ ;
            return result;
        }
    }
}
/*Group.prototype[Symbol.iterator] = function () {
    return new GroupIterator(this);
}; */
for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
