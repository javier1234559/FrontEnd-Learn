// const enterNumber = () =>{
//     let promise = new Promise((resolve,reject) =>{
//         const number = Number(window.prompt('Enter a number 1-6'));
//         const randomNumber = Math.floor(Math.random()*6 +1);
//         if(isNan(userNumer)){
//             reject(new Error('Wrong number type'));
//         }
//         if(userNumer == randomNumber){
//             resolve({
//                 point : 1,
//                 randomNumber,
//             });
//         }
//         else {
//             resolve({
//                 point : 0,
//                 randomNumber,
//             });
//         }
//     });
//     return promise;
// }


// const start = () => {
//     enterNumber().then((data)=>{
//         alert(`Result :${data.point} and ${data.randomNumber} `);
//     })
//     .catch((error) => alert("error"));
// }     

// start();


// Promise example

const user = [
    {
        id: 1 ,
        name:'Kien Dam',
    },
    {
        id: 2 ,
        name:'Son Dang',
    },
    {
        id: 3 ,
            name:'Hung Dam',
    }
]


const comment = [
    {
        id:1 ,
        content:'Anh Son chua ra video'
    },
    {
        id:2,
        content : 'Vua ra xong em oi '
    }
]

function getComment(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(comment);
        });   
    });
}

getComment().then((comment) => {
          var userId = comment.map(() =>comment.userId)
        })  