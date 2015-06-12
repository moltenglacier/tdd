var longestString =  function(){
  return Array.prototype.reduce.call(arguments, function (total, e) {
  if (typeof e === "string" && e.length > total.length) {
    return e;
  } else {
    return total;
  }
  }, "");
}


console.assert(longestString("abc","abbb","donkey") === "donkey");
console.assert(longestString(1,[3,4,5,6,7],"donkey", "hundred") ===  "hundred");
console.assert(longestString("1",{one: "two", two: "three"},"money") === "money");

function nextFib(number){
  var x = 0, y = 1, z;
  for (; x < number;) {
    if (x === number) {
      break;
    }
    z = y;
    y += x;
    x = z;
  }
  return y;
};

console.assert(nextFib(21) === 34);
console.assert(nextFib(233) === 377);
console.assert(nextFib(1597) === 2584);

var operate = function(symbol){
  return function(x, y) {
    return eval(x + symbol + y);
  };
};

console.assert(operate('+')(2,2) === 4);
console.assert(operate('-')(5,4) === 1);
console.assert(operate('*')(4,3) === 12);
console.assert(operate('/')(4,2) === 2);

var mergeArraySort = function() {
  return Array.prototype.reduce.call(arguments, function (total, current) {
    return total.concat(current);
  }).sort(function(a, b) {
    return a - b;
  });
}

console.assert(mergeArraySort([1,4,6,10],[2,2,3],[9,14,15,1,9]).join("!@#$") === [1,1,2,2,3,4,6,9,9,10,14,15].join("!@#$"));
console.assert(mergeArraySort([1,2],[4,5],[9,9],[3,2]).join("*&^%") === [1,2,2,3,4,5,9,9].join("*&^%"));

function fixer(a, b, c) {
  var arr = [a, b, c].sort(function(x,y){ return y - x;});
  return Math.pow(arr[0], arr[1] * arr[2]);
}

console.assert(fixer(3, 9, 2) === 531441);
console.assert(fixer(2, 4, 7) === 5764801);
console.assert(fixer(.5, 4, 13) === 169);

function decode(a,b,c) {
  a = a.toString().toLowerCase();
  b = b.toString().toLowerCase();
  c = c.toString().toLowerCase();
  var concat = a[0] + b[0] + c[0] + a[1] + b[1] + c[1];
  return Number(concat) ? Number(concat) : concat;
}

console.assert(decode("Ci", "on", "dg") === "coding")
console.assert(decode(29,53,20) === 252930)

var words = { 1: "a", 2: "my", 3: "dog", 4: "will", 5: "barks", 6: "barked"}

function createSentence(){
  return Array.prototype.map.call(arguments, function(elem){
    return words[elem];
  }).join(" ");
};

console.assert(createSentence(2, 3, 5) === "my dog barks");

var numbers = {
100: 'hundred',
90: 'ninety',
80: 'eighty',
70: 'seventy',
60: 'sixty',
50: 'fifty',
40: 'forty',
30: 'thirty',
20: 'twenty',
19: 'nineteen',
18: 'eighteen',
17: 'seventeen',
16: 'sixteen',
15: 'fifteen',
14: 'fourteen',
13: 'thirteen',
12: 'twelve',
11: 'eleven',
10: 'ten',
9: 'nine',
8: 'eight',
7: 'seven',
6: 'six',
5: 'five',
4: 'four',
3: 'three',
2: 'two',
1: 'one'
};

function getNumber(string){
  var num;
  for (key in numbers){
    if (numbers[key] === string){
      num = key;
    }
  }
  return num;
}

function getEnglish (quantity){
  var words = [];
  for (key in numbers){
    if (Math.floor(key / quantity) > 0) {
      continue;
      }

    var smallNum = Math.floor(quantity / key);

    if (smallNum === 1 && key === 100) {
      words.push("one");
    }
    console.log(smallNum);
    if (smallNum > 1){
      words.concat(getEnglish(smallNum));
    }
    console.log(words);
    console.log(numbers[key]);
    if (key <= quantity){
      words.push(numbers[key]);
      quantity = quantity - smallNum * key;
    }
  }
  return words;
}

function numberMultiplier(a, b){
  a = getNumber(a);
  b = getNumber(b);
  c = a * b;
  return getEnglish(c).join(" ");
}

console.log("Number = ", numberMultiplier("six","twenty"));
console.assert(numberMultiplier("ten","five") === "fifty");
console.assert(numberMultiplier("six","twenty") === "one hundred and twenty")
