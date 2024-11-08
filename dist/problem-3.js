"use strict";
{
    function countWordOccurrences(data, word) {
        let count = 0;
        word = word.toLocaleLowerCase();
        const newArray = data.toLocaleLowerCase().split(" ");
        newArray.forEach(item => {
            if (item.startsWith(word) && item.endsWith(word)) {
                count += 1;
            }
        });
        return count;
    }
    ;
    const result = countWordOccurrences("I love typescript TypeScript  and TYPESCRIPT", "typeScript");
    console.log(result);
}
