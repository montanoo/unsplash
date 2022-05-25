import React from 'react';
import moment from 'moment';

export const ImageList = ({images}) => {
  console.log(images)
  return (
    <>
      {images.length > 0 && <h1> Result of the search </h1>}

      <div className="ui grid">
        {images.map((image) => {
          return (
             <div className="four wide column" key={image.id}>
               <div className="ui card">
                <div className="image"> 
                 <img src={image.urls.thumb} alt=""/>
                </div>
                <div className="content">
                  <div className="description">
                    {image.description}
                  </div>
                  <div className="meta"> 
                    <span className="date">
                      created {moment(image.created_at, 'YYYYMMDD').fromNow()}
                    </span>
                  </div>
                </div>
                <div className="extra content">
                  <span>
                    <i className="like icon"></i> {image.likes}
                  </span>
                </div>
               </div>
             </div>
          )
        })}
      </div>
    </>
  )
}