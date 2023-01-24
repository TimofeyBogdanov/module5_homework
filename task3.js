// Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH".

let initialStr = 'Hello';
let reversedStr = initialStr.split('').reverse().join('');
console.log(reversedStr);