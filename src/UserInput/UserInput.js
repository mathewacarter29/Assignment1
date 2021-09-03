import React from 'react'
import './UserInput.css'

const userInput = (props) => {
const style = {
    backgroundColor:"gray"
}

    return (
        <div className='UserInput'>
            <input 
            type="text" 
            value={props.user} 
            onChange={props.handler} 
            style={style}
            ></input>
        </div>
        
    );
}

export default userInput;