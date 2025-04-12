import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './all-costom-hooks/useCounter'
import SetPosts from"./all-costom-hooks/useFetch"
import usePrevHook from './all-costom-hooks/usePrevHook'
import useDebounce from './all-costom-hooks/useDebounce'



function App() {
const [count,setCount] = useState(1)
const Prev = usePrevHook(count)



function IncreaseCount(){

  setCount(count+1)
}


function searchAny(){
  return fetch("https://jsonplaceholder.typicode.com/posts/1")

}
const debounce = useDebounce(searchAny)

return(
  <div>
    <h1>privisous value is {Prev}</h1>
    <button onClick={IncreaseCount}>increase Counter{count}</button>
    <Counter></Counter>
    <SetPosts></SetPosts>
    <input type="text" onChange={debounce} />
  </div>
  )
}



export default App
