//function get(a,b) {
//    let num = a+b;
//    alert(num);
//}
//
//get(4,5);

//function convertor(amout,str) {
//    if(str === "world") {
//        str = "User";
//    }
//    return amout + str;
//}
//alert(convertor("hello", "hello"));

 
 
//function display(){
//    var z = 1;
//    for(var i=0; i<arguments.length; i++)
//        z *= arguments[i];
//    console.log(z);
//}
//display(6); // 6
//display(6, 4) // 24
//display(6, 4, 5) // 120

//function calcD(a, b, c) {
//   return b*b - 4*a*c;
//}
//
//var test = calcD(-4, 2, 1);
//alert(test); // 20

//let n = parseInt(prompt("num"));
//let s = "";
//
//for (let i = 0; i <= n;i++){
//    s += i + ' ';
////    alert(`hello ${i}`);
//    alert(s);
//}
////alert(s);

//document.write('<h1>Prepare to text</h1>');
//
// for(let i =0; i <=10; i++){
//     document.write('<p>some text</p>');
//     for(let j = 0; i <= 2; i++){
//         document.write('<p>hahahahahaha</p>');
//     }
// }


//
//
//function num(){
//    let count = 0;
//    return function(){
//        count++;
//        return count;
//    }
//    
//}

//let a = num();
//alert(a());
//alert(a());
//alert(a());

//-----------------------------------------------------------------------------------------------------------------------------------

//--------------------Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).

//let a = parseInt(prompt('num'));
//
//function convertor(amout) {
//    return a * 8;
//}
//alert(convertor());

//-----------------------A function which returns reversed string.

//function reverse(str){
//  let reversed = "";    
//  for (let i = str.length - 1; i >= 0; i--){        
//    reversed += str[i];
//  }    
//  return reversed;
//}
//
//console.log(reverse('abc'));

//var arr = ['hello','tirt','redbull'];
//
//function compareReversed(a, b) {
//  return b - a;
//}
//
//arr.sort(compareReversed);
//
//alert( arr );

//---------------------A function which prints the stair picture of size n

//function stair(n) {
//    
//    for(let i = 0; i <= n; i++) {
//        document.write('<p>#</p>');
//    }
//}
//
//stair(5);

//function StairCase(n) {
//    var output = '';
//    for(var i =0; i <= n; i++) {
//        for(var j = n-1; j >= i; j--) {
//               output += " ";
//        }
//        for(var k = 1; k <= i; k++) {
//            output += "#";
//        }
//        output += "\n";
//    }
//    console.log(output);
//}    
//StairCase(5);


//--------------------------Write a function which returns the smallest of three numbers.

//function min(a,b,c) {
//
//    if(a < b && a < c){
//        return a;
//    } else if(b < a && b < c) {
//        return b;
//    } else {
//        return c;
//    }
//}
//
//console.log(min(4,8,2));

//------------------------A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.

//function toUppercase(str) {
//    str = 'hello';
//}
//console.log(toUppercase.toUpperCase());


//let a = 'hello';
//
//console.log(a.toUpperCase());



//var menu = {
//  width: 300,
//  height: 200,
//  title: "Menu"
//};

//var counter = 0;
//
//for (var key in menu) {
//  counter++;
//}

//alert( "Всего свойств: " + counter );


//var salaries = {
//  "Вася": 100,
//  "Петя": 300,
//  "Даша": 250
//};
//
//var sum = 15;
//for (var name in salaries) {
//    
//  salaries[name] = +sum;
//}
//
//console.log( sum );


//var menu = {
//  width: 300,
//  height: 200,
//  title: "Menu"
//};
//
//for (var key in menu) {
//  // этот код будет вызван для каждого свойства объекта
//  // ..и выведет имя свойства и его значение
//
//  alert( "Ключ: " + key + " значение: " + menu[key] );
//}

//let names = 'robert, olga, petro,ira,anna';
//
//let arrNames = names.split(',');
//
//for(let i = 0; i < arrNames.length; i++) {
//    console.log(arrNames[i]);
//}

//var arr = ["Яблоко", "Апельсин", "Груша"];
//
//arr.forEach(str);
//
//function str(string, item, gall) {
//
//    console.log(string,item);
//}

//let arr = ['яблоко','orange','banan'];
//
//for(let i = 0; i < arr.length; i++) {
//    console.log(arr[2]);
//}

//var arr = ["Есть", "жизнь", "на", "Марсе"];
//
//let arrLen = arr.map(function(name){
//    return name.length;
//});
//
//alert( arrLen ); 

//
//let arr = [2,4,2,4,5,11];
//
//let sumArray = arr.reduce(num);
//
//function num(sum,current){
//    return sum + current;
//}
//alert(sumArray);


//function sumNumber() {
//    let result = 0;
//    for(let i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//    }
//    return result;
//}
//
//console.log(sumNumber(2,4,4));
//console.log(sumNumber(2,5,6));
//console.log(sumNumber(2,5,7,8,10));


//function num() {
//    counter = 1;
//    
//    return function(){
//        return counter++;
//    }
//}
//
//let nums = num();
//console.log(nums());
//console.log(nums());
//console.log(nums());
//console.log(nums());



//function sum(a){
//    
//    return function(b){
//        return a+b;
//    };
//}
//
//console.log(sum(4)(9));


//var user = {
//  name: 'Василий',
//
//  // метод
//  sayHi: function() {
//    alert( 'Привет!'+ user.name );
//  }
//
//};
//
//// Вызов
//user.sayHi();

//let user = {firstName: 'oleg'};
//let admin = {firstName: 'petro'};
//
//function func() {
//  
//    alert(this.firstName);
//}
//
//user.f = func;
//admin.g = func;
//
//
//user.f();
//admin.g();


//let calculator = {
//    
//    read: function(){
//        
//          this.a = parseInt(prompt('Number-one'));
//          this.b = parseInt(prompt('Number-one'));
//    },
//    
//    sum: function() {
//        
//        return this.a + this.b;
//    },
//    
//    mul: function() {
//        return this.a * this.b;
//    }
//}
//
//calculator.read();
//
//alert(calculator.sum());
//alert(calculator.mul());

//var ladder = {
//  step: 0,
//  up: function() { // вверх по лестнице
//    this.step++;
//  },
//  down: function() { // вниз по лестнице
//    this.step--;
//  },
//  showStep: function() { // вывести текущую ступеньку
//    alert( this.step );
//  }
//};
//
//ladder.up();
//ladder.up();
//ladder.up();
//ladder.up();
//ladder.down();
//ladder.showStep();
//
//
//var ladder = {
//  step: 0,
//  up: function() {
//    this.step++;
//    return this;
//  },
//  down: function() {
//    this.step--;
//    return this;
//  },
//  showStep: function() {
//    alert( this.step );
//    return this;
//  }
//}
//
//ladder.up().up().down().up().down().showStep(); // 1

//---------------конструктори new
//function Animal(name) {
//    this.name = name;
//    this.canWalk = true;
//}
//
//let animal = new Animal('oleg');
//
//console.log(animal);


//function Construc(name,surname){
//    this.name = name;
//    this.surname = surname;
//    this.sayHi = function(){
//        alert('Hello'+ this.name + this.surname)
//    };
//}
//
//let say = new Construc('oleg','olegovich');
//
//say.sayHi();

//function User(firstName,SecondName){
//    
//    let phrase = 'Hello';
//    
//    function getFull(){
//        return firstName + '' + SecondName;
//    }
//    
//    this.sayHi = function() {
//        console.log(phrase + "" + getFull());
//    };
//}
//
//let oleg = new User('leonid','oleg');
//
//oleg.sayHi();

//------------------------------------------------------------------call and apply
//function show() {
//   return this.name + "" + this.surname;
//}
//
//let user = {
//    name: 'oleg',
//    surname: 'petro'
//}
//
//alert(show.call(user));


//function show(firstPart,secondPart){
//    return this[firstPart]+ '' +this[secondPart];
//}
//
//let user = {
//    firstName: 'oleg',
//    secondName: 'petro',
//    firstSurname: 'lol',
//    secondSurname: 'boom'
//    
//}
//
//console.log(show.call(user,'firstName','secondName'));
//console.log(show.call(user,'firstSurname','secondSurname'));


//----------------------------------------

//setTimeout(function(){
//    alert('hello');
//},3000);

//var user = {
//  firstName: "Вася",
//  sayHi: function() {
//    alert( this.firstName );
//  }
//};
//
//setTimeout(user.sayHi(), 1000); 

//-------------------------json


//let num = "[4,5,6,7,8]";
//
//num = JSON.parse(num);
//alert(num[2]);


//let user = '{ "name": "Вася", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
//
//user = JSON.parse(user);
//
//alert(user.friends);

//var str = '{"title":"Конференция","date":"2014-11-30T12:00:00.000Z"}';
//
//var event = JSON.parse(str, function(key, value) {
//  if (key == 'date') return new Date(value);
//  return value;
//});
//
//alert( event.date.getDate() ); // теперь сработает!


//let user = {
//    name: 'oleg',
//    surname: 'petrov'
//}
//
//let str = JSON.stringify(user);
//
//alert(str);
//
// event = JSON.parse(str);
//alert(str);


//let leader = {
//    name: 'oleg',
//    age: 35
//}
//
//
//let str = JSON.stringify(leader);
//
//alert(str);
//
//leader = JSON.parse(str);
//
//alert(leader);


//---------------------------------setTimeout setInterval
//function current() {
//    console.log('тік так');
//}
//
//setInterval(current,2000)
//
//setTimeout(function(){
//    clearInterval(current());
//    console.log('stop');
//},4000);



//let timer = setTimeout(function tick(){
//    console.log('tik');
//    timer = setTimeout(tick, 4000);
//},2000);


//function printNumbersInterval() {
//    
//  var i = 1;
//  var timerId = setInterval(function() {
//    console.log(i);
//    if (i == 20) clearInterval(timerId);
//    i++;
//  }, 2000);
//}
//
//printNumbersInterval();



//function printNumbersTimeout20_100() {
//  var i = 1;
//  var timerId = setTimeout(function go() {
//    console.log(i);
//    if (i < 20) setTimeout(go, 100);
//    i++;
//  }, 100);
//}
//
//printNumbersTimeout20_100();


//------------------------ооп

//function User(name) {
//
//  this.sayHi = function() {
//    alert( "Привет, я " + name );
//  };
//
//}
//
//var vasya = new User("Вася"); // создали пользователя
//vasya.sayHi(); // пользователь умеет говорить "Привет"



//function CoffeMachine(power){
//    
//    this.waterAmount = 0;
//    
//    function getTime(){
//        return 1000;
//    }
//    
//    function ready(){
//        alert('ready');
//    }
//    
//    this.run = function(){
//        setTimeout(ready, getTime());
//    }
//    
//}
//
//let updateCoffeMachine = new CoffeMachine(200);
//CoffeMachine.waterAmount = 250;
//
//updateCoffeMachine.run();


//function CoffeeMachine(power) {
//  this.waterAmount = 0;
//
//  var WATER_HEAT_CAPACITY = 4200;
//
//  var self = this;
//  console.log(this);
//  function getBoilTime() {
//      return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
//    }
//
//  function onReady() {
//    alert( 'Кофе готов!' );
//  }
//
//  this.run = function() {
//    setTimeout(onReady, getBoilTime());
//  };
//
//}
//
//var coffeeMachine = new CoffeeMachine(100000);
//coffeeMachine.waterAmount = 200;
//
//coffeeMachine.run();


//function Machine() {
//  this._enabled = false; // вместо var enabled
//
//  this.enable = function() {
//    this._enabled = true;
//  };
//
//  this.disable = function() {
//    this._enabled = false;
//  };
//}
//
//function CoffeeMachine(power) {
//  Machine.call(this);
//
//  this.enable();
//
//  alert( this._enabled ); // true
//}
//
//var coffeeMachine = new CoffeeMachine(10000);


//let jump = {
//    eats: true
//};
//
//function Rabbit() {
//    this.jumps = true,
//    this.__proto__ = jump;
//};
//Rabbit.prototype = jump;
//let aqua = new Rabbit();
//
//
//
////rabbit.__proto__ = jump;
////rabbit.__proto__ = animal;
//alert(aqua.jumps);
//alert(aqua.eats);


//-----------------------------DOm


//function getE (element){
//    return document.querySelector(element);
//}
//
//let box = getE('.box');
//box.innerHTML = 'heello';
//box.style.height = "50px";
//box.style.width = "50px";
//box.style.background = 'red';
//
//function colorBlue() {
//    this.style.background = 'blue';
//}
//
//box.addEventListener('mouseover', colorBlue);

//let box = document.getElementById('box');
//box.innerHTML = 'hello';

//let text = document.getElementsByClassName('text');
//console.log(text);
//console.log(text[1]);

//function getE(element) {
//  return document.querySelector(element);
//}
//
//window.addEventListener('keydown', function(event) {
////    console.log(event);
//   if(event.keyCode === 38) {
//      let goUp = getE('.box').offsetTop;
//       getE('.box').style.top = `${goUp - 20}px`;
//   } 
//    if(event.keyCode === 40) {
//      let goDown = getE('.box').offsetTop;
//       getE('.box').style.top = `${goDown + 20}px`;
//   } 
//     if(event.keyCode === 37) {
//      let goLeft = getE('.box').offsetLeft;
//       getE('.box').style.left = `${goLeft - 20}px`;
//   } 
//    if(event.keyCode === 39) {
//      let goRight = getE('.box').offsetLeft;
//       getE('.box').style.left = `${goRight + 20}px`;
//   } 
//});
//
//
//
//getE('.box').addEventListener('click', function(){
//    let newCordTp = document.body.offsetTop;
//    let newCordLt = document.body.offsetLeft;
//   let newball = document.createElement('div'); 
//    newball.style.height ='50px';
//    newball.style.width = '50px';
//    newball.style.borderRadius = '50%';
//    newball.style.background = 'red';
//    newball.style.marginTop = `${newCordTp + 50}px`;
//    newball.style.marginLeft = `${newCordLt + 50}px`;
//    getE('.box').append(newball);
//    
//});
//
//
//
//
//
//
//getE('.btn').addEventListener('click', function(){
//   let text = getE('.name').value;
//    getE('.text').innerHTML = text;
//});

//-------------------------------------------------------------------ajax


//$('#btn').click(function (){
//   $.ajax({
//       url: 'test.txt',
//       method: 'GET',
//       success: function(response) {
//           const div = $('.content').html();
//           $('.content').html(div + response);
//       } 
//   }) 
//});


//$('#btn').click(function(){
//     const data = {
//       login:$('#text').val()
//   };
//   $.ajax({
//       data: JSON.stringify(data),
//       contentType:'application/json',
//       url: 'test.json',
//       type: 'POST',
//       error: function(error) {
//           console.log(error);
//       }
//   }) 
//});

//const promise = fetch('https://jsonplaceholder.typicode.com/posts/',{
//    method: 'POST',
//    body: 'some data'
//});
//
//promise.then((res) =>{
//    res.json().then(data => {
//        console.log('data', data);
//    })
//}).catch((err) => {
//    console.log('some err', err);
//});
//
//let animal = {
//    name: 'Lion',
//    surname: 'cat',
//    eat: ["meat", true, {
//        run: true,
//        bite: true  
//    }]
//}
//
//
//console.log(JSON.stringify(animal));


//----------------------------------------------------------------------------------

//const $input = document.querySelector('#text');
//const $textarea = document.querySelector('#results');
//
//const searchPeople = (query) => {
//    $textarea.value = "";
//    const xhr = new XMLHttpRequest();
//
//xhr.onreadystatechange = function () {
//    if(xhr.readyState ==4){
//        const response = JSON.parse(xhr.responseText);
//        
//        const results = response.results;
//        results.forEach(result => {
//           $textarea.value += result.name + '\n'; 
//        });
//    }
//}
//
//xhr.open('GET','https://swapi.co/api/people/?search=' + query,true);
//
//xhr.send();
//
//}
//
//
//$input.addEventListener('keyup', () => {
//    searchPeople($input.value);
//})



//-------------------------------todo list ajax


const API = 'https://jsonplaceholder.typicode.com/';

let users = [];

const getUsers = () => {
  return fetch(API + 'users').then(res => {
    return res.json();
  }).catch(err => {
    console.log('couldnt get users', err);
    return [];
  })
};

const deleteUser = async (userId, userElement) => {
  try {
    const res = await fetch(API + 'users/' + userId, {method: 'DELETE'});
    if (res.status !== 200) throw new Error();
    users = users.filter((item) => item.id !== userId);
    userElement.remove();
  } catch(err) {
    console.log('couldnt delete user', err);
  }
}

const renderUsers = () => {
  const container = document.querySelector('.users');

  container.innerHTML = '';

  users.forEach(item => {
    const userElement = document.createElement('div');
    userElement.classList.add('user');
    userElement.innerHTML = `
      <h4>${item.name}</h4>
      <h5>${item.email}</h5>
    `;
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('user__remove');
    removeBtn.textContent = 'X';
    removeBtn.addEventListener('click', () => {
      deleteUser(item.id, userElement)
    });

    userElement.append(removeBtn);
    container.append(userElement);
  });
}

const loadUsers = async () => {
  users = await getUsers();
  renderUsers()
}


const createUser = () => {
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;

  fetch(API + 'users', {
    method: 'POST',
    body: JSON.stringify({name: name, email: email})
  }).then(res => {
    return res.json();
  }).then(({id}) => {
    const user = {
      name,
      email,
      id
    };
    users.unshift(user)
    renderUsers();
  })
  .catch(err => {
    console.log('couldnt create a user', err);
  })

}

document.addEventListener('DOMContentLoaded', () => {
  const loadBtn = document.querySelector('.load-users')
  loadBtn.addEventListener('click', loadUsers);

  const createUserBtn = document.querySelector('#create-user-btn')
  createUserBtn.addEventListener('click', createUser);
});
























