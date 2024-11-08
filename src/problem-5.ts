{
    const getProperty = <T, Q extends keyof T>(key: T, value: Q) : T[Q] => {
        return key[value];
    };

    
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}