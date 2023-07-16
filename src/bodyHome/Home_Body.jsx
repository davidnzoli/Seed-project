import React from "react";
import './Home_body.css';
import { NavLink } from "react-router-dom";
import Formulaire from "../composant/Formulaire";

function Home_Body({route}){
    return <React.Fragment>
        <div  className="cont-page-home">
            <div className="oneblog">
            {/* {route.map((el)=>{
                return (
                    <>
                <NavLink to={el.route} id="nav-rout">
                {el.nom}
            </NavLink>
            </> 
            )
            
            })} */}
                <div className="cont-items">
                    <h2 id="titre-oneblog-left"> Voulez-vous publier et récevoir des commenataires et des répliques sur vos articles
                    publiés ? alors Send est là rien que pour vous!
                    </h2>
                    {/* <div className="box-oneblog-right">
                        <p id="paragraphe-box-right"> Publier et récevrez des commentaires des nos proches
                        Send vient à disposition de tout etre humain sans écception dans le cadre de bisnes
                        et dans le cadre du statut/commentaire, Send est là rien que pour vous !
                        </p>
                    </div> */}
                      {route.map((el)=>{
                return (
                    <>
                <NavLink to={el.route} id="nav-rout">
                {el.nom}
            </NavLink>
            </> 
            )
            
            })}
                </div>
              
            </div>
            <div className="stark"></div>

            <div className="twoblog">
                <div className="twoblog-left">
                    <h1 id="titre-h1">A PROPOS DE NOUS</h1>
                    <h2 id="titre-twoblog"> Send mets à la disposition de tout individu 
                    une opportinuté de publier des articles
                    rien que pour partager ses idées, ses pensés ainsi que ses reves avec ses proches.
                    Send vous donne l'opportinité de publier tout type d'article notamment photo, texte/message...

                    </h2>
                    <p id="paragraphe-twoblog">C'est à votre disposition que Send est là; 
                    à tout moment Send est là juste pour vous ! Publiez et recevez des 
                    commentaires des vos ami(e)s, familles & camarades d'une manier rapide et gratuite !
                    </p>
                </div>
                <div className="twoblog-right"> <img src="/img2.jpg" alt="img" id="image-twoblog" /></div>
            </div>

            <Formulaire />
            
        </div> 
    </React.Fragment>
}
export default Home_Body;