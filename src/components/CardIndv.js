import React from 'react';
import {Link} from 'react-router-dom';

function CardIndv(props) {
  return (
    <>
      <li className='cards-indv'>
        <Link className='cards-indv-link' to={props.path}> {/*take what we added on card properties and pass it down to these components */}
        
          {/* image and image description. will have a data category */}  
            <figure 
              className='cards-indv-figure' data-category={props.label}> 
              <img 
              src={props.src} 
              alt="Hand Image" className='cards-indv-img'
              />
            </figure>

            <div className="cards-indv-info">
              <h5 className="cards-indv-text">{props.text}</h5>
            </div>
        </Link>
      </li>
    </>
  );
}
export default CardIndv;

