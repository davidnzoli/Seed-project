import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home_Body from '../bodyHome/Home_Body';
import About_Body from '../bodyAbout/About_Body';
import Article_Body from '../bodyArticle/Article_Body';
import Contact_Body from '../bodyContact/Contact_Body';
import Login_page from '../bodyLogin/Login_page';
import Sign_page from '../bodySign/Sign_page';
import NavEl from "../nav-bar/NavEl";
import {arrayRoute} from '../tableaux-dependance/arrayRoute';
import { arrayR } from "../tableaux-dependance/arrayRoute";
import Footer_page from "../footer/Footer_page";
import { arrayF } from "../tableaux-dependance/arrayRoute";
import {arrayReseau} from "../tableaux-dependance/arrayRoute";
import {arrayRoutes} from "../tableaux-dependance/arrayRoute";
import {arrayContact} from "../tableaux-dependance/arrayRoute";
import {arrayContact2} from  "../tableaux-dependance/arrayRoute";
import {image} from "../tableaux-dependance/arrayRoute";
import {contenu} from "../tableaux-dependance/arrayRoute"

function R_routes(){
    return < BrowserRouter>
        <NavEl array={arrayRoute} rout ={arrayR} img={image}/>
        <Routes>
            <Route path="/" element={<Home_Body route={arrayRoutes}/>}/>
            <Route path="/about" element={<About_Body />}/>
            <Route path="/article" element={<Article_Body contenu={contenu} />}/>
            <Route path="/contact" element={<Contact_Body mail={arrayContact} Smail={arrayContact2} />}/>
            <Route path="/login" element={<Login_page />}/>
            <Route path="/signUp" element={<Sign_page />}/>
        </Routes>
        <Footer_page menu={arrayF} reseau={arrayReseau}/>
    </ BrowserRouter>
}

export default R_routes;