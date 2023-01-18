function PostItem(props){
    return (
        <div  className="post-item">
            <label htmlFor="email">Email</label>
            <input id="email"/>
            <img src="" alt={props.imagealt}/>    
            <h2 className="post-title"></h2>
            <p className="post-desc">{props.description}</p>
            <p className="post-published">{props.publichsed}</p>
        </div>
    )
}


//App.js
function App(){
    return (
        <div id="wapper" >
            <PostItem
                title="C#.Net - Tương tác với file Excel"
                imagealt = "day la anh"
                description = "Bạn có kiến thức về C#"
                publichsed = "Một ngày trước - 5 phút trước"
            />
         
        </div>
    ) 
}
    
//index.js
ReactDOM.render(<App/>, document.getElementById('root'))
