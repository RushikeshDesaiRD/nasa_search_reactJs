import React from 'react'
import { Link } from 'react-router-dom';

export default function ({data}) {
    const images=[]=data;

    console.log(images) 
    return (
        <div class="gallery">
            <br/>
            <div class="container">
              
               {
                    data.length === 0 ? 
                 <div className="alert alert-danger text-center">
                    <h3>Not Yet Searched...</h3>
                </div>
                :
                <>
                <div className="alert alert-success text-center">
                    <h3>Search Result.....</h3>
                </div>    
                    <div className="row text-left">
                        {
                            images.map(item=>(
                            <div className="col-12">    
                            <div className="p-2">
                                <h2>{item.data[0].title}</h2>
                                <p>{item.data[0].description}</p>
                                {
                                    item.data[0].media_type === "image"
                                     ? 
                                      <Link to={"/item/"+item.data[0].nasa_id}>
                                         see Image
                                      </Link>
                                      :
                                      <Link to={"/video/"+item.data[0].nasa_id}>
                                        See Video
                                      </Link>
                                }
                               
                             </div>
                             </div>
                            ))
                        }
                    </div>
               </>
                }
                </div>
               
            </div>
        
    )
}
