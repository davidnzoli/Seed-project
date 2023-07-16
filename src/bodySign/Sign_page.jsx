import React from "react";
import './sign_page.css';

function Sign_page(){
    return <div className="blogy">
    <div className="cont-Sign">
        <h1 id="titre-sign">Création de compte</h1>
        <form id="formul">
            <label id="name">Entrez le nom :</label>
            <input type="text" name="name" placeholder="Nom"/>
            <label id="adresse">Adresse mail :</label>
            <input type="text" name="adresse" placeholder="Adresse"/>
            <label id="pwd">Mot de passe :</label>
            <input type="text" name="pwd" placeholder="Mot de passe" />
            <h3 id="create">Création compte</h3>
        </form>
        </div>
</div>
}
export default Sign_page;