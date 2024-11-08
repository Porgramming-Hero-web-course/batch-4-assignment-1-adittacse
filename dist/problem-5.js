"use strict";
{
    const getProperty = (key, value) => {
        return key[value];
    };
    const person = { name: "Alice", age: 30 };
    console.log(getProperty(person, "name"));
}
