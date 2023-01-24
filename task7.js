// Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

// При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

let arr = [1, 2, 3, 4, 0, null, true, undefined, NaN, 7];
let evenCounter = 0;
let oddCounter = 0;
let zeroCounter = 0;
for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i]) !== true && typeof arr[i] === 'number') {
        if (arr[i] % 2 === 0) {
            if (arr[i] === 0) {
                zeroCounter++;
            } else evenCounter++;
        } else oddCounter++
    }
}
console.log(`Четных ненулевых элементов: ${evenCounter}`);
console.log(`Нечетных элементов: ${oddCounter}`);
console.log(`Нулей: ${zeroCounter}`);