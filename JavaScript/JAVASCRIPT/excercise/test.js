
            // STRING 

//Ex 1:   check one of the two numbers is 100 or if sum of it is 100  
const isEqualTo100 =  function check100(a,b){
    return a ===100 || b === 100 || (a+b) === 100 ;
}
console.log(isEqualTo100(50,50));


//Ex2 : Get extension of file name
const getFileExtension = function (str){    //lastIndexOf returns index of ('.') 
    return str.slice(str.lastIndexOf('.')); // cut the content in front of '.'

}
console.log(getFileExtension('index.html'));

//Ex4  Get current day 
const formatTime = (time = new Date()) =>{
    const day = time.getDate();
    const month = time.getMonth() + 1; // because it returns 0->11
    const year = time.getFullYear();
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();
    return ` ${day}:${minute}:${second} - ${day}/${month}/${year}`;   
}
console.log(formatTime()); // 2:48:21 - 2/7/2022
//Ex5 Adding 'New!' in front of  a given string ;

// const addNew = (str) => str.indexOf('New!') === 0 ? str : `New! ${str}`
const addNew = function (str){ 
    if (str.indexOf('New!') === 0 ){
        return str;
    }
    else{
        return `New! ${str}`;
    }
}  
console.log(addNew('New!'));

//Ex6 : Adding 3 first characters and 3 last characters together 

const makeNewString = (str) =>{
    if (str.length <= 3 )
        return str;
    else 
        return  str.slice(0,3)+str.slice(-3);
}
console.log(makeNewString('cat dog'))

//Ex7 Concatenate 2 strings , except their first char
const Concatenate = (str1,str2) => str1.slice(1)+ str2.slice(1);
console.log(Concatenate('string1','string2'));

//Ex8 Number nearest to 100 
const closeTo100 = (num1, num2) => Math.abs(100 - num1) > Math.abs(100 - num2) ? num2 : num1;
console.log(closeTo100(199,98));

//Ex8 Check a given string  contains  [2,4] occurrences of specified char
const countSpecialChar = (str,char) =>{
    return str.split('').filter((c) => c === char ).length; // str.split('') dùng để chuyển str thành mảng
}
const contains2To4 = (str,char) =>{
    let  check = countSpecialChar(str,char) 
    return check>=2 && check <=4 ;
}

console.log(contains2To4('oh','o'));
console.log(contains2To4('oho','o'));
console.log(contains2To4('ooh','o'));
console.log(contains2To4('oooooh','o'));

                            //ARRAY
console.log('\n\n ARRAY')                            
//Ex1 Find the number of even digits in array 
const arr1 = [1,2,3,4,5,6,7,8];
const countEvenNumber = arr => 
    arr.filter((index) =>{
    return index % 2 !== 0;
}).length
 console.log(countEvenNumber(arr1));
//Ex2 find the number of even number up to a given number  
const  createArrayNumber = (num) =>{
    const returnArray = [];
    for(let i = 1 ; i <= num ; i++){
        returnArray.push(i);
    }
    return returnArray; // trả về 1 mảng các số đến n  1,2,3...,n
}
console.log(countEvenNumber(createArrayNumber(8)));

//Ex3 check whether a given array is sorted ascending order
arr2 = [9,8,6,4,5];
    const isAscending = (arr) => {
        return arr.every( function (element,index) {
            return index === 0 || element >= arr[index - 1];
        });
    }
console.log(isAscending(arr2)) // kiểm tra mảng tăng dần nâng cao   

//ex4 get a largest even number in array

// Find max number with Math.max(3,4,5) 
// Note : Math.max() only works with list of num '1,2,3' not array [1,2,3]
// using spread operator ... to deal with 
arr3 = [1,2,3,4,91];
console.log(Math.max(...arr3)); 
// merging two objects using the spread operator,
const user1 = {
    name: 'Jen',
    age: 22,
};
const user2 = {
    name: "Andrew",
    location: "Philadelphia" 
};
const mergedUsers1 = {...user1, ...user2};
const mergedUsers2 = Object.assign({},user1,user2);
console.log(mergedUsers1) 
//{name: 'Andrew', age: 22, location: 'Philadelphia'}
// name is overwritten by object 2 because of the same key

const  largestEven = (arr)=>
    Math.max(...arr3.filter(num => num % 2 === 0 ));
console.log(largestEven(arr3)); // 4 is a largest even number

//EX5 Replace first digit in a string with '@'
//Regular expressions (RegExp)are often used with the two string methods: 
//search() and replace().
//syntax : /pattern/modifiers;
const replaceDigit  = (str) =>{
    //return str.replace(/[0-9]/,'@');
    return str.replace(/\d/g,'@');
}
console.log(replaceDigit('x2n cha4o 78976')); //x@n cha@o @@@@@


// Using rest parameters
function restFunction(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArg", manyMoreArgs); // tạo 1 array lưu các args
  };
  restFunction("one", "two", "three",4) // ['three', 4] 



// =============================================================  Exercise 2 

const obj1 = {a  : 1 , b : 2 , c : 1};
const obj2 = {a  : 1 , b : 1 , c : 1};
const obj3 = {a  : 1 , b : 1 , c : 1};


const checkObject = (a,b)=>{
    // i : change first char match
    // g : change global char match
    let  checka = Object.entries(a).join().replace(/,/g,'');
    let checkb = Object.entries(b).join().replace(/,/g,'');
    return checka === checkb;
};
console.log(checkObject(obj3,obj1));

// Convert cvs string to 2D array

const parseCSV = (e)=>{
    e.split('\n').CSVstr
}

const CSVstr = 
`abc , bed , hdf
ffj, kfd , fjs
fjd, add, fdc `;






