import React from "react";
import './login_page.css';

function Login_page(){
    return <div className="global">
     <div className="cont-login">
             <h1 id="titre-login">Connetez-vous</h1>
            <form id="for">
                <input type="text" placeholder="Adresse mail" />
                <input type="text" placeholder="Mot de passe" />
                <button id='connexion'>Connexion</button>
            </form>
    </div>
</div> 
}
export default Login_page;