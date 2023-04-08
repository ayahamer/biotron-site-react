import React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

{/* automatic css classes. one is the outline and the other is primary cause you can see the background  and similar for the sizes*/}
const STYLES = ['btn--primary', 'btn--outline'] 
const SIZES = ['btn--medium', 'btn--large']

{/* this is going to assign a default of the array (position 0) for style and size if one is not assigned */}
export const Button = ({children, type, onClick, buttonStyle, buttonSize}) =>  
{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
    
    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

    return (
        <Link to='/about' className='btn-site'> 
            <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} 
            onClick={onClick} type={type}> 
                {children} {/* this will render whatever you put into the button */}
            </button>
        </Link>
    );
}

