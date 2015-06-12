function objectsEqual() {
  var a = arguments[0];
  var b = arguments[1];
  var equal = true;
  Object.keys(a).forEach(function(key){
    if(equal)
      equal = a[key] === b[key] ? true : false;
  });
  return equal;
}

var doubler = function(a, b) {
  if(areFunctions(a, b)){
    return a() * 2 + b() * 2;
  }
  if(isObject(a)){
    Object.keys(a).forEach(function(acc, key){
      a[key] += a[key];
    });
    return a;
  }
  return a + a + b + b;
};

function isObject(a){
  return is(a, 'object');
}

function areFunctions(a, b){
  return is(a, 'function') && is(b, 'function');
}

function is(a, type){
  return typeof a === type;
}

// Do not change below this line

console.assert(doubler(4,2) === 12);
console.assert(doubler(1,3) === 8);
console.assert(doubler(-1,3) === 4);

console.assert(doubler("a", "b") === "aabb");
console.assert(doubler("coding", "rocks") === "codingcodingrocksrocks");

function m3() { return 3; }
function m4() { return 4; }
function m2() { return 2; }
function m1() { return 1; }

console.assert(doubler(m4, m2) === 12);
console.assert(doubler(m1, m3) === 8);

var a = { z: 42 , t: 7 }, b = { t: 7, z: 42 }

console.assert(objectsEqual(a, b));
console.assert(objectsEqual(b, a));

objectsEqual(doubler({x1: 1, x2: 4}), {x1: 2, x2: 8});
objectsEqual(doubler({x1: -4, x2: 0}), {x1: -8, x2: 0});
