// 1. Определите переменные со значениями 100, 2.5, false, "Hello, java script!" и выведите их в консоль

let int_var = 100,
  double_var = 2.5,
  bool_var = false,
  str_var = 'Hello? java script!';

console.log('int_var = ', int_var);
console.log('double_var = ', double_var);
console.log('bool_var = ', bool_var);
console.log('str_var = ', str_var);

// 2. Создайте переменные greeting со значением'Hi, ' и userName. Спросите имя пользователя и занесите данное значение в переменную userName. С помощью диалога выведите сообщение с приветствием. Например, 'Hi, Vasya!'.

let greeting = 'Hi, ',
  userName;

userName = prompt('Введите ваше имя: ');
alert(greeting + userName + '!');

// 3. Выведите числа от 10 до 50, которые кратны 5

let start_range = 10,
  end_range = 50,
  step = 5,
  counter = start_range;

while (counter < end_range) {
  if (!(counter % step)) console.log(counter, '');
  counter++;
}

// 4. Спросите у пользователя номер месяца (это будет число из интервала от 1 до 12) . Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month_number;
month_number = prompt('Введите номер месяца: ');

switch (Number(month_number)) {
  case 1:
  case 2:
  case 12:
    console.log('это зимний месяц');
    break;
  case 3:
  case 4:
  case 5:
    console.log('это весенний месяц');
    break;
  case 6:
  case 7:
  case 8:
    console.log('это летний месяц');
    break;
  case 9:
  case 10:
  case 11:
    console.log('это осенний месяц');
    break;
  default:
    console.log('нет такого месяца');
}

// 5. Подсчитайте сумму четных чисел от 1 до 100

let start = 1,
  end = 100,
  sum = 0;

for (let i = start; i < end; i++) {
  sum += i % 2 ? 0 : i;
}
console.log(`Сумма чётных числе от ${start} до ${end} = ${sum}`);

// 6. Вывести знак * столько раз сколько задаст пользователь

let count = NaN;
while (isNaN(count)) {
  count = Number(prompt('Сколько раз вывести знак "*"?'));
  if (isNaN(count)) {
    console.log('Не верное числовое значение, попробуйте снова.');
  } else {
    for (let i = 0; i < count; i++) {
      console.log('*');
    }
  }
}

//7. делить число 1000 на 2 до тех пор, пока не получится число меньше 50. Какое число получилось? сколько раз делили?
let index = 1000,
count1 = 0,
step1 = 2;
while (index>=50){
  index /= 2;
  count1++;
}
console.log(`Получилось ${index}. Делили ${count1} раз.`);

//8. вывести таблицу значений для функции y = 5x + 2 для значения х от -1 до 1 с шагом 0.1. Вывод вида:
// x = -1 , y = -3
// x = -0.9, y = -2.5
// ....
// x = 1, y = 7
for (let x = -1; x <= 1; x += 0.1){
  console.log(`x = ${Math.round(x*100)/100}, y = ${Math.round((x * 5 + 2)*1000)/1000}`);
}