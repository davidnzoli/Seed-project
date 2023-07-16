import React from "react";
import { NavLink } from "react-router-dom";
import './navEl.css';

function NavEl({array,rout, img}){
    return <React.Fragment>
        <div className="cont-navigateurs">
        
            <div className="nav-left">
            {img.map((img)=>{
            return <NavLink to={img.route}><img id='image' src={img.image} alt="icon"/></NavLink>
        })}
                
 
                <img id='image-resp' src='../menu.PNG' alt="icon" />
                       
            </div>

            <div className="nav-milieu">
                <ul id="onlists">
                    <li id="list1">
                        {array.map((el)=>{
                            return <NavLink to={el.route} id="ancre" >
                                {el.name}
                            </NavLink>
                        })}
                    </li>
                </ul>
            </div>
            
            <div className="nav-right">
                <ul id="onlists">
                    <li id="list1">
                        {rout.map((element)=>{
                            return <NavLink to={element.route} id="ancre">
                                {element.nom}
                            </NavLink>
                        })}
                    </li>
                </ul>
            </div>
       
        </div>
    </React.Fragment>
}

export default NavEl;