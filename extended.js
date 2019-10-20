'use strict';

let num = 266219;
num = num.toString();
console.log(typeof num);
let prod = num[0]*num[1]*num[2]*num[3]*num[4]*num[5];
console.log('prod: ', prod);

let cube = (prod ** 3);
cube = String(cube);
console.log('cube: ', cube);

alert ('cube: '+ cube.substr(0,2));
