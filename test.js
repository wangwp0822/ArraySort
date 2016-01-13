/**
 * Created by mm on 2016/1/12.
 */
/**
 * 测试快速排序
 */
/*
var quickSort = require('./QuickSort.js');
console.log('===================quickSortArray============');
var array = [12,4,6,13,65,76,23,54,76,32];
console.log(array);
console.log(quickSort.quickSortArray(array, 'asc'));
console.log(quickSort.quickSortArray(array, 'desc'));

console.log('===============quickSortObj================');
var arrayObj = [{'name':'a','id':23},{'name':'a','id':12},{'name':'a','id':2}];
console.log(arrayObj);
console.log(quickSort.quickSortObj(arrayObj, 'id', 'asc'));
console.log(quickSort.quickSortObj(arrayObj, 'id', 'desc'));*/
/**
 * 测试斐波那契数列
 * @type {exports}
 */
var fibonacci = require('./Fibonacci.js');
var s = new Date().getTime();
console.log(s);
console.log(fibonacci.lowFibonaccil(45));
var e = new Date().getTime();
console.log('程序消耗：'+(e-s)+'毫秒');
console.log('===============================================');
var s = new Date().getTime();
console.log(s);
console.log(fibonacci.highFibonaccil(45));
var e = new Date().getTime();
console.log('程序消耗：'+(e-s)+'毫秒');


