import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return(
        <div className="UserOutput">
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    );
};


export default userOutput;