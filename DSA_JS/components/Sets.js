// sets are like arrays
// no duplicates elements are allowed
// and values are in no particular order

var mySet = function () {
  // var collection will hold the set
  var collection = [];

  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    // if element not in collection indexOf() will return -1
    return collection.indexOf(element) !== -1;
  };

  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };

  // add element to the set
  this.add = function (element) {
    // check for duplicate
    // first check wether element already in set
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // this method will remove an element from the set
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };

  // return the size of the collection
  this.size = function () {
    return collection.length;
  };

  // these methods are not in ES6 module so we have to implement it ourselves
  // in ES6 module remove is delete method and size is a property not a method
  // so myset.size does not require parenthesis

  // return union of two sets as new set
  // all values of both sets excluding the duplicate
  this.union = function (otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function (e) {
      unionSet.add(e);
    });

    secondSet.forEach(function (e) {
      unionSet.add(e);
    });

    return unionSet;
  };

  // return intersection of two sets as new set
  // --common elements of every set
  this.intersection = function (otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // return difference of two sets as new set
  // the items that are on the one set but not the other set
  this.difference = function (otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });

    return differenceSet;
  };

  //this method will test if the set is subset of different set
  //test if the firstSet is contained in secondSet/otherSet
  this.subset = function (otherSet) {
    var firstSet = this.values();

    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
};

var setA = new mySet();
var setB = new mySet();

setA.add("v");
setA.add("c");
setB.add("q");
setB.add("v");
setB.add("r");

console.log(setA.subset(setB));

console.log(setA.values());
console.log(setB.values());

console.log("intersection", setA.intersection(setB).values());
console.log("difference", setA.difference(setB).values());
console.log("union", setA.union(setB).values());

// ES6 Set

var setC = new Set();
var setD = new Set();

setC.add("a");
setD.add("b");
setD.add("a");
setD.add("d");
setD.add("f");
console.log(setD.values()); //returns an iterator
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("a")); //returns full set
