let sym = Symbol ("name");
console.log(sym == Symbol("name"));
const toStringSymbol = Symbol("toString");
Array.prototype[toStringSymbol] = function() {
  return `${this.length} cm of blue yarn`;
};

console.log([1, 2].toString());
console.log([1, 2][toStringSymbol]());
let stringObject = {
    [toStringSymbol]() { return "a jute rope"; }
  };
  console.log(stringObject[toStringSymbol]());
  let terator = "HELLO" [Symbol.iterator]();
  console.log(terator.next());
  console.log(terator.next());
  console.log(terator.next());
  console.log(terator.next());
  console.log(terator.next());
  console.log(terator.next());
  console.log(terator.next());
  