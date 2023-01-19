// Function that compares two element of 1 array 
const replace = (arr) => {
    return arr.every( function (element,index) {
        return index === 0 || element == arr[index - 1];
    });
};

const obj1 = {a  : 1 , b : 2 , c : 1};
const obj2 = {a  : 1 , b : 1 , c : 1};
const obj3 = {a  : 1 , b : 1 , c : 1};


//================================================================ Convert String to Array 
function ConvertToStr(arr){
    return arr.join('');
}
function ConvertToArr(str){
    return str.split("");
}



const checkObject = (a,b)=>{
    // i : change first char match
    // g : change global char match
    let  checka = Object.entries(a).join().replace(/,/g,'');
    let checkb = Object.entries(b).join().replace(/,/g,'');
    return checka === checkb;
};
console.log(checkObject(obj3,obj1));


const parseCSV = (e)=> {
    return e.split('\n').map((element)=>{
        return  element.split(',');
    });
}

const CSVstr = 
`abc , bed , hdf
ffj, kfd , fjs
fjd, add, fdc `;

console.log(parseCSV(CSVstr));

const getRandomHexNumber = () => {  
    return Math.floor(Math.random()*16).toString(16);
}    
const getRandomHexColor = ()=>{
    let count =  Array.from({length : 6}).map(getRandomHexNumber).join(``) ;
    return `#`+count;   
}
console.log(getRandomHexColor());
console.log(getRandomHexColor());

// Tạo 1 hàm truyền vào 1 hàm giống như every 

const arrayTest = [1,2,3,4,5];

function  isEvery (arr , fn){
    for(let i = 0 ; i < arr.length ; ++i ){
        if(!fn(arr[i])){
            return false ; 
        }
    }
    return true ; 
}

console.log(isEvery(arrayTest,(element) => element > 0 ));
console.log(arrayTest.every((element) => element > 0));


// Sort every letters in string in alphabetical order

string1 = 'abc';
const compareFunction = (a,b) => a > b ? -1 : 1 ;  // sort() default sort by  Unicode code point value
const alphabeticalOrder = (str) =>
    str.split('').sort(compareFunction).join('');

console.log(alphabeticalOrder(string1));

 // Function that accept a string as a parameter and counts the number of vowels within a string
    for(const i  of string1 ){
        console.log('sf');
    }
 const countVowel = (str, vowels = ['u', 'e','o', 'a', 'i']) => {
    let count = 0 ; 
    str.split("").filter((element) =>{
           for(const i of vowels){
              if(i === element){
                count++;
              }
           }
        }
    )
    return count;
 }

 console.log(countVowel('ueoaaai',['a']));


 //Write a js function to extract a unique char from a string 

 const getUniqueChar = (str) =>{
     return str.split('').filter((element,index,arr)=>{ 
        return arr.slice(index + 1)   // to remove item behind the current item                       
                .indexOf(element) === -1; // check if element is exist in arr , syntax : array.indexOf(element) 
    })
 }

console.log(getUniqueChar('aaaabbbbbcccc'));

// find the first character not repeated 
const nonRepeated = (str) =>
    str.split('').filter((item,index,arr)=>  
                arr.filter(arrItem => arrItem === item ) // tạo một array chứa các ký tự giống nhau 
                .length  === 1   // array có độ dài  === 1 là duy nhất
                ); 
            
console.log(nonRepeated('sssffggdf')); 


//======================= Create a map function 
Array.prototype.map2 = function (callBack){ // ====== Lưu ý không được dùng arrow function
    var output = [];
    var arrayLength = this.length;
    for( let i = 0 ; i < arrayLength; i++){  // Nguyên tắc hoạt động của map là lặp và truyền pt vào hàm Callback
        var result =  callBack(this[i],i,this);   // Lưu kết quả thỏa hàm callback vào biến result                                                                     
        output.push(result);    
    }
    return output; 
}

var course =  ['Javascript', 'PHP','Ruby','1'];
function myFunc (item ) {
    return item === '1';
}
console.log(course.length);
// var htmls = course.map(myFunc);
var htmls = course.map2(myFunc); 
console.log(htmls);