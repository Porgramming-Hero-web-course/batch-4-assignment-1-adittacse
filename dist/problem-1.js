"use strict";
{
    function sumArray(arr) {
        let add = 0;
        arr.forEach(element => {
            add = add + element;
        });
        return add;
    }
    ;
    // output: 150
    const summationOfArrayNumbers = sumArray([10, 20, 30, 40, 50]);
    console.log(summationOfArrayNumbers);
}
