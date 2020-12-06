function power(base, exp){
    if (exp == 1){
        return (base)}
    if (exp != 1){
        return (base * power(base, exp - 1))}
    }
    alert (power(3, 4));//81

    /* Задача 1 (lesson_3). С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
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

/*Задача 2.(Lesson_3)  С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров.
Задача 3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

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


/*Задача 4.(Lesson_3)*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так:
for(…){// здесь пусто} */
var i;
        for ( i = 0; i <= 9; i++){
            console.log(i);
        }

/*Задача 5(Lesson_3). *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5.  */  
        var arr = [];
        var end = 0;
        while (end < 20){
            end++;
            arr.push('x');
            console.log(arr);
        }


/*Задача 1(Lesson_4) 1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log 
и вернуть пустой объект.*/

var max = 999;
    var digit = {
      number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
      units: 0,
      tens: 0,
      hundreds: 0,
    };
    if (digit.number <= 9){
      digit.units = digit.number;
    } else if (digit.number <= 999){
      digit.units = Math.floor(digit.number % 10);
      digit.tens = Math.floor(digit.number / 10 % 10);
      digit.hundreds = Math.floor(digit.number / 100 % 10);
    }else {
        digit.number = 0;
        console.log('Вы ввели число за диапазоном 0 - 999');
    }
    console.log(digit);

    /*Задача 2(Lesson_4) Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
Реализуйте такие объекты.*/
let products = [];

function Product(id, price, quant) {
      this.id = id;
      this.price = price;
      this.quant = quant;
      }

function underwear(products){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
       total += products[i].price;
    }
       return total;
}

function quant(products){
    let total = 0;
    for (let i = 0; i < products.length; i++) {
       total += products[i].quant;
    }
       return total;
}

const basket = {
    sum: 0, 
    products: {}, 
    sumBasket: function () {
      let sum = 0;
      for (var key in this.products) {
        const elem = this.products[key]; 
        sum += elem.quant * elem.price;
      }
      this.sum = sum; 
      return sum;
    }
  };
  
  const socks  = {
    price: 100,
    quant: 3
  };
  
  const undershirt = {
    price: 200,
    quant: 1
  };
  
  const underpants = {
    price: 300,
    quant: 1
  };
  
  basket.products = { socks, undershirt, underpants };
  
  basket.sumBasket();
  
      products.push(new Product ('socks', 100, 1));
      products.push(new Product ('undershirt', 200, 1));
      products.push(new Product ('underpants', 300, 1));

      
    console.log(products); // список товара с ценой и количеством
    console.log(underwear(products));// сумма товара в корзине (вариант 1)
    console.log(quant(products)); //количество товара в корзине 
    console.log(basket.sum); // сумма товара в корзине (вариант 2) 
  



