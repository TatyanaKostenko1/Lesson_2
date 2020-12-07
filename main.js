 /*Задача 8(2). *С помощью рекурсии организовать функцию возведения числа в степень. 
    Формат: function power(val, pow), где val – заданное число, pow – степень.*/
/*function power(base, exp){
    if (exp == 1){
        return (base)}
    if (exp != 1){
        return (base * power(base, exp - 1))}
    }
    alert (power(3, 4));//81*/

    /* Задача 1 (lesson_3). С помощью цикла while вывести все простые числа в промежутке от 0 до 100.*/
   /* 1. Создаем массив от 1 до 100. Честно, пользовалась подсказкой в интернете...*/
/*var arr = [];
var end = 1;
while (end < 100){
    end++;
    arr.push(end);
}*/
//     2. Удаляем все четные цифры (разбиралась долго, но предпочла просто это запомнит! 
/*Точнее: изучила синтаксис indexOf )*/
/*var a = 2;
var b = 2;
while (a <= 100){
    a += b;
        arr.splice(arr.indexOf(a), 1);
}*/
//     3. Удаляет все цифры которые деляться на нечетные до 10
/* Здесь все понятно, используем нечетные в = 3,5,7*/
/*a = 4;
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

console.log(arr); // получилась!*/

/*Задача 2.(Lesson_3)  С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров.
Задача 3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.*/

/*let cart = [
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
console.log(underwear(cart));*/


/*Задача 4.(Lesson_3)*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла.
Выглядеть это должно так:
for(…){// здесь пусто} */
/*var i;
        for ( i = 0; i <= 9; i++){
            console.log(i);
        }*/

/*Задача 5(Lesson_3). *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
только у вашей пирамиды должно быть 20 рядов, а не 5.  */  
      /*  var arr = [];
        var end = 0;
        while (end < 20){
            end++;
            arr.push('x');
            console.log(arr);
        }*/


/*Задача 1(Lesson_4) 1. Написать функцию, преобразующую число в объект. 
Передавая на вход число от 0 до 999, мы должны получить на выходе объект, 
в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. 
Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log 
и вернуть пустой объект.*/

/*var max = 999;
    var digit = {
      number: Math.round(Math.random() * max), /*запрос у пользователя +prompt('Введите число от 0 до 999'),*/
      /*units: 0,
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
    console.log(digit);*/

    /*Задача 2(Lesson_4) Продолжить работу с интернет-магазином:
В прошлом домашнем задании вы реализовали корзину на базе массивов. 
Какими объектами можно заменить их элементы?
Реализуйте такие объекты.*/
/*let products = [];

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
    console.log(basket.sum); // сумма товара в корзине (вариант 2) */
  
/*Lesson_5. 1. Создать функцию, генерирующую шахматную доску. 
При этом можно использовать любые html-теги по своему желанию. 
Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. 
Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.
2. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, 
например К – король, Ф – ферзь и т.п., причем все фигуры должны стоять на своих местах 
и быть соответственно черными и белыми.*/

let h3 = document.querySelector("h3");
h3.style.color = "grey";

   let container = document.querySelector(".container");
			container.style.background = "brown";
			container.style.width = "660px";
			container.style.height = "660px";
			container.style.paddingLeft = "60px";
			container.style.paddingBottom = "60px";
			container.style.margin = "0 auto";
			container.style.display = "flex";
			container.style.flexWrap = "wrap";

			function my_board () {
				let cell = document.createElement ("div");
				cell.className="cell";
				cont.append(cell);
				cell.style.width = "60px";
				cell.style.height = "60px";
				cell.style.margin = "0px";
				cell.style.padding = "0px";
				cell.style.fontSize = "40px";
				cell.style.fontWeight = "bold";
				cell.style.textAlign = "center";

			}
			window.onload = my_board;

			for (let n=0; (n!=121); n++) {
				window.onload = my_board ();
			};

			let masCell = document.querySelectorAll (".cell");
			for (let i=0; (i<masCell.length); i++) {
				let c;
				if (i%2==0)	{
					c="dimgrey";
				} else {
					c="bisque";
					}
				masCell[i].style.background=c;
				if ((i>33) && (i<42)) {
					masCell[i].innerText = "П";
				};
				if ((i>88) && (i<97)) {
					masCell[i].innerText = "П";
				};

				masCell[23].innerText = "Л";
				masCell[24].innerText = "К";
				masCell[25].innerText = "С";
				masCell[26].innerText = "Ф";
				masCell[27].innerText = "К";
				masCell[28].innerText = "С";
				masCell[29].innerText = "К";
				masCell[30].innerText = "Л";	

				masCell[100].innerText = "Л";
				masCell[101].innerText = "К";
				masCell[102].innerText = "С";
				masCell[103].innerText = "Ф";
				masCell[104].innerText = "К";
				masCell[105].innerText = "С";
				masCell[106].innerText = "К";
				masCell[107].innerText = "Л";

				for (let f=89; (f<108); f++) {
					masCell[f].style.color = "white";
				}
				for (let f=0; (f<22); f++) {
					masCell[f].style.background = "brown";
				}
				for (let f=110; (f<121); f++) {
					masCell[f].style.background = "brown";
				}

				masCell[22].style.background = "brown";
				masCell[33].style.background = "brown";
				masCell[44].style.background = "brown";
				masCell[55].style.background = "brown";
				masCell[66].style.background = "brown";
				masCell[77].style.background = "brown";
				masCell[88].style.background = "brown";
				masCell[99].style.background = "brown";
				masCell[31].style.background = "brown";
				masCell[32].style.background = "brown";
				masCell[42].style.background = "brown";
				masCell[43].style.background = "brown";
				masCell[53].style.background = "brown";
				masCell[54].style.background = "brown";
				masCell[64].style.background = "brown";
				masCell[65].style.background = "brown";
				masCell[75].style.background = "brown";
				masCell[76].style.background = "brown";
				masCell[86].style.background = "brown";
				masCell[87].style.background = "brown";
				masCell[97].style.background = "brown";
				masCell[98].style.background = "brown";
				masCell[108].style.background = "brown";
				masCell[109].style.background = "brown";

				masCell[12].innerText = "A";
				masCell[13].innerText = "B";
				masCell[14].innerText = "C";
				masCell[15].innerText = "D";
				masCell[16].innerText = "E";
				masCell[17].innerText = "F";
				masCell[18].innerText = "G";
				masCell[19].innerText = "H";
				masCell[111].innerText = "A";
				masCell[112].innerText = "B";
				masCell[113].innerText = "C";
				masCell[114].innerText = "D";
				masCell[115].innerText = "E";
				masCell[116].innerText = "F";
				masCell[117].innerText = "G";
				masCell[118].innerText = "H";

				masCell[97].style.color = "black";
				masCell[99].style.color = "black";

				masCell[22].innerText = "1";
				masCell[33].innerText = "2";
				masCell[44].innerText = "3";
				masCell[55].innerText = "4";
				masCell[66].innerText = "5";
				masCell[77].innerText = "6";
				masCell[88].innerText = "7";
				masCell[99].innerText = "8";
				masCell[31].innerText = "1";
				masCell[42].innerText = "2";
				masCell[53].innerText = "3";
				masCell[64].innerText = "4";
				masCell[75].innerText = "5";
				masCell[86].innerText = "6";
				masCell[97].innerText = "7";
				masCell[108].innerText = "8";
			}

/* Lesson_5. Сделать генерацию корзины динамической: верстка корзины не должна находиться в HTML-структуре. 
Там должен быть только div, в который будет вставляться корзина, сгенерированная на базе JS:
Пустая корзина должна выводить строку «Корзина пуста»;
Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
Создать массив товаров (сущность Product);
При загрузке страницы на базе данного массива генерировать вывод из него. 
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид каталога генерируется JS.*/

            let d = document,
            itemBox = d.querySelectorAll('.item_box'), 
            cartCont = d.getElementById('cart_content'); 
       
        function addEvent(elem, type, handler){
          if(elem.addEventListener){
            elem.addEventListener(type, handler, false);
          } else {
            elem.attachEvent('on'+type, function(){ handler.call( elem ); });
          }
          return false;
        }
      
        function getCartData(){
          return JSON.parse(localStorage.getItem('cart'));
        }
    
        function setCartData(o){
          localStorage.setItem('cart', JSON.stringify(o));
          return false;
        }
      
        function addToCart(e){
          this.disabled = true; 
         
          let cartData = getCartData() || {},
              parentBox = this.parentNode, 
              itemId = this.getAttribute('data-id'), 
              itemTitle = parentBox.querySelector('.item_title').innerHTML, 
              itemPrice = parentBox.querySelector('.item_price').innerHTML; 
          if(cartData.hasOwnProperty(itemId)){ 
            cartData[itemId][2] += 1;
          } else { 
            cartData[itemId] = [itemTitle, itemPrice, 1];
          }
          if(!setCartData(cartData)){ 
            this.disabled = false; 
          }
         return false;
        }
        
        for(let i = 0; i < itemBox.length; i++){
          addEvent(itemBox[i].querySelector('.add_item'), 'click', addToCart);
        }
       
        function openCart(e){
          let cartData = getCartData(), 
              totalItems = '';
         
          if(cartData !== null){
            totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена, руб.</th><th>Кол-во</th></tr>';
            for(let items in cartData){
              totalItems += '<tr>';
              for(let i = 0; i < cartData[items].length; i++){
                totalItems += '<td>' + cartData[items][i] + '</td>';
              }
              totalItems += '</tr>';
            }
            totalItems += '</table>';
            cartCont.innerHTML = totalItems;
          } else {
           
            cartCont.innerHTML = 'В корзине пусто!';
          }
          return false;
        }
     
        addEvent(d.getElementById('checkout'), 'click', openCart);
     
        addEvent(d.getElementById('clear_cart'), 'click', function(e){
          localStorage.removeItem('cart');
          cartCont.innerHTML = 'Корзина очищена.';
        });
        
        
        
        
