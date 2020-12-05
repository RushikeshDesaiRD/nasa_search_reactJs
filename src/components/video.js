import React from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
    const [photos, setPhoto]=React.useState()
    
            async function PhotoData(){
            const res = await fetch(`https://images-api.nasa.gov/asset/${props.match.params.id}`);
            const dataSet=await res.json()
            setPhoto(dataSet.collection.items[1].href)
            console.log(dataSet) 
        }   
      
        PhotoData();
    return (
       <> 
       <div className="container mt-5">
            <Link to="/" className="btn btn-danger">Go Back</Link>
            <div className="row">
            <video className="photo" controls>
                   <source src={photos} type="video/mp4"/>
                   <source src={photos} type="video/ogg"/>
                
        </video>
            </div>
           
       </div>
       
     </>
)
}
