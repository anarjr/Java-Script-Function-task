"use strict"


// let res ;
// function number(m) {
//     if (m>20 && m<50) {
//         res = m*3

//     }
//     console.log(res);

// }
// number(30);

// function number(m) {
//     if (m>20 && m<50) {
//         return m*3
//     }

// }
// console.log(number(30));
// let res;
// let number = (m) => {
//     if (m > 20 && m < 50) {
//         res = m * 3

//     }
//     console.log(res);
// }
// number(30)

// let number =(m)=>{
//     if (m > 20 && m < 50) {
//         return m*3       
//     }
// }
// console.log(number(30));


// const arr = [12, -4, 7, 0, 25, 3, 12, -8, 30, 5];
// const arr2 = [1, 2, 2, 3, 3, 3, 4];
// const sortedArr = [1, 2, 5, 9, 9, 15];
 
// //-------------------------------------------------- 2
// function t2a(a, b) {
//     if (a % 2 === 0 && b % 2 === 0) {
//         console.log(a * b);
//     } else {
//         console.log(a + b);
//     }
// }
// function t2b(a, b) {
//     if (a % 2 === 0 && b % 2 === 0) {
//         return a * b;
//     }
//     return a + b;
// }
// const t2c = (a, b) => {
//     if (a % 2 === 0 && b % 2 === 0) {
//         console.log(a * b);
//     } else {
//         console.log(a + b);
//     }
// };
// const t2d = (a, b) => {
//     if (a % 2 === 0 && b % 2 === 0) {
//         return a * b;
//     }
//     return a + b;
// };
// console.log("--- 2 ---");
// t2a(4, 6); console.log(t2b(4, 6)); t2c(3, 6); console.log(t2d(3, 6));
 
// //-------------------------------------------------- 3
// function t3a(m) {
//     if (m % 5 === 0) {
//         console.log(m ** 2);
//     } else {
//         console.log(m ** 3);
//     }
// }
// function t3b(m) {
//     if (m % 5 === 0) {
//         return m ** 2;
//     }
//     return m ** 3;
// }
// const t3c = (m) => {
//     if (m % 5 === 0) {
//         console.log(m ** 2);
//     } else {
//         console.log(m ** 3);
//     }
// };
// const t3d = (m) => {
//     if (m % 5 === 0) {
//         return m ** 2;
//     }
//     return m ** 3;
// };
// console.log("--- 3 ---");
// t3a(10); console.log(t3b(10)); t3c(3); console.log(t3d(3));
 
// //-------------------------------------------------- 4
// function t4a(m) {
//     let sum = 0;
//     for (let i = 2; i <= m; i += 2) { sum += i; }
//     console.log(sum);
// }
// function t4b(m) {
//     let sum = 0;
//     for (let i = 2; i <= m; i += 2) { sum += i; }
//     return sum;
// }
// const t4c = (m) => {
//     let sum = 0;
//     for (let i = 2; i <= m; i += 2) { sum += i; }
//     console.log(sum);
// };
// const t4d = (m) => {
//     let sum = 0;
//     for (let i = 2; i <= m; i += 2) { sum += i; }
//     return sum;
// };
// console.log("--- 4 ---");
// t4a(10); console.log(t4b(10)); t4c(10); console.log(t4d(10));
 
// //-------------------------------------------------- 5
// function t5a(n, m) {
//     let res = 1, found = false;
//     for (let i = n; i <= m; i++) {
//         if (i % 4 === 0) { res *= i; found = true; }
//     }
//     console.log(found ? res : 0);
// }
// function t5b(n, m) {
//     let res = 1, found = false;
//     for (let i = n; i <= m; i++) {
//         if (i % 4 === 0) { res *= i; found = true; }
//     }
//     return found ? res : 0;
// }
// const t5c = (n, m) => {
//     let res = 1, found = false;
//     for (let i = n; i <= m; i++) {
//         if (i % 4 === 0) { res *= i; found = true; }
//     }
//     console.log(found ? res : 0);
// };
// const t5d = (n, m) => {
//     let res = 1, found = false;
//     for (let i = n; i <= m; i++) {
//         if (i % 4 === 0) { res *= i; found = true; }
//     }
//     return found ? res : 0;
// };
// console.log("--- 5 ---");
// t5a(1, 13); console.log(t5b(1, 13)); t5c(1, 13); console.log(t5d(1, 13));
 
// //-------------------------------------------------- 6
// function t6a(a) {
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) { console.log(i); }
//     }
// }
// function t6b(a) {
//     const res = [];
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) { res.push(i); }
//     }
//     return res;
// }
// const t6c = (a) => {
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) { console.log(i); }
//     }
// };
// const t6d = (a) => {
//     const res = [];
//     for (let i = 1; i <= a; i++) {
//         if (a % i === 0) { res.push(i); }
//     }
//     return res;
// };
// console.log("--- 6 ---");
// t6a(12); console.log(t6b(12)); t6c(12); console.log(t6d(12));
 
// //-------------------------------------------------- 7
// function t7a(m, n) {
//     let count = 0;
//     for (let i = m; i <= n; i++) { if (i % 3 === 0) count++; }
//     console.log(count);
// }
// function t7b(m, n) {
//     let count = 0;
//     for (let i = m; i <= n; i++) { if (i % 3 === 0) count++; }
//     return count;
// }
// const t7c = (m, n) => {
//     let count = 0;
//     for (let i = m; i <= n; i++) { if (i % 3 === 0) count++; }
//     console.log(count);
// };
// const t7d = (m, n) => {
//     let count = 0;
//     for (let i = m; i <= n; i++) { if (i % 3 === 0) count++; }
//     return count;
// };
// console.log("--- 7 ---");
// t7a(1, 20); console.log(t7b(1, 20)); t7c(1, 20); console.log(t7d(1, 20));
 
// //-------------------------------------------------- 8
// function t8a(m, n) {
//     let sum = 0;
//     for (let i = m; i <= n; i++) { if (i % 7 === 0) sum += i; }
//     console.log(sum);
// }
// function t8b(m, n) {
//     let sum = 0;
//     for (let i = m; i <= n; i++) { if (i % 7 === 0) sum += i; }
//     return sum;
// }
// const t8c = (m, n) => {
//     let sum = 0;
//     for (let i = m; i <= n; i++) { if (i % 7 === 0) sum += i; }
//     console.log(sum);
// };
// const t8d = (m, n) => {
//     let sum = 0;
//     for (let i = m; i <= n; i++) { if (i % 7 === 0) sum += i; }
//     return sum;
// };
// console.log("--- 8 ---");
// t8a(1, 30); console.log(t8b(1, 30)); t8c(1, 30); console.log(t8d(1, 30));
 
// //-------------------------------------------------- 9
// function t9a(m, n) {
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0 && i % 3 === 0) { console.log(i); }
//     }
// }
// function t9b(m, n) {
//     const res = [];
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0 && i % 3 === 0) { res.push(i); }
//     }
//     return res;
// }
// const t9c = (m, n) => {
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0 && i % 3 === 0) { console.log(i); }
//     }
// };
// const t9d = (m, n) => {
//     const res = [];
//     for (let i = m; i <= n; i++) {
//         if (i % 2 === 0 && i % 3 === 0) { res.push(i); }
//     }
//     return res;
// };
// console.log("--- 9 ---");
// t9a(1, 30); console.log(t9b(1, 30)); t9c(1, 30); console.log(t9d(1, 30));
 
// //-------------------------------------------------- 10
// function t10a(m) {
//     let max = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > max) max = d;
//         m = Math.floor(m / 10);
//     }
//     console.log(max);
// }
// function t10b(m) {
//     let max = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > max) max = d;
//         m = Math.floor(m / 10);
//     }
//     return max;
// }
// const t10c = (m) => {
//     let max = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > max) max = d;
//         m = Math.floor(m / 10);
//     }
//     console.log(max);
// };
// const t10d = (m) => {
//     let max = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > max) max = d;
//         m = Math.floor(m / 10);
//     }
//     return max;
// };
// console.log("--- 10 ---");
// t10a(48273); console.log(t10b(48273)); t10c(48273); console.log(t10d(48273));
 
// //-------------------------------------------------- 11
// function t11a(m) {
//     let min = 9;
//     while (m > 0) {
//         let d = m % 10;
//         if (d < min) min = d;
//         m = Math.floor(m / 10);
//     }
//     console.log(min);
// }
// function t11b(m) {
//     let min = 9;
//     while (m > 0) {
//         let d = m % 10;
//         if (d < min) min = d;
//         m = Math.floor(m / 10);
//     }
//     return min;
// }
// const t11c = (m) => {
//     let min = 9;
//     while (m > 0) {
//         let d = m % 10;
//         if (d < min) min = d;
//         m = Math.floor(m / 10);
//     }
//     console.log(min);
// };
// const t11d = (m) => {
//     let min = 9;
//     while (m > 0) {
//         let d = m % 10;
//         if (d < min) min = d;
//         m = Math.floor(m / 10);
//     }
//     return min;
// };
// console.log("--- 11 ---");
// t11a(48273); console.log(t11b(48273)); t11c(48273); console.log(t11d(48273));
 
// //-------------------------------------------------- 12
// function t12a(m) {
//     let sum = 0;
//     while (m > 0) { sum += m % 10; m = Math.floor(m / 10); }
//     if (sum % 2 === 0) {
//         console.log("cüt");
//     } else {
//         console.log("tək");
//     }
// }
// function t12b(m) {
//     let sum = 0;
//     while (m > 0) { sum += m % 10; m = Math.floor(m / 10); }
//     if (sum % 2 === 0) {
//         return "cüt";
//     }
//     return "tək";
// }
// const t12c = (m) => {
//     let sum = 0;
//     while (m > 0) { sum += m % 10; m = Math.floor(m / 10); }
//     if (sum % 2 === 0) {
//         console.log("cüt");
//     } else {
//         console.log("tək");
//     }
// };
// const t12d = (m) => {
//     let sum = 0;
//     while (m > 0) { sum += m % 10; m = Math.floor(m / 10); }
//     if (sum % 2 === 0) {
//         return "cüt";
//     }
//     return "tək";
// };
// console.log("--- 12 ---");
// t12a(1234); console.log(t12b(1234)); t12c(1235); console.log(t12d(1235));
 
// //-------------------------------------------------- 13
// function t13a(m) {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 === 0) count++;
//         m = Math.floor(m / 10);
//     }
//     console.log(count);
// }
// function t13b(m) {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 === 0) count++;
//         m = Math.floor(m / 10);
//     }
//     return count;
// }
// const t13c = (m) => {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 === 0) count++;
//         m = Math.floor(m / 10);
//     }
//     console.log(count);
// };
// const t13d = (m) => {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 === 0) count++;
//         m = Math.floor(m / 10);
//     }
//     return count;
// };
// console.log("--- 13 ---");
// t13a(123456); console.log(t13b(123456)); t13c(123456); console.log(t13d(123456));
 
// //-------------------------------------------------- 14
// function t14a(m) {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 !== 0) count++;
//         m = Math.floor(m / 10);
//     }
//     console.log(count);
// }
// function t14b(m) {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 !== 0) count++;
//         m = Math.floor(m / 10);
//     }
//     return count;
// }
// const t14c = (m) => {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 !== 0) count++;
//         m = Math.floor(m / 10);
//     }
//     console.log(count);
// };
// const t14d = (m) => {
//     let count = 0;
//     while (m > 0) {
//         if ((m % 10) % 2 !== 0) count++;
//         m = Math.floor(m / 10);
//     }
//     return count;
// };
// console.log("--- 14 ---");
// t14a(123456); console.log(t14b(123456)); t14c(123456); console.log(t14d(123456));
 
// //-------------------------------------------------- 15
// function t15a(m) {
//     let sum = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > 5) sum += d;
//         m = Math.floor(m / 10);
//     }
//     console.log(sum);
// }
// function t15b(m) {
//     let sum = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > 5) sum += d;
//         m = Math.floor(m / 10);
//     }
//     return sum;
// }
// const t15c = (m) => {
//     let sum = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > 5) sum += d;
//         m = Math.floor(m / 10);
//     }
//     console.log(sum);
// };
// const t15d = (m) => {
//     let sum = 0;
//     while (m > 0) {
//         let d = m % 10;
//         if (d > 5) sum += d;
//         m = Math.floor(m / 10);
//     }
//     return sum;
// };
// console.log("--- 15 ---");
// t15a(1789462); console.log(t15b(1789462)); t15c(1789462); console.log(t15d(1789462));
 
// //-------------------------------------------------- 16
// function t16a(m) {
//     let rev = 0;
//     while (m > 0) {
//         rev = rev * 10 + m % 10;
//         m = Math.floor(m / 10);
//     }
//     console.log(rev);
// }
// function t16b(m) {
//     let rev = 0;
//     while (m > 0) {
//         rev = rev * 10 + m % 10;
//         m = Math.floor(m / 10);
//     }
//     return rev;
// }
// const t16c = (m) => {
//     let rev = 0;
//     while (m > 0) {
//         rev = rev * 10 + m % 10;
//         m = Math.floor(m / 10);
//     }
//     console.log(rev);
// };
// const t16d = (m) => {
//     let rev = 0;
//     while (m > 0) {
//         rev = rev * 10 + m % 10;
//         m = Math.floor(m / 10);
//     }
//     return rev;
// };
// console.log("--- 16 ---");
// t16a(12345); console.log(t16b(12345)); t16c(12345); console.log(t16d(12345));
 
// //-------------------------------------------------- 17
// function t17a(m) {
//     let x = m, rev = 0;
//     while (x > 0) {
//         rev = rev * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     if (rev === m) {
//         console.log("palindromdur");
//     } else {
//         console.log("palindrom deyil");
//     }
// }
// function t17b(m) {
//     let x = m, rev = 0;
//     while (x > 0) {
//         rev = rev * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return rev === m;
// }
// const t17c = (m) => {
//     let x = m, rev = 0;
//     while (x > 0) {
//         rev = rev * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     if (rev === m) {
//         console.log("palindromdur");
//     } else {
//         console.log("palindrom deyil");
//     }
// };
// const t17d = (m) => {
//     let x = m, rev = 0;
//     while (x > 0) {
//         rev = rev * 10 + x % 10;
//         x = Math.floor(x / 10);
//     }
//     return rev === m;
// };
// console.log("--- 17 ---");
// t17a(12321); console.log(t17b(12321)); t17c(12345); console.log(t17d(12345));
 
// //-------------------------------------------------- 18
// function t18a(m) {
//     let last = m % 10;
//     while (m >= 10) { m = Math.floor(m / 10); }
//     console.log(m + last);
// }
// function t18b(m) {
//     let last = m % 10;
//     while (m >= 10) { m = Math.floor(m / 10); }
//     return m + last;
// }
// const t18c = (m) => {
//     let last = m % 10;
//     while (m >= 10) { m = Math.floor(m / 10); }
//     console.log(m + last);
// };
// const t18d = (m) => {
//     let last = m % 10;
//     while (m >= 10) { m = Math.floor(m / 10); }
//     return m + last;
// };
// console.log("--- 18 ---");
// t18a(48273); console.log(t18b(48273)); t18c(48273); console.log(t18d(48273));
 
// //-------------------------------------------------- 19
// function t19a(m) {
//     let count = 0;
//     do {
//         if (m % 10 === 0) count++;
//         m = Math.floor(m / 10);
//     } while (m > 0);
//     console.log(count);
// }
// function t19b(m) {
//     let count = 0;
//     do {
//         if (m % 10 === 0) count++;
//         m = Math.floor(m / 10);
//     } while (m > 0);
//     return count;
// }
// const t19c = (m) => {
//     let count = 0;
//     do {
//         if (m % 10 === 0) count++;
//         m = Math.floor(m / 10);
//     } while (m > 0);
//     console.log(count);
// };
// const t19d = (m) => {
//     let count = 0;
//     do {
//         if (m % 10 === 0) count++;
//         m = Math.floor(m / 10);
//     } while (m > 0);
//     return count;
// };
// console.log("--- 19 ---");
// t19a(1020300); console.log(t19b(1020300)); t19c(1020300); console.log(t19d(1020300));
 
// //-------------------------------------------------- 20
// function t20a(m) {
//     let res = 1;
//     while (m > 0) {
//         res *= m % 10;
//         m = Math.floor(m / 10);
//     }
//     console.log(res);
// }
// function t20b(m) {
//     let res = 1;
//     while (m > 0) {
//         res *= m % 10;
//         m = Math.floor(m / 10);
//     }
//     return res;
// }
// const t20c = (m) => {
//     let res = 1;
//     while (m > 0) {
//         res *= m % 10;
//         m = Math.floor(m / 10);
//     }
//     console.log(res);
// };
// const t20d = (m) => {
//     let res = 1;
//     while (m > 0) {
//         res *= m % 10;
//         m = Math.floor(m / 10);
//     }
//     return res;
// };
// console.log("--- 20 ---");
// t20a(1234); console.log(t20b(1234)); t20c(1234); console.log(t20d(1234));
 
// // ================== ARRAY TAPŞIRIQLARI ==================
 
// //-------------------------------------------------- 21
// function t21a(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 10) count++; }
//     console.log(count);
// }
// function t21b(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 10) count++; }
//     return count;
// }
// const t21c = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 10) count++; }
//     console.log(count);
// };
// const t21d = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 10) count++; }
//     return count;
// };
// console.log("--- 21 ---");
// t21a(arr); console.log(t21b(arr)); t21c(arr); console.log(t21d(arr));
 
// //-------------------------------------------------- 22
// function t22a(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 10) sum += arr[i]; }
//     console.log(sum);
// }
// function t22b(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 10) sum += arr[i]; }
//     return sum;
// }
// const t22c = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 10) sum += arr[i]; }
//     console.log(sum);
// };
// const t22d = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 10) sum += arr[i]; }
//     return sum;
// };
// console.log("--- 22 ---");
// t22a(arr); console.log(t22b(arr)); t22c(arr); console.log(t22d(arr));
 
// //-------------------------------------------------- 23
// function t23a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) { console.log(arr[i]); }
//     }
// }
// function t23b(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) { res.push(arr[i]); }
//     }
//     return res;
// }
// const t23c = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) { console.log(arr[i]); }
//     }
// };
// const t23d = (arr) => {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) { res.push(arr[i]); }
//     }
//     return res;
// };
// console.log("--- 23 ---");
// t23a(arr); console.log(t23b(arr)); t23c(arr); console.log(t23d(arr));
 
// //-------------------------------------------------- 24
// function t24a(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] % 5 === 0) count++; }
//     console.log(count);
// }
// function t24b(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] % 5 === 0) count++; }
//     return count;
// }
// const t24c = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] % 5 === 0) count++; }
//     console.log(count);
// };
// const t24d = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] % 5 === 0) count++; }
//     return count;
// };
// console.log("--- 24 ---");
// t24a(arr); console.log(t24b(arr)); t24c(arr); console.log(t24d(arr));
 
// //-------------------------------------------------- 25
// function t25a(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) sum += arr[i]; }
//     console.log(sum);
// }
// function t25b(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) sum += arr[i]; }
//     return sum;
// }
// const t25c = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) sum += arr[i]; }
//     console.log(sum);
// };
// const t25d = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] < 0) sum += arr[i]; }
//     return sum;
// };
// console.log("--- 25 ---");
// t25a(arr); console.log(t25b(arr)); t25c(arr); console.log(t25d(arr));
 
// //-------------------------------------------------- 26
// function t26a(arr) {
//     let res = 1, found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) { res *= arr[i]; found = true; }
//     }
//     console.log(found ? res : 0);
// }
// function t26b(arr) {
//     let res = 1, found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) { res *= arr[i]; found = true; }
//     }
//     return found ? res : 0;
// }
// const t26c = (arr) => {
//     let res = 1, found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) { res *= arr[i]; found = true; }
//     }
//     console.log(found ? res : 0);
// };
// const t26d = (arr) => {
//     let res = 1, found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) { res *= arr[i]; found = true; }
//     }
//     return found ? res : 0;
// };
// console.log("--- 26 ---");
// t26a(arr); console.log(t26b(arr)); t26c(arr); console.log(t26d(arr));
 
// //-------------------------------------------------- 27
// function t27a(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] === 0) count++; }
//     console.log(count);
// }
// function t27b(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] === 0) count++; }
//     return count;
// }
// const t27c = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] === 0) count++; }
//     console.log(count);
// };
// const t27d = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] === 0) count++; }
//     return count;
// };
// console.log("--- 27 ---");
// t27a(arr); console.log(t27b(arr)); t27c(arr); console.log(t27d(arr));
 
// //-------------------------------------------------- 28
// function t28a(arr) {
//     let found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) console.log("cüt element yoxdur");
// }
// function t28b(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) { return arr[i]; }
//     }
//     return undefined;
// }
// const t28c = (arr) => {
//     let found = false;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             console.log(arr[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) console.log("cüt element yoxdur");
// };
// const t28d = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) { return arr[i]; }
//     }
//     return undefined;
// };
// console.log("--- 28 ---");
// t28a(arr); console.log(t28b(arr)); t28c(arr); console.log(t28d(arr));
 
// //-------------------------------------------------- 29
// function t29a(arr) {
//     let found = false;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) console.log("tək element yoxdur");
// }
// function t29b(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) { return arr[i]; }
//     }
//     return undefined;
// }
// const t29c = (arr) => {
//     let found = false;
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) {
//             console.log(arr[i]);
//             found = true;
//             break;
//         }
//     }
//     if (!found) console.log("tək element yoxdur");
// };
// const t29d = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] % 2 !== 0) { return arr[i]; }
//     }
//     return undefined;
// };
// console.log("--- 29 ---");
// t29a(arr); console.log(t29b(arr)); t29c(arr); console.log(t29d(arr));
 
// //-------------------------------------------------- 30
// function t30a(arr) {
//     let max = arr[0], min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log(max - min);
// }
// function t30b(arr) {
//     let max = arr[0], min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     return max - min;
// }
// const t30c = (arr) => {
//     let max = arr[0], min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     console.log(max - min);
// };
// const t30d = (arr) => {
//     let max = arr[0], min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) max = arr[i];
//         if (arr[i] < min) min = arr[i];
//     }
//     return max - min;
// };
// console.log("--- 30 ---");
// t30a(arr); console.log(t30b(arr)); t30c(arr); console.log(t30d(arr));
 
// //-------------------------------------------------- 31
// function t31a(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
//     console.log(sum / arr.length);
// }
// function t31b(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
//     return sum / arr.length;
// }
// const t31c = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
//     console.log(sum / arr.length);
// };
// const t31d = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) { sum += arr[i]; }
//     return sum / arr.length;
// };
// console.log("--- 31 ---");
// t31a(arr); console.log(t31b(arr)); t31c(arr); console.log(t31d(arr));
 
// //-------------------------------------------------- 32
// function t32a(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 20 && arr[i] < 50) count++; }
//     console.log(count);
// }
// function t32b(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 20 && arr[i] < 50) count++; }
//     return count;
// }
// const t32c = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 20 && arr[i] < 50) count++; }
//     console.log(count);
// };
// const t32d = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) { if (arr[i] > 20 && arr[i] < 50) count++; }
//     return count;
// };
// console.log("--- 32 ---");
// t32a(arr); console.log(t32b(arr)); t32c(arr); console.log(t32d(arr));
 
// //-------------------------------------------------- 33
// function t33a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 && arr[i] % 2 === 0) { console.log(arr[i]); }
//     }
// }
// function t33b(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 && arr[i] % 2 === 0) { res.push(arr[i]); }
//     }
//     return res;
// }
// const t33c = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 && arr[i] % 2 === 0) { console.log(arr[i]); }
//     }
// };
// const t33d = (arr) => {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0 && arr[i] % 2 === 0) { res.push(arr[i]); }
//     }
//     return res;
// };
// console.log("--- 33 ---");
// t33a(arr); console.log(t33b(arr)); t33c(arr); console.log(t33d(arr));
 
// //-------------------------------------------------- 34
// function t34a(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] % 2 !== 0) sum += arr[i];
//     }
//     console.log(sum);
// }
// function t34b(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] % 2 !== 0) sum += arr[i];
//     }
//     return sum;
// }
// const t34c = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] % 2 !== 0) sum += arr[i];
//     }
//     console.log(sum);
// };
// const t34d = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0 && arr[i] % 2 !== 0) sum += arr[i];
//     }
//     return sum;
// };
// console.log("--- 34 ---");
// t34a(arr); console.log(t34b(arr)); t34c(arr); console.log(t34d(arr));
 
// //-------------------------------------------------- 35
// function t35a(arr) {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[idx]) idx = i; }
//     console.log(idx);
// }
// function t35b(arr) {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[idx]) idx = i; }
//     return idx;
// }
// const t35c = (arr) => {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[idx]) idx = i; }
//     console.log(idx);
// };
// const t35d = (arr) => {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] > arr[idx]) idx = i; }
//     return idx;
// };
// console.log("--- 35 ---");
// t35a(arr); console.log(t35b(arr)); t35c(arr); console.log(t35d(arr));
 
// //-------------------------------------------------- 36
// function t36a(arr) {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[idx]) idx = i; }
//     console.log(idx);
// }
// function t36b(arr) {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[idx]) idx = i; }
//     return idx;
// }
// const t36c = (arr) => {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[idx]) idx = i; }
//     console.log(idx);
// };
// const t36d = (arr) => {
//     let idx = 0;
//     for (let i = 1; i < arr.length; i++) { if (arr[i] < arr[idx]) idx = i; }
//     return idx;
// };
// console.log("--- 36 ---");
// t36a(arr); console.log(t36b(arr)); t36c(arr); console.log(t36d(arr));
 
// //-------------------------------------------------- 37
// function t37a(arr) {
//     let even = 0, odd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even++; else odd++;
//     }
//     if (even > odd) {
//         console.log("Cüt elementlər çoxdur: " + even + " > " + odd);
//     } else if (odd > even) {
//         console.log("Tək elementlər çoxdur: " + odd + " > " + even);
//     } else {
//         console.log("Bərabərdir: " + even);
//     }
// }
// function t37b(arr) {
//     let even = 0, odd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even++; else odd++;
//     }
//     if (even > odd) return "Cüt elementlər çoxdur: " + even + " > " + odd;
//     if (odd > even) return "Tək elementlər çoxdur: " + odd + " > " + even;
//     return "Bərabərdir: " + even;
// }
// const t37c = (arr) => {
//     let even = 0, odd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even++; else odd++;
//     }
//     if (even > odd) {
//         console.log("Cüt elementlər çoxdur: " + even + " > " + odd);
//     } else if (odd > even) {
//         console.log("Tək elementlər çoxdur: " + odd + " > " + even);
//     } else {
//         console.log("Bərabərdir: " + even);
//     }
// };
// const t37d = (arr) => {
//     let even = 0, odd = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even++; else odd++;
//     }
//     if (even > odd) return "Cüt elementlər çoxdur: " + even + " > " + odd;
//     if (odd > even) return "Tək elementlər çoxdur: " + odd + " > " + even;
//     return "Bərabərdir: " + even;
// };
// console.log("--- 37 ---");
// t37a(arr); console.log(t37b(arr)); t37c(arr); console.log(t37d(arr));
 
// //-------------------------------------------------- 38
// function t38a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c === 1) console.log(arr[i]);
//     }
// }
// function t38b(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c === 1) res.push(arr[i]);
//     }
//     return res;
// }
// const t38c = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c === 1) console.log(arr[i]);
//     }
// };
// const t38d = (arr) => {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c === 1) res.push(arr[i]);
//     }
//     return res;
// };
// console.log("--- 38 ---");
// t38a(arr); console.log(t38b(arr)); t38c(arr); console.log(t38d(arr));
 
// //-------------------------------------------------- 39
// function t39a(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > 1 && arr.indexOf(arr[i]) === i) count++;
//     }
//     console.log(count);
// }
// function t39b(arr) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > 1 && arr.indexOf(arr[i]) === i) count++;
//     }
//     return count;
// }
// const t39c = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > 1 && arr.indexOf(arr[i]) === i) count++;
//     }
//     console.log(count);
// };
// const t39d = (arr) => {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > 1 && arr.indexOf(arr[i]) === i) count++;
//     }
//     return count;
// };
// console.log("--- 39 ---");
// t39a(arr2); console.log(t39b(arr2)); t39c(arr2); console.log(t39d(arr2));
 
// //-------------------------------------------------- 40
// function t40a(arr) {
//     for (let i = arr.length - 1; i >= 0; i--) { console.log(arr[i]); }
// }
// function t40b(arr) {
//     const res = [];
//     for (let i = arr.length - 1; i >= 0; i--) { res.push(arr[i]); }
//     return res;
// }
// const t40c = (arr) => {
//     for (let i = arr.length - 1; i >= 0; i--) { console.log(arr[i]); }
// };
// const t40d = (arr) => {
//     const res = [];
//     for (let i = arr.length - 1; i >= 0; i--) { res.push(arr[i]); }
//     return res;
// };
// console.log("--- 40 ---");
// t40a(arr); console.log(t40b(arr)); t40c(arr); console.log(t40d(arr));
 
// //-------------------------------------------------- 41
// function t41a(arr) {
//     let max = -Infinity, second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { second = max; max = arr[i]; }
//         else if (arr[i] > second && arr[i] !== max) { second = arr[i]; }
//     }
//     console.log(second);
// }
// function t41b(arr) {
//     let max = -Infinity, second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { second = max; max = arr[i]; }
//         else if (arr[i] > second && arr[i] !== max) { second = arr[i]; }
//     }
//     return second;
// }
// const t41c = (arr) => {
//     let max = -Infinity, second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { second = max; max = arr[i]; }
//         else if (arr[i] > second && arr[i] !== max) { second = arr[i]; }
//     }
//     console.log(second);
// };
// const t41d = (arr) => {
//     let max = -Infinity, second = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) { second = max; max = arr[i]; }
//         else if (arr[i] > second && arr[i] !== max) { second = arr[i]; }
//     }
//     return second;
// };
// console.log("--- 41 ---");
// t41a(arr); console.log(t41b(arr)); t41c(arr); console.log(t41d(arr));
 
// //-------------------------------------------------- 42
// function t42a(arr) {
//     let min = Infinity, second = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) { second = min; min = arr[i]; }
//         else if (arr[i] < second && arr[i] !== min) { second = arr[i]; }
//     }
//     console.log(second);
// }
// function t42b(arr) {
//     let min = Infinity, second = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) { second = min; min = arr[i]; }
//         else if (arr[i] < second && arr[i] !== min) { second = arr[i]; }
//     }
//     return second;
// }
// const t42c = (arr) => {
//     let min = Infinity, second = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) { second = min; min = arr[i]; }
//         else if (arr[i] < second && arr[i] !== min) { second = arr[i]; }
//     }
//     console.log(second);
// };
// const t42d = (arr) => {
//     let min = Infinity, second = Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) { second = min; min = arr[i]; }
//         else if (arr[i] < second && arr[i] !== min) { second = arr[i]; }
//     }
//     return second;
// };
// console.log("--- 42 ---");
// t42a(arr); console.log(t42b(arr)); t42c(arr); console.log(t42d(arr));
 
// //-------------------------------------------------- 43
// function t43a(arr) {
//     let max1 = -Infinity, max2 = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) { max2 = max1; max1 = arr[i]; }
//         else if (arr[i] > max2) { max2 = arr[i]; }
//     }
//     console.log(max1 + max2);
// }
// function t43b(arr) {
//     let max1 = -Infinity, max2 = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) { max2 = max1; max1 = arr[i]; }
//         else if (arr[i] > max2) { max2 = arr[i]; }
//     }
//     return max1 + max2;
// }
// const t43c = (arr) => {
//     let max1 = -Infinity, max2 = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) { max2 = max1; max1 = arr[i]; }
//         else if (arr[i] > max2) { max2 = arr[i]; }
//     }
//     console.log(max1 + max2);
// };
// const t43d = (arr) => {
//     let max1 = -Infinity, max2 = -Infinity;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max1) { max2 = max1; max1 = arr[i]; }
//         else if (arr[i] > max2) { max2 = arr[i]; }
//     }
//     return max1 + max2;
// };
// console.log("--- 43 ---");
// t43a(arr); console.log(t43b(arr)); t43c(arr); console.log(t43d(arr));
 
// //-------------------------------------------------- 44
// // a, c: array-in özünü dəyişir və çap edir. b, d: yeni array qaytarır.
// function t44a(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) arr[i] = -arr[i];
//     }
//     console.log(arr);
// }
// function t44b(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] < 0 ? -arr[i] : arr[i]);
//     }
//     return res;
// }
// const t44c = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) arr[i] = -arr[i];
//     }
//     console.log(arr);
// };
// const t44d = (arr) => {
//     const res = [];
//     for (let i = 0; i < arr.length; i++) {
//         res.push(arr[i] < 0 ? -arr[i] : arr[i]);
//     }
//     return res;
// };
// console.log("--- 44 ---");
// t44a([...arr]); console.log(t44b(arr)); t44c([...arr]); console.log(t44d(arr));
 
// //-------------------------------------------------- 45
// function t45a(arr) {
//     const even = [], odd = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even.push(arr[i]); else odd.push(arr[i]);
//     }
//     console.log("Cüt:", even);
//     console.log("Tək:", odd);
// }
// function t45b(arr) {
//     const even = [], odd = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even.push(arr[i]); else odd.push(arr[i]);
//     }
//     return { even, odd };
// }
// const t45c = (arr) => {
//     const even = [], odd = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even.push(arr[i]); else odd.push(arr[i]);
//     }
//     console.log("Cüt:", even);
//     console.log("Tək:", odd);
// };
// const t45d = (arr) => {
//     const even = [], odd = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) even.push(arr[i]); else odd.push(arr[i]);
//     }
//     return { even, odd };
// };
// console.log("--- 45 ---");
// t45a(arr); console.log(t45b(arr)); t45c(arr); console.log(t45d(arr));
 
// //-------------------------------------------------- 46
// function t46a(arr) {
//     let sum3 = 0, sumNot3 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) sum3 += arr[i]; else sumNot3 += arr[i];
//     }
//     console.log(sum3 - sumNot3);
// }
// function t46b(arr) {
//     let sum3 = 0, sumNot3 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) sum3 += arr[i]; else sumNot3 += arr[i];
//     }
//     return sum3 - sumNot3;
// }
// const t46c = (arr) => {
//     let sum3 = 0, sumNot3 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) sum3 += arr[i]; else sumNot3 += arr[i];
//     }
//     console.log(sum3 - sumNot3);
// };
// const t46d = (arr) => {
//     let sum3 = 0, sumNot3 = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) sum3 += arr[i]; else sumNot3 += arr[i];
//     }
//     return sum3 - sumNot3;
// };
// console.log("--- 46 ---");
// t46a(arr); console.log(t46b(arr)); t46c(arr); console.log(t46d(arr));
 
// //-------------------------------------------------- 47
// function t47a(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) { console.log(arr[i]); }
//     }
// }
// function t47b(arr) {
//     const res = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) { res.push(arr[i]); }
//     }
//     return res;
// }
// const t47c = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) { console.log(arr[i]); }
//     }
// };
// const t47d = (arr) => {
//     const res = [];
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] === arr[i + 1]) { res.push(arr[i]); }
//     }
//     return res;
// };
// console.log("--- 47 ---");
// t47a(arr2); console.log(t47b(arr2)); t47c(arr2); console.log(t47d(arr2));
 
// //-------------------------------------------------- 48
// function t48a(arr) {
//     let best = arr[0], bestCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > bestCount) { bestCount = c; best = arr[i]; }
//     }
//     console.log(best);
// }
// function t48b(arr) {
//     let best = arr[0], bestCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > bestCount) { bestCount = c; best = arr[i]; }
//     }
//     return best;
// }
// const t48c = (arr) => {
//     let best = arr[0], bestCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > bestCount) { bestCount = c; best = arr[i]; }
//     }
//     console.log(best);
// };
// const t48d = (arr) => {
//     let best = arr[0], bestCount = 0;
//     for (let i = 0; i < arr.length; i++) {
//         let c = 0;
//         for (let j = 0; j < arr.length; j++) { if (arr[i] === arr[j]) c++; }
//         if (c > bestCount) { bestCount = c; best = arr[i]; }
//     }
//     return best;
// };
// console.log("--- 48 ---");
// t48a(arr2); console.log(t48b(arr2)); t48c(arr2); console.log(t48d(arr2));
 
// //-------------------------------------------------- 49
// function t49a(a, b) {
//     const seen = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i]) && !seen.includes(a[i])) {
//             seen.push(a[i]);
//             console.log(a[i]);
//         }
//     }
// }
// function t49b(a, b) {
//     const res = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i]) && !res.includes(a[i])) { res.push(a[i]); }
//     }
//     return res;
// }
// const t49c = (a, b) => {
//     const seen = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i]) && !seen.includes(a[i])) {
//             seen.push(a[i]);
//             console.log(a[i]);
//         }
//     }
// };
// const t49d = (a, b) => {
//     const res = [];
//     for (let i = 0; i < a.length; i++) {
//         if (b.includes(a[i]) && !res.includes(a[i])) { res.push(a[i]); }
//     }
//     return res;
// };
// console.log("--- 49 ---");
// t49a(arr, [3, 12, 99, 5]); console.log(t49b(arr, [3, 12, 99, 5]));
// t49c(arr, [3, 12, 99, 5]); console.log(t49d(arr, [3, 12, 99, 5]));
 
// //-------------------------------------------------- 50
// function t50a(arr) {
//     let sorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) { sorted = false; break; }
//     }
//     if (sorted) {
//         console.log("artan sıra ilə düzülüb");
//     } else {
//         console.log("artan sıra ilə düzülməyib");
//     }
// }
// function t50b(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) { return false; }
//     }
//     return true;
// }
// const t50c = (arr) => {
//     let sorted = true;
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) { sorted = false; break; }
//     }
//     if (sorted) {
//         console.log("artan sıra ilə düzülüb");
//     } else {
//         console.log("artan sıra ilə düzülməyib");
//     }
// };
// const t50d = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) { return false; }
//     }
//     return true;
// };
// console.log("--- 50 ---");
// t50a(sortedArr); console.log(t50b(sortedArr)); t50c(arr); console.log(t50d(arr));
 