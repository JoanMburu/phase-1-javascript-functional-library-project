// Collection Functions (Arrays or Objects)

// myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else {
      for (let key in collection) {
        callback(collection[key]);
      }
    }
    return collection;
  }
  
  // myMap
  function myMap(collection, callback) {
    const mappedArray = [];
    myEach(collection, function(item) {
      mappedArray.push(callback(item));
    });
    return mappedArray;
  }
  
  // myReduce
  function myReduce(collection, callback, acc) {
    let result = acc !== undefined ? acc : collection[Object.keys(collection)[0]];
    let startIndex = acc !== undefined ? 0 : 1;
  
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        result = callback(result, collection[i], collection);
      }
    } else if (typeof collection === 'object') {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        result = callback(result, collection[keys[i]], collection);
      }
    }
  
    return result;
  }
  
  // myFind
  function myFind(collection, predicate) {
    let result;
    let found = false; // Flag to track if value is found
    myEach(collection, function(item) {
      if (!found && predicate(item)) {
        result = item;
        found = true; // Set flag to true if value is found
      }
    });
    return result;
  }
  
  // myFilter
  function myFilter(collection, predicate) {
    const filteredArray = [];
    myEach(collection, function(item) {
      if (predicate(item)) {
        filteredArray.push(item);
      }
    });
    return filteredArray;
  }
  
  // mySize
  function mySize(collection) {
    let count = 0;
    myEach(collection, function() {
      count++;
    });
    return count;
  }
  
  // Array Functions
  
  // myFirst
  function myFirst(array, n) {
    return n ? array.slice(0, n) : array[0];
  }
  
  // myLast
  function myLast(array, n) {
    if (n) {
      return array.slice(-n);
    } else {
      return array[array.length - 1];
    }
  }
  
  // mySortBy
  /*function mySortBy(array, callback) {
    return array.slice().sort((a, b) => {
      const aValue = callback(a);
      const bValue = callback(b);
      if (aValue < bValue) return -1;
      if (aValue > bValue) return 1;
      return 0;
    });
  }*/
  
  // myFlatten
  /*function myFlatten(array, shallow, newArr = []) {
    if (shallow) {
      return newArr.concat.apply([], array);
    }
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        myFlatten(array[i], shallow, newArr);
      } else {
        newArr.push(array[i]);
      }
    }
    return newArr;
  }*/
  
  // Object Functions
  
  // myKeys
  function myKeys(object) {
    const keys = [];
    for (let key in object) {
      keys.push(key);
    }
    return keys;
  }
  
  // myValues
  function myValues(object) {
    const values = [];
    for (let key in object) {
      values.push(object[key]);
    }
    return values;
  }
  
  // Example function calls:
  
  // Testing myEach
  console.log(myEach([1, 2, 3], alert));
  console.log(myEach({one: 1, two: 2, three: 3}, alert));
  
  // Testing myMap
  console.log(myMap([1, 2, 3], function(num){ return num * 3; }));
  console.log(myMap({one: 1, two: 2, three: 3}, function(num, key){ return num * 3; }));
  
  // Testing myReduce
  console.log(myReduce([1, 2, 3], function(acc, val) { return acc + val; }, 10));
  console.log(myReduce({one: 1, two: 2, three: 3}, function(acc, val) { return acc + val; }));
  
  // Testing myFind
  console.log(myFind([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
  console.log(myFind({one: 1, three: 3, four: 4, six: 6}, function(num){ return num % 2 == 0; }));
  
  // Testing myFilter
  console.log(myFilter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; }));
  console.log(myFilter({one: 1, three: 3, five: 5}, function(num){ return num % 2 == 0; }));
  
  // Testing mySize
  console.log(mySize({one: 1, two: 2, three: 3}));
  console.log(mySize([]));
  
  // Testing myFirst
  console.log(myFirst([5, 4, 3, 2, 1]));
  console.log(myFirst([5, 4, 3, 2, 1], 3));
  
  // Testing myLast
  console.log(myLast([5, 4, 3, 2, 1]));
  console.log(myLast([5, 4, 3, 2, 1], 3));
  
  // Testing myKeys
  console.log(myKeys({one: 1, two: 2, three: 3}));
  
  // Testing myValues
  console.log(myValues({one: 1, two: 2, three: 3}));