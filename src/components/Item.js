import React from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
    const [photos, setPhoto]=React.useState()
   
            async function PhotoData(){
            const res = await fetch(`https://images-api.nasa.gov/asset/${props.match.params.id}`);
            const dataSet=await res.json()
            setPhoto(dataSet.collection.items[0].href)
        
        }   
      
        PhotoData();
    return (
       <> 
       <div className="container mt-5">
            <Link to="/" className="btn btn-danger">Go Back</Link>
            <div className="row">
            <img className="photo" src={photos}/> 
            </div>
           
       </div>
       
        </>
)
}
