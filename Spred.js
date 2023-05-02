let mass = ['Alex' , 'Pavlov', 'Igor', 'Berlin'];

console.log(...mass); // Выведет набор строк

let a = [...mass]; // Полностью скопирует массив

let [a1,,b1] = [...mass]; // Получим значения 1 и 3 элементов

let numbers = [1,2,3,4,5];

Math.max(...numbers) // таким образом мы можем получить масимальное число из массива


