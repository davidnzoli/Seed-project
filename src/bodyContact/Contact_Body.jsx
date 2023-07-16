import React from "react";
import './Contact_body.css';
import { NavLink } from "react-router-dom";
import Formulaire from "../composant/Formulaire";

function Contact_Body({mail, Smail, formulaire}){
    return <React.Fragment>
        <div className="cont-contact">
            <h2 id="titre-cont-contact">Nous contactez</h2>
                <div className="mail-div">
                    {mail.map((el)=>{
                        return (
                            <>
                                <img src={el.img} alt="icon" id="img"/>
                                   <p id="para-nav"><NavLink to="mailto: davizolin93@gmail.com"  id="nav">
                                    davizolin93@gmail.com</NavLink></p>
                                   <p id="para-nav"><NavLink to="mailto: schadrackkabinzo@gmail.com" id="nav" >
                                    schadrackkabinzo@gmail.com</NavLink></p>
                            </>
                        )
                    })}
                </div>
                <div className="phone-local-div">
                    
                    {Smail.map((items)=>{
                        return (
                        <>
                        <div className="blog">
                        <img src={items.img} alt="img" id="img" />
                        
                        {items.route.map((i)=>{
                            return(
                                <>
                                    <p id="para-el">{i.nom}</p>
                                </>
                            )
                        })}</div>
                        </>
                        )
                    })}
                    
                </div>
        </div>
        <Formulaire />
        
    </React.Fragment>
}
export default Contact_Body;