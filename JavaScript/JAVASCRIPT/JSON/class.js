// CÚ PHÁP ES6
// const , let . Lưu ý const a.name có thể thay đổi được vì đây là key
// Arrow function : (value) => value
// Tạo cú pháp Class
// Enhanced object literals
// Default parameter values 
// Destructuring 
// Rest parameter
// spread


//=========== Tạo Object constructor == 

function Courser(name,price){
    this.name =  name ;
    this.price = price ; 
    this.getName = function (){
        return this.name;
    }
}
// Courser.getName = function (){
//     return name ;
// }
const phpCourse = new Courser("PHP",1000);
const jsCourse = new Courser("Javascript",3000);
jsCourse.title = "Đây là khóa học PHP"

console.log(jsCourse.getName());
console.log(jsCourse.title);

//============== Tạo Class ============= 

class Courser2{
    constructor(name , price ){
        this.name = name ;
        this.price = price;
    }
    getName (){
        return this.name;
    }
    getPrice(){
        return this.price; 
    }
}
const phpCourse2 = new Courser2("PHP 2",1000);
const jsCourse2 = new Courser2("Javascript 2",3000);
jsCourse2.title = "Đây là khóa học PHP 2"

console.log(jsCourse2.price);
console.log(jsCourse2.title);
jsCourse.getName();


//================  Enhanced Objected Literals in ES6
// Enhanced Object Literals in ES6
//1. It provides a shorthand syntax for initializing properties from variables.
//2. It provides a shorthand syntax for defining function methods.
//3. It enables the ability to have computed property names in an object literal definition. 

//1
function getLaptop_say(name,model,year){
    return {
        name :name , 
        model : model,
        year : year
    }
}

function getLaptop_say2(name,model,year){
    return {
        name , 
        model,
        year
    }
}
console.log(getLaptop_say('ASUS','1234',2002));
console.log(getLaptop_say2('ASUS','1234',2002));

//2.
function getLaptop_say(name,model,year){
    return {
        sayModel : function(){
            return model;
        }
    }
}

function getLaptop_say2(name,model,year){
    return {
        sayModel(){
            return model;
        }
    }
}
console.log(getLaptop_say('ASUS','1234',2002).sayModel());
console.log(getLaptop_say2('ASUS','1234',2002).sayModel());

//3 Đổi tên key nhanh
var fieldName = 'name';
var fieldPrice= 'price';

const khoahoc = {
    name : 'Javascript',
    [fieldName+1] : 'Javascript',
    [fieldPrice] : 1000 ,
};
console.log(khoahoc);


//=========================================  Default value 
function logger (log = 'gia tri mac dinh '){
    console.log(log);
}
logger();

//========================================= Destructuring

//1. Phân rã các phần tử đối với mảng

var array = ['javacript ', 'php','ruby'];
var [a, ,c] = array; // tách các phần từ mảng thành các biến a , b  , c 
var [pt1,...rest] = array;
console.log(a,c);
console.log(rest);

function logger (...params){
    console.log(params);
}
logger(1,2,3,4)

//====================================== Hàm reduce() ====== 

// Count Sum
var coins = [
    {
        id : 1 ,
        coin : 2 ,
    },
    {
        id : 2 ,
        coin : 3 ,
    },
    {
        id : 3 ,
        coin : 2 ,
    },
]
var sum = coins.reduce((previous,current)=>{
    console.log(current);
    return previous + current.coin;
},0);
console.log(sum);

//==================================== Tagged template literals trong ES6

// make a span tag

function makeSpan([first, ...rest], ...value){
    return value.reduce(
        (acc,curr) => [...acc, `<span>${curr}</span>`,rest.shift()]
        ,[first]);
}

function highlight(...rest){
    console.log(rest);
}

var brand = 'F8';
var course1 = 'Javascript';

highlight`Học Lập trình  ${course1} tại ${brand}!`;
const htmk = makeSpan `Học Lập trình  ${course1} tại ${brand}!`;
console.log(htmk);

//=================== Module ===========

//=================== Option chaining ====

var obj123 = {
    name: "alice",
    cat:{
        name:'Dinan',
        cat2:{
            name :'dinan2',
             cat3 :{
                name :'Dinan 3'
             }
        }
    }
}
// obj?['cat']?['cat2'] 


if(obj123?.cat?.cat2?.cat3){
    console.log(obj123.cat.cat2.cat3.name);
}