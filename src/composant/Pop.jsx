import React from "react";
import './pop.css'

function Pop(props){

    return (props.visible) ? ( <div className="cont">
    <div className="glob">
        <h2 id='glob-titre'>Voulez-vous publier une article ?</h2>
        <p id='glob-para'>je vous invite de cliquer sur 'Oui' pour écrire une article </p>
        <button id='glob-button' onClick={()=>{props.open(true)}}>
        Oui</button>

    <img style={{
    }} src="./close.png" alt="img" id="blog-image" onClick={()=>{props.close(false)}} />
    </div>
</div>) : ''
}
export default Pop;