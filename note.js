// variable 

var a = "cat";
a = "dog";
// let b = 12;
// const c = 34.6;

{
    // console.log(a);
    // console.log(b);
    // console.log(c);
    var a = "bat";
    let d = 13;
    // c = 35
    // console.log("14:", a);
    // console.log("15:", d);
}

// console.log("18:", a);
// console.log("19:", d);

// string
var name = "sakda homhuan";
var id = '543907776655';

var a = "1";
var b = "2";
console.log(a + b);

// number
var a = 1;
var b = 2;
console.log(a + b);

// array
var c = ["sakda", 56789, "cmu"]
console.log(c[0]);

// object
var d = {
    name: "sakda",
    id: 56789,
    university: "CMU"
}
console.log(d["id"]);
console.log(d.university);

// array object
var e = [
    { name: "guitar", id: 1 },
    { name: "bee", id: 2 },
    { name: "f", id: 3 },
    { name: "paan", id: 4 }
]
console.log(e[1].name);

// loop
// foreach
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// arr.forEach(i => console.log(i));

// for loop
for (var i = 1; i <= 10; i++) {
    console.log("for", i)
}

// while loop
var i = 1;
while (i <= 10) {
    console.log("while", i);
    i += 1
}

// if condition
var f = 1;

if (f == 0) {
    console.log("yes")
}

if (f == 0) {
    console.log("yes")
} else {
    console.log("no")
}

var value = 65;
if (value <= 50) {
    console.log("D")
}
else if (value <= 60) {
    console.log("C")
}
else if (value <= 79) {
    console.log("B")
}
else {
    console.log("A")
}

f == 0 ? console.log("yes") : console.log("no")


// object car oop
var car = {
    wheel: 4,
    door: 4,
    color: "red",
    start: function (s) {
        console.log(s)
    }
}

console.log(car.color);
var sound = car.start("แปร๊นๆ")

// function
// non parameter 

function plusNumber() {
    let a = 1;
    let b = 2;
    console.log(a + b);
}
plusNumber();

function plusNumberParams(a, b) {
    console.log(a + b);
}
plusNumberParams(1, 2);

// return function
var vatFunc = function (price) {
    return price * 0.07
}

// arrow function
var vatFunc2 = (price) => {
    return price * 0.07
}

var product = 356;
var vat = vatFunc2(product);
var price = product + vat;
console.log(price);
