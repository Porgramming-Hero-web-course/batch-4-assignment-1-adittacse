{
    function sumArray(data: number[]) : number {
        let add : number = 0;
        data.forEach(element => {
            add = add + element;
        });
        return add;
    };

    // output: 150
    const summationOfArrayNumbers : number = sumArray([10, 20, 30, 40, 50]);
    console.log(summationOfArrayNumbers);
}