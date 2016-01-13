/**
 * Created by mm on 2016/1/13.
 */

exports.lowFibonaccil = function(n) {
    if ( n <= 2) {
        return 1;
    } else {
        return this.lowFibonaccil(n - 1) + this.lowFibonaccil(n -2);
    }
}

exports.highFibonaccil = function(n) {
    var c = new Array(n);
    for (var i  = 0 ; i < n;i++) {
        c[i] = 0;
    }
    return this.fibonaccil(n, c);
};

exports.fibonaccil = function(n, array) {
    var index = n - 1;
    if(array[index] != 0 ){
        return array[index];
    }
    if (n <= 2) {
        array[index] = 1;
    } else {
        array[index] = this.fibonaccil(n - 1, array) + this.fibonaccil(n - 2, array);
    }
    return array[index];
};
