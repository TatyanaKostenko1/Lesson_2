function power(base, exp){
    if (exp == 1){
        return (base)}
    if (exp != 1){
        return (base * power(base, exp - 1))}
    }
    alert (power(3, 4));//81

    /* Задача 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
   /* 1. Создаем массив от 1 до 100. Честно, пользовалась подсказкой в интернете...*/
var arr = [];
var end = 1;
while (end < 100){
    end++;
    arr.push(end);
}
//     2. Удаляем все четные цифры (разбиралась долго, но предпочла просто это запомнит! 
/*Точнее: изучила синтаксис indexOf )*/
var a = 2;
var b = 2;
while (a <= 100){
    a += b;
        arr.splice(arr.indexOf(a), 1);
}
//     3. Удаляет все цифры которые деляться на нечетные до 10
/* Здесь все понятно, используем нечетные в = 3,5,7*/
a = 4;
b = 3;
while (a < 100){
    if (a % b ===0 && arr.indexOf(a) !== -1){
        arr.splice(arr.indexOf(a), 1);
    }else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr); // получилась!

let cart = [
    ['socks', 100],
    ['undershirt', 200],
    ['underpants', 300],
]

function underwear(names){
    let total = 0;
    for (let i = names.length-1; i >= 0; i--) {
       total += names[i][1];
    }
       return total;
}
console.log(underwear(cart));

var i;
        for ( i = 0; i <= 9; i++){
            console.log(i);
        }

        var arr = [];
        var end = 0;
        while (end < 20){
            end++;
            arr.push('x');
            console.log(arr);
        }