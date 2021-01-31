# Merge two array as key value pair
1)

```
var keys = ['foo', 'bar', 'baz'];
var values = [11, 22, 33]

var result = {};
keys.forEach((key, i) => result[key] = values[i]);
console.log(result);
```
---
2) 

```
var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result =  rows.reduce(function(result, field, index) {
  result[columns[index]] = field;
  return result;
}, {})

console.log(result);
```
---
3)

```
const keys = [0, 4, 2, 3, 1];
const values = ["first", "second", "third", "fourth", "fifth"];
const buildMap = (keys, values) => {
   const map = new Map();
   for(let i = 0; i < keys.length; i++){
      map.set(keys[i], values[i]);
   };
   return map;
};
console.log(buildMap(keys, values));
```
