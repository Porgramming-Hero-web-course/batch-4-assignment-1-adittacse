"use strict";
{
    function validateKeys(data, keys) {
        for (const key of keys) {
            if (!(key in data)) {
                return false;
            }
        }
        return true;
    }
    ;
    const person = {
        name: "Alice",
        age: 25,
        email: "alice@example.com"
    };
    console.log(validateKeys(person, ["name", "age"]));
}
