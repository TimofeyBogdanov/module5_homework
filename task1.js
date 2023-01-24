// Напишите программу, которая работала бы следующим образом: в prompt вводится значение. С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число, затем проверить с помощью typeof, принадлежит ли оно к множеству Number.

// Если это число, то вывести в консоль чётное оно или нечётное.

// Если передано не число, выведите: «Упс, кажется, вы ошиблись».

let num = +prompt('Введите число:');
if (isNaN(num)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (num % 2 === 0) {
    console.log(`Число ${num} четное!`);
} else {
    console.log(`Число ${num} нечетное!`);
}