import { useState } from "react";
import { useEffect } from "react";
import { PostComponent } from "./Post";
function App() {
  
  const [posts, setPosts]=useState([]);
  
  
  const postComponents = posts.map(post => <PostComponent name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}/>)
  

  const [count, setCount] = useState(0);
  function addPost(){
    setCount(currentVal => currentVal + 1);
    setPosts(posts => [...posts,{
      name: "Yash",
      subtitle: "12M followers",
      time: "5m ago",
      image: "https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=",
      description : "Pleasure to onboard you for our next upcoming events!"
    }])
  }
  useEffect(function(){

    
  },[])
  
  


  return (
    
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      <div><TabComponents/></div>
      <button onClick={addPost}>Add Post</button>
      <div style={{backgroundColor: "red", width: "20px", height: "20px", borderRadius: "50%", paddingLeft:"8px", margin: "5px"}}>{count}</div>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
        <div>
        {postComponents}
        </div>
       
        
        
      </div>
      <div>
        <Card>
        "Hi There!"
        </Card>
        <Card>
        <div style={{backgroundColor: "yellow"}}>
          <input type={"text"}></input>
        </div>
        </Card>
      </div>
      <div>
        <Todo key={1} title={"Code 12 hours"} done={false} />
        <Todo key={2} title={"Have dinner"} done={true} />
      </div>
      <div>
        <Card1/>
      </div>
      </div>
      </div>
      
  )
    
  

}


const ToggleMessage = () => {
  const [notificationCount, setNotificationCount] = useState(0);
  function increment(){
    setNotificationCount(notificationCount + 1);
  }
  return(
    <div>
      <button onClick={increment}>Increase Count</button>
      {notificationCount}
    </div>
  )

}

function Todo({title, done}){
  return <div>
    {title} is {done ? "done" : "not done"}
  </div>
}

function Card({children}){
  return <div style={{background: "black", borderRadius: 10, color: "white", padding: "10px"}}>
    {children}
  </div>
}

function Card1(){
  return <div style={{background: "red", borderRadius : 20, padding : 20}}>
    Hi there
  </div>
}




function TabComponents(){
  const [tab, setTab]=useState({});
  const [currentTab, setCurrentTab]=useState(1);
  const [loading, setLoading]=useState(true);
  useEffect( function(){
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab)
    .then(async res => {
      const json = await res.json();
      setTab(json);
      setLoading(false);
    })
    
  }, [currentTab])
 
  return(
    <div>
      <button onClick={function(){
        setCurrentTab(1)
      }} style={{color: currentTab==1 ? "red" : "black" }}>Task 1</button>
      <button onClick={function(){
        setCurrentTab(2)
      }} style={{color: currentTab==2 ? "red" : "black" }}>Task 2</button>
      <button onClick={function(){
        setCurrentTab(3)
      }} style={{color: currentTab==3 ? "red" : "black" }}>Task 3</button>
      <button onClick={function(){
        setCurrentTab(4)
      }} style={{color: currentTab==4 ? "red" : "black" }}>Task 4</button>
      <button onClick={function(){
        setCurrentTab(5)
      }} style={{color: currentTab==5 ? "red" : "black" }}>Task 5</button>
    <br/>
    <div>{loading ? "Loading..." : "Task no. "+tab.id +" has title as "+tab.title}</div>
    </div>
  
  )
}





// function ProfileCard(){
//   return <div style={{display: "flex", width: "100px", height: "200px", backgroundColor:"white", borderRadius:"12px"}}>
//     <div>
//       <img src={"https://media.istockphoto.com/id/1223491689/photo/spacex-headquarters-in-hawthorne-california.jpg?s=612x612&w=0&k=20&c=_MulCvT31T6viLLGp7TllAEiIwXQ7EF1YcZ0IQKxLkk="} style={{
//       width: 20,
//       height:20,
//       borderRadius: 20  
//     }}/>
//     </div>
//   </div>
// }
export default App
