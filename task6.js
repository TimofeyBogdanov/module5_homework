// Дан массив. Проверить, одинаковые ли элементы в массиве и вывести результат true или false в консоль. Речь идёт не о двух рядом стоящих одинаковых элементах, а обо всех. Проверить, все ли элементы в массиве одинаковые.

let arr = [1, 1, 1, 1, 1];
let areTheSame = true;
for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) {
        areTheSame = false;
        break;
    }
}
console.log(areTheSame);