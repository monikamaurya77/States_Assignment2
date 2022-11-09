import React from 'react';

const Input = (props) => {
    return (
     <div >
        <h2>Write Something Here... (Markdown)</h2>
<textarea className="scroll" rows="50" cols="100" onChange={(e) => {props.setdatafn(e.target.value)}}>
</textarea>
       </div>
    );
}

export default Input;