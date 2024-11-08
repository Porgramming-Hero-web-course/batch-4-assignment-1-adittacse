"use strict";
{
    function removeDuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }
    const result1 = removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6]);
    const result2 = removeDuplicates(["Aditta", "Aditta", "Masuk", "Ajim", "Ajim"]);
    console.log(result1);
    console.log(result2);
}
