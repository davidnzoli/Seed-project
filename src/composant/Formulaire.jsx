import React from "react";

function Formulaire(){
    return (
        <>
            <div className="treeblog">
                <div className="box-treeblog-left"><img src="/contact.jpg" alt="img" id="image-treeblog"/></div>
                <div className="box-treeblog-right">
                <form id="form" action=" ">
                    <h2 id="titre-form">Contactez-nous</h2>
                    <input type="text" placeholder="User Name" />
                    <input type="text" placeholder="Adresse Mail" />
                    <textarea id="textarea" placeholder="Objet" />
                    <button id="btn">Soumettre</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Formulaire;