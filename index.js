// Задача 1:
// Дан массив, выведите его элементы последовательно на экран. (forEach)

let arr = [5, 'Alex', 12, 'Ford'];

arr.forEach(function (item, index) {
    document.write(`${item} `);
})

// Задача 2:
// Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел.
// Воспользуйтесь методом map

const num = [2, 12, 5, 10, 4];

const pow = num.map(function(item, index) {
    return item ** 2;
});

console.log(pow);


// Задача 3 (filter):
// 1. Дан массив с числами. Оставьте в нем только отрицательные числа
// 2. Дан массив с числами. Оставьте в нем только четные числа 
// 3. Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// 4. Дан массив с числами. Посчитайте количество отрицательных чисел в этом массиве


let numbersToFilter = [3, -12, 34, 32, -1, 98, -43];
let numbersToFilter1 = [73, -82, 4, 92, -21, 38, -13];
let stringsToFilter = ['Alex', 'Ford Mustang', 'JavaScript', 'CSS'];

// let lessThanNull = numbersToFilter.filter(function(num) {
//     return num < 0;
// });
let lessThanNull = numbersToFilter.filter(function(num) {
    return num < 0;
});

numbersToFilter = lessThanNull;
console.log(numbersToFilter);

let evenNumbers = numbersToFilter1.filter(function (num) {
    return num % 2 === 0;
});

numbersToFilter1 = evenNumbers;
console.log(numbersToFilter1);

let longStrings = stringsToFilter.filter(function(num) {
    return num.length > 5;
});

stringsToFilter = longStrings;
console.log(longStrings);

let amountNumbers = numbersToFilter.filter(function(num) {
    return num < 0;
})

console.log(amountNumbers.length);


// Задача 4:
// 1. Дан массив с числами. Проверьте то, что все элементы в массиве больше нуля (every)
// 2. Дан массив с числами. Проверьте то, что в нем есть отрицательные элементы. (some)

const arrNumbers = [-34, 9, 23, -99, 15, -15];

function isPositive(num) {
    return num > 0;
}

function isNegtive(num) {
    return num < 0;
}

console.log( arrNumbers.every(isPositive) );
console.log( arrNumbers.some(isNegtive) );


// Задача 5:
// 1. Дан массив с числами. Найдите сумму этих чисел. Используйте reduce.
// 2. Дан массив с числами. Найдите сумму первых N элементов до первого нуля. Пример: [1, 2, 3, 0, 4, 5, 6] - суммируем
//  первые 3 элемента, так как дальше стоит элемент с числом 0, получаем 1 + 2 + 3 = 6 (reduce)


const numbersArr = [3, 8, 21, 0, 54, 78];

let result = numbersArr.reduce(function(initial, next) {
    return initial + next;
});

let zero = false;
let sum = numbersArr.reduce(function(initial, next) {
    if (!zero) {
        if (next === 0) {
            zero = true;
        }
        else {
            return initial + next;
        }
    }
    return initial;
});

console.log(result);
console.log(sum);