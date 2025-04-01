import { useState } from "react";
import { PostComponent } from "./Post";
function App() {
  
  const [posts, setPosts]=useState([]);
  
  
  const postComponents = posts.map(post => <PostComponent name={post.name}
  subtitle={post.subtitle}
  time={post.time}
  image={post.image}
  description={post.description}/>)

  function addPost(){
    setPosts([...posts,{
      name: "Yash",
      subtitle: "12M followers",
      time: "5m ago",
      image: "https://media.istockphoto.com/id/1056257342/photo/portrait-of-joyful-professional.jpg?s=612x612&w=0&k=20&c=D9H23OM1-heW-xjvmQftBp_YMbZh-n9KFnCb2hE3SHo=",
      description : "Pleasure to onboard you for our next upcoming events!"
    }])
  }
  return (
    <div style={{background: "#dfe6e9", height:"100vh"}}>
      
      <button onClick={addPost}>Add Post</button>
      <div style={{display: "flex", justifyContent: "center"}}>
        <div>
        <div>
        {postComponents}
        </div>
       
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
