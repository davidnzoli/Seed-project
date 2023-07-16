import React from "react";
import './footer_page.css';
import { NavLink } from "react-router-dom";

function Footer_page({menu, reseau}){
    return <React.Fragment>
        <div className="cont-footer">
            <div className="cont-footer-one">
                <ul id="blog-listes">
                    <li id="list">
                        {menu.map((ancre)=>{
                            return <NavLink to={ancre.route} id="navLink">
                                {ancre.name}
                            </NavLink>
                        })}
                    </li>
                </ul>
                <div className="reseau-sec">
                    {reseau.map((reseau)=>{
                        return <>
                            <p id="para-sec">{reseau.nom}</p>
                        <div className="icon">
                            {reseau.contenu.map((icons)=>{
                                return (
                                    <>
                                        <img src={icons.img} alt="img" />
                                    </>
                                )
                            })}
                        </div>
                        </>
                    })}
                </div>
                
            </div>
            <div className="cont-footer-two">
                <p id="para-footer-two">Copyright 2022-2023 tout droit réservé <sub>page-blog</sub></p>
            </div>
        </div>
    </React.Fragment>
}

export default Footer_page;