"use strict";

// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// console.log(isEmpty(schedule));

// schedule[`8:30`] = `Подьём`;

// console.log(isEmpty(schedule));

//=================================

// let salaries = {
//     'Vasya': 1213400,
//     'Petya': 202340,
//     'Dasha': 350
// }
// let result = 0;

// for(let key in salaries) {
//     result += salaries[key];
// }

// console.log(result);

//==================================

// let salaries = {
//     'Vasya': -Infinity,
//     'Petya': 2242424234523402340,
//     'Dasha': 343534534550
// };
// let max = 0;
// let maxName = '';

// for(let key in salaries) {
//     if (max < salaries[key]) {
//         max = salaries[key];
//         maxName = key;
//     }
// }
// console.log( maxName || `Нет сотрудников`);

//=====================================

// const menu = {
//   width: 232400,
//   height: 3213400,
//   title: "My name"
// };
// const num = 2;

// function isNumeric(n) {
//   return !Number.isNaN(parseFloat(n));
// }

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (isNumeric(obj[key])) {
//       obj[key] *= 2;
//     }
//     console.log(obj[key]);
//   }
// }
// multiplyNumeric(menu);
// console.log(menu);

//=======================================

