const postAPI = "https://jsonplaceholder.typicode.com/posts";

fetch(postAPI)
    .then(function(response){
        console.log(response);
        return response.json();
    })
    .then(post => {
        const baiviet = post.map((item)=>{
            return `<li>
                    <h2>${item.title}</h2>
                    <p>${item.body}<p>            
                </li>`;
        });
        console.log(baiviet);
        console.log(typeof baiviet);
        var string = baiviet.join('');
        document.getElementById("post").innerHTML = string ;
    })
    .catch(()=>
        console.log(`Có lỗi `)
    );
