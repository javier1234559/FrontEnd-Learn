# Ghi chep code bai hoc



### **Todo list with useState**

```
function App() {
  const [job,setJob] = useState('')
  const [jobs,setJobs] = useState(() =>{
    const storageJobs = JSON.parse(localStorage.getItem('jobs'))
    console.log(storageJobs)
    return storageJobs ?? []
  })

  const handleSubmit = () =>{
    setJobs(prev => {
      const newJobs = [...prev, job]

      //Save to local storage
      const jsonnewJobs = JSON.stringify(newJobs)
      localStorage.setItem("jobs",jsonnewJobs)
      return newJobs
    })
    setJob('')
  }

  return (
    <div style={{padding : 32 }}>
        <input 
          value={job}
          onChange={e => setJob(e.target.value)}
        />
        <button onClick={handleSubmit} >Add</button>

        <ul>
          {jobs.map((job,index) => {
            return <li key={index}>{job}</li>
          })}
        </ul>
      
    </div>
  );
}

```
## **Mounted and UnMounted with useEffect**

### 1. useEffect (callback)
- Callback se luon duoc goi sau khi component re-render (o day la TH mounted)
- Callback se duoc goi sau khi component  them element vao DOM
### 2. useEffect (callback , [])
- Chi goi callback 1 lan sau khi component mounted
### 3. useEffect (callback , [deps])
- Chi goi callback 1 lan sau khi deps thay doi

```
function Content(){
    const tabs = ['posts','comments','albums']

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])
    const [type , setType] = useState('posts')

    useEffect(()=>{
        console.log('Type changed')
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res =>res.json())
            .then(posts => {
                setPosts(posts)
        });
    },[type])
    
    return (
        <div>
            {tabs.map(tab => {
                return <button
                    key = {tab}
                    style={type === tab ? { 
                        color : '#fff',
                        backgroundColor :'#333'
                     } : {}}
                    onClick= {() => setType(tab)}
                >{tab}</button>
            })}

            <input 
                value = {title}
                onChange={e => setTitle(e.target.value) }
             />
            <ul>
                {posts.map(post => {
                    return <li key = {post.key}>{post.title || post.name}</li>
                })}
            </ul>

        </div>

    )
}
```

### Window event-listener with useEffect

- Khi muốn thêm sự kiện vào useEffect thì sau khi unmounted thì phải xóa đi sự kiện để ko "leak memory"

 Ex1:
```
function Content(){
    const [width, setwidth] = useState(window.innerWidth)

    useEffect(()=>{
        const handleResize = () => {
            setwidth(window.innerWidth)
        }
        window.addEventListener('resize',handleResize)
        console.log("add event");

        return () => {
            window.addEventListener('resize',handleResize)
            console.log("remove event")
        }
    },[])

    return (
        <div>
            <h1>{width}</h1>
        </div>
    )
}
```

Ex2
```
function Content(){
    const [countdown,setcountdown] =  useState(100)

    useEffect(()=>{
        const countDown = setInterval(()=>{
            setcountdown(p => p - 1)
        },1000)

        return () => clearInterval(countDown)
    },[])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}
```
Ex3 
```

function Content(){
    const [avatar,setAvatar] =  useState()

    useEffect(()=>{
        //cleanup 
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    },[avatar])

    const handlePreviewAVatar = (e) =>{
        const file = e.target.files[0]

        console.log(URL.createObjectURL(file))
        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input 
                type="file"
                onChange={handlePreviewAVatar}
             />
             {avatar && (
                <img src={avatar.preview } alt="" width="80%"/>
              )}
        </div>
    )
}
```

### Different between useEffect and useLayoutEffect

#### 1. useEffect 
- 1. Cập nhât lại state
- 2. Cập nhật DOM (mutated)
- 3. Render lại UI
- 4. Gọi cleanup nếu deps thay đổi
- 5. Gọi useEffect callback
#### 2. useLayoutEffect (hoat dong giong nhung se kiem tra sycn useEffect)
- 1. Cập nhât lại state
- 2. Cập nhật DOM (mutated)
- 4. Gọi cleanup nếu deps thay đổi (sync)
- 5. Gọi useEffect callback (sync)
- 3. Render lại UI 

```
function Content(){
    const [count , setCount] = useState(0)

    useLayoutEffect(() =>{
        if(count > 3)
            setCount(0)
    }, [count])
    const handleIncreaseCount = () =>{
        setCount(count + 1 )
    }

    return (
        <div>
            <h1>{count}</h1>
            <button 
                onClick={handleIncreaseCount}
            >Run</button>
        </div>
    )
}
```

### Variable with userRef 

```
function Content(){
    const [count , setCount] = useState(60)

    const timerID = useRef()
    const previousOfCount = useRef() //khac voi timerID
    const h1Ref = useRef()


    useEffect(()=>{
        previousOfCount.current = count
    },[count])

    useEffect(()=>{
        console.log(h1Ref.current)
        console.log(h1Ref.current.getBoundingClientRect())
    })

    const handleStart = () =>{
        timerID.current = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);
        console.log("Start " , timerID.current)
    }
    console.log( timerID.current)

    const handleStop = () =>{
        clearInterval(timerID.current)

        console.log("Stop " , timerID.current) 
    }

    return (
        <div>
            <h1>{timerID.current || count}  </h1>
            <h1>{previousOfCount.current}</h1>
            <h1 ref={h1Ref}>h1ref</h1>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop} >Stop</button>
        </div>
    )
}


```

#### memo and useMemo and useCallback . Will be recover later

#### Begin with useReducer

```
// useState 
// 1. Init state : 0 
// 2. Action  : Up - setCount(count + 1) ..

// useReducer
// 1. Init state : 0 
// 2. Action  : Up - setCount(count + 1) ..
// 3. Reducer
// 4. Dispatch

// 1. Init state 
const inistate =  0 
// 2. Action  
const UP_ACTION = 'up'
const DOWN_ACTION = 'down'
// 3. Reducer
const reducer = (state , action )=>{
    switch(action){
        case DOWN_ACTION:
            return state - 1
        case UP_ACTION:
            return state + 1
        default:
            throw new Error("not a action ")  
    }
}

function Content(){
    const [count , Dispatch] = useReducer(reducer , inistate)


    return (
        <div style={{ padding : '0 20px'}}>
            <h1>{count}</h1>
            <button onClick={() => Dispatch(DOWN_ACTION)} >Down</button>
            <button onClick={() => Dispatch(UP_ACTION)} >Up</button>
        </div>
    )
}

```

####

