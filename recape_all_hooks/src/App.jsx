import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostComponents from "./assets/components/PostComponent";
import HomeComponents from "./assets/components/HomeComponents";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div
//       style={{
//         background: "gray",
//         height: "100vh",

//       }}
//     >
//       <div style={{display:"flex",justifyContent:"center"}}>
//         <div>
//           <br />
//         <div><PostComponents /></div>
//        <br />
//         <div><PostComponents /></div>
//         <br />
//         <div><PostComponents /></div>
//         <br />
//         <div><PostComponents /></div>
//         </div>

//       </div>
//     </div>
//   );
// }

function App() {
  return (
    <div
      style={{
        height: "100vh",
        background: "gray",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        <div>
          <HomeComponents />
        </div>
        <div>
          <HomeComponents />
        </div>
        <div>
          <HomeComponents />
        </div>
      </div>
    </div>
  );
}

export default App;
