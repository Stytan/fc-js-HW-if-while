// Task 1 Создайте объект ноутбука . Продумайте типы полей и вложенность.
// 1 Серийный номер 3V5E7EA
// 2 Модель HP 255 G8
// 3 Экран:
// Тип экрана IPS
// Разрешение 1920x1080
// 4 Процессор Восьмиядерный AMD Ryzen 7 5700U (1.8 - 4.3 ГГц)
// 5 Оперативная память 8 ГБ
// 6 Накопители данных:
// Объём HDD 256 ГБ SSD
// Видеокарта AMD Radeon Graphics
// 7 Корпус:
// Цвет Серебристый
// Вес 1,7
// Габариты (Ш х Г х В) 358 x 242 x 19

const notebook = {
  serialNumber: '3V5E7EA',
  model: 'HP 255 G8',
  screen: {
    diagonal: '15.6"',
    screenType: 'IPS',
    screenResolution: 'FHD (1920x1080)',
  },
  cpu: 'AMD Ryzen 7 5700U (1.8 - 4.3 GHz) 8-cores',
  ram: {
    size: '8 Gb',
    type: 'DDR4',
    slotCount: 1,
  },
  drives: [
    {
      type: 'SSD NVME',
      size: '256 Gb',
    },
    {
      type: 'HDD',
      size: '1 Tb',
    },
    {
      type: 'card reader',
      size: 'n/a',
    },
  ],
  graphic: 'AMD Radeon Graphics (internal)',
  case: {
    color: 'silver',
    weight: 1.7,
    dimensions: {
      width: 358,
      depth: 242,
      height: 19,
    },
  },
};

console.log(notebook);

// Task 2 Создайте класс который описывает создание нового пользователя с помощью логина и пароля. Сделайте несколько обьектов. Создайте массив из нескольких обьектов

class User {
  #login;
  #password;
  constructor(login, password) {
    try {
      if (login === undefined)
        throw { name: 'Login error.', message: 'Login undefined.' };
      if (login.toString().length < 5)
        throw { name: 'Login error.', message: 'Login too short.' };
      else this.#login = login.toString();
      if (password === undefined)
        throw { name: 'Password error.', message: 'Password undefined.' };
      if (password.toString().length < 6)
        throw { name: 'Password error.', message: 'Password too short.' };
      else this.#password = password.toString();
    } catch (err) {
      this.#login = 'anonymous';
      this.#password = 'password';
      console.log(`${err.name} ${err.message} Create anonymous user.`);
    }
  }
  get login() {
    return this.#login;
  }
  get password() {
    return this.#password;
  }
  set password(password) {
    try {
      if (password === undefined)
        throw { name: 'Password error.', message: 'Password undefined.' };
      if (password.toString().length < 6)
        throw { name: 'Password error.', message: 'Password too short.' };
      else this.#password = password.toString();
    } catch (err) {
      console.log(`${err.name} ${err.message} Password not changed.`);
    }
  }
}

const user1 = new User('useruser', 'qwert');
console.log(user1);

const user2 = new User('Maksimilian', 'meNEwSuperPass');
console.log(user2);

const users = [];
for (let i = 0; i < 10; i++)
  users.push(new User('NewUser' + i, 'NewPassword' + i));
console.log(users);

// Task 3* Из полученого массива в задании 2 сделайте карту (map). в качестве ключа используйте логин

const usersMap = new Map();
for (let user of users) {
  usersMap.set(user.login, user.password);
}
console.log(usersMap);

// Task 4
// 4.1
// Создайте класс Работника. У каждого объекта обязательно должно быть свойства id, имя, категория и зарплата за месяц. создайте следующие методы:
// - вывод информации о зарплате
// - подсчитать заработок за год
class Employee {
  #id;
  #name;
  #category;
  #salary = 0;
  constructor(id, name, category, salary) {
    if (isNaN(Number(id)))
      throw { name: 'Id error.', message: 'Id is not a number.' };
    this.#id = Number(id);
    this.name = name;
    this.category = category;
    this.salary = salary;
  }
  get id() {
    return this.#id;
  }
  get name() {
    return this.#name;
  }
  set name(name) {
    if (name === undefined) throw new Error('Name is undefined.');
    this.#name = name;
  }
  get category() {
    return this.#category;
  }
  set category(category) {
    if (category === undefined) throw new Error('Category is undefined.');
    this.#category = category;
  }
  get salary() {
    return this.#salary;
  }
  set salary(salary) {
    if (isNaN(Number(salary))) {
      console.log(`Error: Salary is not a number. Salary not changed or set to default (0). Current = ${this.salary}`);
    } else {
      this.#salary = Number(salary);
    }
  }
  getSalary() {
    return this.#salary;
  }
  getAnnualIncome() {
    return this.#salary * 12;
  }
}

const employee = new Employee(123, 'Nikolay Kurinniy', 'manager', 1000);
console.log(employee);
console.log(`Salary of ${employee.name} is ${employee.getSalary()}$.`);
console.log(`Annual income of ${employee.name} is ${employee.getAnnualIncome()}$`);

// 4.2
// Создайте класс Совместитель, который наследует Работника. У него есть дополнительные свойства - количество отработанных часов в день, ставка за час. создайте методы:
// - подсчитайте количество денег что зарабатывает за день
// - подсчитайте ему зарплату за месяц

// - * подсчитать заработок за год (вызовите от родителя)

class PartTimeEmployee extends Employee {
  #workTime = 4;
  #hourlyRate = 0;
  constructor(id, name, category, workTime, hourlyRate){
    super(id, name, category, 0);
    this.workTime = workTime;
    this.hourlyRate = hourlyRate;
  }
  set workTime(workTime){
    if (isNaN(Number(workTime))) {
      console.log(`Error: Work time is not a number. Work time not changed or set to default (4 hour). Current = ${this.workTime}`);
    } else {
      this.#workTime = Number(workTime);
    }
    this.#calcSalary();
  }
  get workTime(){
    return this.#workTime;
  }
  set hourlyRate(hourlyRate){
    if(isNaN(Number(hourlyRate))) {
      console.log(`Error: Hourly rate is not a number. Hourly rate not changed or set to default (0$). Current = ${this.hourlyRate}`);
    } else {
      this.#hourlyRate = Number(hourlyRate);
    }
    this.#calcSalary();
  }
  get hourlyRate(){
    return this.#hourlyRate;
  }
  getDailySalary(){
    return this.workTime * this.hourlyRate;
  }
  #calcSalary(){
    this.salary = this.getDailySalary() * ((365 - 11) / 7 * 5) / 12;
  }
}

const partTimeEmployee = new PartTimeEmployee(254, 'Ann Rekina', 'worker', 3, 50);
console.log(partTimeEmployee);
console.log(`Annual salary of ${partTimeEmployee.name} is ${partTimeEmployee.getAnnualIncome().toFixed(2)}$`);