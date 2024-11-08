# The significance of union and intersection types in Typescript.

Typescript is giving extra ordinary power to the JavaScript to maintain the code quality. It's declaring types of every variable, functions, class properties, class methods and many more features. Among these features, union and intersection types used to manage to overcome complexity of data types. Let's discuss on these topics.

### Union Type

Suppose a function receiving multiple data types like string, number, array. But after the processing of a function, it returns only one data type of output. It can't returns multiple data type.

To overcome this complexity of data types, TypScript provides union type "|". It manage multiple data types together to ignoring errors and flexibility of the code. 

* Here is an example of union type.

```
function removeDuplicates(data : number[] | string[]) : number[] | string[] {
    return data.filter((item : any, index : any) => data.indexOf(item) === index);
}

const result1 = removeDuplicates([1, 1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5, 6, 6]);
const result2 = removeDuplicates(["Aditta", "Aditta", "Masuk", "Ajim", "Ajim"]);

console.log(result1);
console.log(result2);
```

### Intersection Type

Intersection type is opponent of union type, where intersection type combine multiple data types into one. It means, intersection type create new object types that must require every properties by default. One more thing, if we want to put anyone properties of object is optional then we can do using optional chaining "?".

* Here is an example of intersection type.

```
interface Owner {
    name: string;  // required
    contact?: number;  // optional
};

interface Car {
    name: string;
    model: string;
    releaseYar: number;
};

type CarOwner = Owner & Car;

const user : CarOwner = {
    name: "Mr. X",
    model: "Toyota Vellfire",
    releaseYear: 2016,
};

console.log(user);
```