import Axios from "axios"
import React,{useState} from "react"
import Navbar from "./components/Navabr"
import "./App.css"
import Gallery from "./components/Gallery"
import { BrowserRouter,Route, Switch } from "react-router-dom"
import Item from "./components/Item"
import Video from "./components/video"
//kgFf4nv0Te8HkhNWjf8V5vv2HkmhlTuxcUlADBfj
function App() {
  const [data, setData]=React.useState([])
  const [search, setSearch]=React.useState()
  const apiKey='kgFf4nv0Te8HkhNWjf8V5vv2HkmhlTuxcUlADBfj'
 // media_type=image
 async function fetchData(){
  console.log(search)
  const res = await fetch(`https://images-api.nasa.gov/search?q=${search}`);
   const dataSet=await res.json()
   setData(dataSet.collection.items);
  
  } 
  return (
  <>
  <BrowserRouter>

       <Route exact path="/">
            <Navbar search={search} setSearch={setSearch} fetchData={fetchData}/>
       </Route>  
       <Route exact path="/">
             <Gallery data={data} />
       </Route>  
        
      
        <Switch>
          <Route exact path="/item/:id" component={Item} />
          <Route exact path="/video/:id" component={Video} />
        </Switch>
  </BrowserRouter>




   
   
   
   
  </> 
  );
}

export default App;
