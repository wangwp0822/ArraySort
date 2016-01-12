/**
 * Created by mm on 2016/1/12.
 */


exports.quickSortArray = function(array,dir) {
    
    dir  = dir || 'asc';
    if (array.length == 0) {
        return [];
    }
    var left = new Array();
    var right = new Array();
    var pivot = array[0];
    
    if (dir == 'asc') {
        for (var i  = 1 ; i < array.length ; i++) {
            array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
    } else{
        for (var i = 1 ; i < array.length ; i++) {
            array[i] > pivot ? left.push(array[i]) : right.push(array[i]);
        }
    }
    return this.quickSortArray(left, dir).concat(pivot, this.quickSortArray(right, dir));
};


exports.quickSortObj = function(array,key,dir) {
    dir = dir || 'asc';
    key = key || 'id';
    if(array.length == 0) {
        return [];
    }
    var left = new Array();
    var right = new Array();
    var pivot = array[0][key];
    var pivotObj = array[0];
    if (dir == 'asc') {
        for (var i = 1; i < array.length ; i++) {
            array[i][key] < pivot ? left.push(array[i]) : right.push(array[i]);
        }
    } else {
        for (var i = 1; i < array.length ; i ++) {
            array[i][key] > pivot ? left.push(array[i]) : right.push(array[i]);
        }
    }

    return this.quickSortObj(left, key, dir).concat(pivotObj, this.quickSortObj(right, key, dir));
};