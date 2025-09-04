import Home from "./components/Home"
import './App.css'
import Array from "./components/Array"
import Counter from "./components/Counter"
import Input from "./components/Input"
import Visble from "./components/Visble"
import Obj from "./components/Obj"
import BasicSyntax from "./useEffect/BasicSyntax"
import DependencyExample from "./useEffect/DependencyExample"
import FetchData from "./useEffect/fetchData"
import ProperFetch from "./useEffect/ProperFetch"
const App = ()=>{
  const user ={
    name:"abhi",
    age:25,
    company:"techfortune"
  }
  return(
   <>
      <div>APP.jsx content</div>
      {/* <Counter/>
      <Input/>
      <Visble/>
      <Array/>
      <Obj/>
      <BasicSyntax/>
      <DependencyExample/>
      <FetchData/> */}
      <ProperFetch/>
   </>
   
  )
}

export default App