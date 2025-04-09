import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { HomeComponents } from "./components/HomeComponent";


function App() {
  const [posts, setPosts] = useState([]);
  const postComponets = posts.map(post=><HomeComponents
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}/>)

function AddPosts(){
setPosts([...posts,{
  
       name:"Nikhil",
       subtitle:"2k followers",
       time:"20m ago",
       image:"https://avatars.githubusercontent.com/u/172130720?v=4",
       description:"hello my name is nikhil what are you doing"
}])
}
  return (
    <div>
       <div style={{display:"flex",justifyContent:"center",background:"gray",height:"100vh"}}>
        <div style={{width:380}}>
           <button onClick={AddPosts}>addposts</button>
         
         <div>
          {postComponets}
          </div>
          
       
    </div>
        </div>
      
    </div>
   
    
  );
}

export default App;
