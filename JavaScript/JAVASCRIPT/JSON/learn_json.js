//JSON : JAVASCRIPT OBJECT NOTATION

var string = "abcd";
var array = ["a", "s", "d", "c"];
var array_number = [1, 2, 3, 4];
var object = {
  a: "123",
  b: "xin chao",
};

var json_string = '"abc"';
var json_array = '["java","abdc"]';
var json_array_number = "[5,6,7]";
var json_object = '{"a": "456" , "b":"xinaheo"}';

console.log(JSON.stringify(array_number));
console.log(JSON.parse(json_array_number));
console.log(json_object);

// CÁCH TẠO PROMISE
// 1.var  promise =  new Promise
// 2.Viết Executor  function(resolve, reject)

var promise = new Promise(
  //Executor
  function (resolve, reject) {
    var option = 1; // Logic
    if (option) resolve("thanh cong "); //resolve ()
    else reject("that bai "); // reject()
  }
);

// Khi một Promise được chạy có 3 trạng thái
// 1 . Pending : là trạng thái loading chưa biết thành công hay không , thường dùng để add hiệu ứng loading
// 2 . Fulfilled : là trạng thái resolve
// 3 . Rejected  : là trạng thái reject

promise
  .then(function (str) {
    console.log(str);
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve("1"), 3000);
    });
  })
  .then(function (str) {
    console.log(str);
    let num = parseInt(str, 10);
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(num), 3000);
    });
  })
  .then(function (num) {
    console.log(num + 1);
    return new Promise(function (resolve, reject) {
      setTimeout(() => resolve(num + 2), 3000);
    });
  })
  .then(console.log)
  .catch(function (str) {
    console.log(str);
  })
  .finally(function () {
    console.log("done");
  });

  //========================= Tạo hàm đợi đơn giản bằng promise=============
// function sleep(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), ms);
//   });
// }

// sleep(1000)
//   .then(() => {
//     console.log("sleep 1");
//     return sleep(3000);
//   })
//   .then(() => {
//     console.log("sleep 2");
//     return sleep(3000);
//   })    
//   .then(() => {
//     console.log("sleep 3");
//     return sleep(3000);
//   })

  // Không cần logic nhưng vẫn trả về nhanh
var p = Promise.reject("err") ;  
// var p = Promise.resolve("success");
p.then((str)=>{
  console.log(str);
}).catch((str)=>{
  console.log(str);
})

  // Promise all dùng để chạy 2 hàm cùng lúc  
var promise1 = new Promise ((resolve)=>{
    setTimeout(()=> resolve([1]),1000);
})
var promise2 = new Promise ((resolve)=>{
  setTimeout(()=> resolve([2,3]),3000);
})

Promise.all([promise1,promise2])
  .then(function([result1,result2]){
        console.log(result1.concat(result2));
    });