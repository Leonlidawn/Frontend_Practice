// 11. Use JavaScript to print the first 10 numbers that are multiples of 4 but not 5 between 0 and 100.

function echo(a) {
  console.log(a);
}

var counter;
for (counter = 0; counter <= 100; counter++) {
  if (counter % 4 == 0 && counter % 5 > 0) {
    echo(counter);
  }
}



// 12. (TWO SUM) Given an array of integers, find two numbers such that they add up to a specific target number.
// The function twoSum should return an array of indices of the two numbers such that they add up to the target, 
// where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are zero-based.


echo('12.(TWO SUM) Given an array of integers, find two numbers such that they add up to a specific target number.\n\nThe function twoSum should return an array of indices of the two numbers such that they add up to the target,where index1 must be less than index2.Please note that your returned answers(both index1 and index2) are zero - based.')


//preconditions: only 2 numbers in the array can add up to target number.
//every occurance of the number can only be used once.
function tweSum(intArray, target) {

  var length = intArray.length;
  var counter1;
  var current;

  for (counter1 = 0; counter1 < length; counter1++) {
    current = intArray[counter1];
    var counter2;
    for (counter2 = counter1 + 1; counter2 < length; counter2++) {
      if (current + intArray[counter2] == target) {
        return [counter1, counter2];
      }
    }
  }
  return 'answer not found';
}



// 13. Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.


function shorterString(a, b) {

  return (a.length < b.length) ? a.length : b.length;

}


//given a string, check occurance of the second argument(the letter).
function stringCount(string, letter) {
  var count = 0;
  var counter;
  // var charArray = string.split("");
  for (counter = 0; counter < string.length; string++) {
    if (string.charAt(counter) == letter) {
      count++;
    }
  }
  return count;
}

function hui(string) {
  let hashMap = new Map();
  let oddOcurance = 0;
  //用hashmap储存每一个字母，以及其出现次数
  //检查是否不能%2的是否超过1个，超过则不是
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    hashMap.get(char) ? hashMap.set(char, 1 + hashMap.get(char)) : hashMap.set(char, 1);
  }
  console.log(hashMap.values());

  //for of 是给iterator用的，for in是个collection用的
  for (let j of hashMap.values()) {
    console.log("j=" + j);
    console.log("j%2=" + j % 2);

    if (j % 2) {
      oddOcurance++;
      console.log(oddOcurance);

    }
  }
  console.log(hashMap);
  return !(oddOcurance > 1);
}
hui("abcd");
hui("abba");
hui("abbbba");
hui("a");
hui("aabb");

//usign backticks in a print string.
function logNameAndAge(name, age) {
  console.log(`my name is ${name} \n my age is ${age}`);
}


//writing arrow funcntions
const square = x => x * x;

const getBoundedRandomNumber = max => (Math.round(Math.random()) * 2 - 1) * Math.floor(Math.random() * max);

const car = {
  model: 'Cayenne',
  manufacturer: 'porsche',
  getFullName: () => `${this.manufacturer} ${this.model}`,
}






//=================== class 5=======================================================
//==================================================================================

// 1. Implement a Person class. We need to store height, weight and BMI data in the class. We do not want other people to access weight directly and we want to calculate BMI based on height and weight. Make sure you can change height and weight anytime after the instance is initialised.
// Bonus 1: Make sure the height is always between 0 – 300 cm. Make sure the weight is always between 0 and 1000kg.
// Bonus 2: Assume that the person’s height is fixed. Allow set weight based on BMI.

//question: how to write a private method with closure in this class? 
class Person {
  constructor(height, weight) {
    if (height > 300 || height <= 0) {
      console.error("height should be more than 0cm and less than 300cm!");
      return null;
    }

    if (weight > 1000 || weight <= 0) {
      console.error("weight should be more than 0kg and less than 1000kg!");
      return null;
    }
    this.height = height;
    this.weight = weight;
    this.bmi = this.weight / this.height;
  }

  get height() {
    return this._height;
  }

  get weight() {
    return this._weight;
  }

  get bmi() {
    return this._bmi;
  }

  set weight(weight) {
    this._weight = weight;
    this._bmi = this._weight / this._height;
  }

  set bmi(bmi) {
    this._bmi = bmi;
    this._weight = this._bmi * this._height;
  }

}




// 2. What gets logged when user clicks on the ‘Button 4’ and why? If there is a problem with this implementation, can you use two different methods to fix it?

function original() {
  for (var i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);
  }
}





// the value of i is 5 at the end of the function is executed, therefore all btn will print i as 5 in the function.
// to correct this:
//we can use let instead of var since let is block scoped, everytime it creates a new i in the loop
function original() {
  for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', function () { console.log(i); });
    document.body.appendChild(btn);
  }
}

function original() {
  for (let i = 0; i < 5; i++) {
    var btn = document.createElement('button');
    btn.appendChild(document.createTextNode('Button ' + i));
    btn.addEventListener('click', (function () { () => console.log(i); })(i));
    document.body.appendChild(btn);
  }
}

//以下是简化例子
function o() {
  var btn = {};
  for (let i = 0; i < 5; i++) {
    btn[i] = function () { console.log(i) };
  }
  return btn;
}
//用let
function o() {
  var btn = {};
  for (let i = 0; i < 5; i++) {
    btn[i] = function () { console.log(i) };
  }
  return btn;
}

//在外面套一个iife, 注意用这种方法的时候我们还是需要给iife传参数，不然如果iife没有使用参数的话还是不行。
//注意iife是即时执行，这个解法是把数据存在iife的返回值里，下面iife返回的是一个已经带有正确数值的function.
function o() {
  var btn = {};
  for (var i = 0; i < 5; i++) {
    btn[i] = (function (a) {
      return () => { console.log(a); };
    })(i);
  }
  return btn;
}
// let a = o();
// a[1](); //1


// 3. Write a JavaScript program to determine whether a given year is a leap year (you do not need to consider BC years).
function isLeapYear(year) {
  // The year can be evenly divided by 4;
  // If the year can be evenly divided by 100, it is NOT a leap year, unless;
  // The year is also evenly divisible by 400. Then it is a leap year.

  //anything larger than 0 means true in js, if any of the mod operation not 0 below, it is not a leap year
  if (year % 4 || year % 100 || year % 400) {
    return false;
  }
  return true;

}






//=================== tute 1 =======================================================
//==================================================================================
//tute exercise
function func(a) {
  let b = a.split(' ');
  let c = {};
  c.num = a[0];
  return c;
}

//find the second largest number
//sort默认是从小到大的。
//1.自定义比较器的原理:
// 两个参数a,b
// 如果a>b  则a-b>0  返回一个正数   代表b优先
// 如果a<b  则a-b<0  返回一个负数   代表a优先
// 如果a=b  则a-b=0  返回0    代表一样
function secL(nums) {
  return nums.sort((a, b) => b - a)[1];
}
