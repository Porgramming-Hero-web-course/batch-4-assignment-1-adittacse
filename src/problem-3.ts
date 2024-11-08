{
    function countWordOccurrences(data : string, word: string) : number {
        let count : number = 0;
        word = word.toLocaleLowerCase();
        const newArray : string[] = data.toLocaleLowerCase().split(" ");
        newArray.forEach(item => {
            if (item.startsWith(word) && item.endsWith(word)) {
                count += 1;
            }
        });
        return count;
    };

    const result = countWordOccurrences("I love typescript TypeScript  and TYPESCRIPT", "typeScript");

    console.log(result);
}