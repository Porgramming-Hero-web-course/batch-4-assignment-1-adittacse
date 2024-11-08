{
    type Person = {
        name: string
        age: number;
        email: string;
    };

    function validateKeys<T extends object>(data: T, keys: (keyof T)[]): boolean {
        // Here forEach() does not working. Don't know why!!!
        for (const key of keys) {
            if (!(key in data)) {
                return false;
            }
        }
        return true;
    };

    const person : Person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };

    console.log(validateKeys(person, ["name", "age"]));
}