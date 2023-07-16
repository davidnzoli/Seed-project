import React from "react";
import "./ajout.css"

function Ajout(props){
    return (props.cond) ? (
    <div className="cont-ajout">
        <h2 id="titreAjout">Ajouter un Article</h2>
        <form action="" className="globy">
            <input type="text"  id="titre" placeholder="saisir le titre de l'article"/>
            <textarea type="textarea" id="contenu" placeholder="saisir le contenu"/>
            <button id="button" type="Submit" >Envoyer</button>
        </form>    
        <div className="btnFermer">
        <button id="btn-close" onClick={()=>{props.close(false)}}>Fermer</button>
        </div>
    </div>
    ) : " "
}

export default Ajout;