import React, {useState, useEffect} from "react";
import './Article_body.css';
import Ajout from "../composant/Ajout";
import Pop from "../composant/Pop";

function Article_Body({contenu}){
    const [unitialstate, setstate] = useState(false)
    const [stateUnitial, whatchpopup] = useState(false)

    if(unitialstate==true){
        document.body.classList.add('scroll')
    } else{
        document.body.classList.remove('scroll')
    }
    useEffect(()=>{
        setTimeout(()=>{
            setstate(!unitialstate);
        }, 3000);
    }, [])

    return <React.Fragment>
        <div className="blogs">
        {contenu.map((titre)=>{
                    return <>
                    <div className="glob-blogs">
                        
                        <div className="profMail">
                            <img src={titre.profile} alt="profil" id="image"/>
                            <p id="mail">{titre.mail}</p>
                        </div>
                        <h3 id="titreName">{titre.titre.toLocaleUpperCase()}</h3>
                      
                        <div className="titre">
                            <p id="paraTitre">{titre.content}</p>
                        </div>
                        {titre.btn.map((el)=>{
                        return <div className="buttons">
                            <button id="btn" onClick={()=> whatchpopup(true)}>{el.Ajout}</button>
                            <button id="btn">{el.Modif}</button>
                            <button id="btn">{el.Sup}</button>
                        </div>
                    })}
                    </div>  
                </>
                })}            
                </div>
        <Pop visible={unitialstate} open={whatchpopup} close={setstate}/>
        <Ajout cond={stateUnitial} close={whatchpopup}/>
    </React.Fragment>
   
}
export default Article_Body;