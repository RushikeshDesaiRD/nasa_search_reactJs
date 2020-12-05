import React from 'react'

export default function Navabr({search,setSearch,fetchData}) {
    return (
        <div class="header-bg">
          <div class="container">
          <div class="col-5">
           <h1>
           <img class="logo_png" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/NASA_Wormball_logo.svg/512px-NASA_Wormball_logo.svg.png"/>
           Tube
           </h1>
           <h5 class="text-white">NASA Image and Video Library</h5>
           </div>

           <div class="row">
              <div class="row-custom">
               <input type="text" 
               value={search}
               onChange={(e) => setSearch(e.target.value)}
                placeholder="Search For ...( 'e.g. Orion' )"
                 class="form-control-custom"/>
               <button onClick={() => fetchData()}>SEARCH</button>
              </div>
           </div>
          </div>
        </div>
    )
}
