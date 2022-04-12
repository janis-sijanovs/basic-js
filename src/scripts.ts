// Spread Operator
// Task 1

console.log("")
console.log("Task 1")
console.log("")

const createArrayFromArrays = (arr1: number[], arr2: number[]): number[] => [...arr1].concat([...arr2]);

console.log(createArrayFromArrays([1, 2], [3, 4]))
console.log(createArrayFromArrays([1, 2], [3, 4, 5, 6]))

// Task 2

console.log("")
console.log("Task 2")
console.log("")

const pushString = (arr: string[], str: string): string[] => [...arr].concat([str]);

console.log(pushString(['Apple', 'Orange', 'Banana'], 'Kiwi'))

// Task 3

console.log("")
console.log("Task 3")
console.log("")

const addAsFirstElement = (arr: string[], str: string): string[] => [str].concat([...arr]);

console.log(addAsFirstElement(['Apple', 'Orange', 'Banana'], 'Kiwi'))

// Task 4

console.log("")
console.log("Task 4")
console.log("")

const mergeObjectProperties = (obj1: object, obj2: object): object => {
    const newObj = {...obj1, ...obj2}
    return newObj
}

console.log(mergeObjectProperties({ a:1, b:2 }, { c:3, d:4}))
console.log(mergeObjectProperties({ a:1, b:2 }, { c:3, d:4, e:5, f:6 }))

// Task 5

console.log("")
console.log("Task 5")
console.log("")

const newObjectWithProperty = (obj: object, newProperty: string): object => {
    const newObj = {...obj, favoriteMovie: newProperty}
    return newObj
}

console.log(newObjectWithProperty({ eyeColor: 'green', age: 10 }, 'Garfield'))
console.log(newObjectWithProperty({ eyeColor: 'blue', age: 15 }, 'Twilight'))