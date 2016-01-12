/**
 * Created by mm on 2016/1/12.
 */
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
console.log(quickSort.quickSortObj(arrayObj, 'id', 'desc'));