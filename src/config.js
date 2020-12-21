import {Redirect} from "react-router-dom";
import About from "./views/about";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Examination from "./views/examination";
import Glasses from "./views/glasses";
import Home from "./views/home";
import Lenses from "./views/lenses";
import Offer from "./views/offer";
import Offices from "./views/offices";
import PrivacyPolicy from "./views/privacy";

const appCfg = {
    routes:[
        {navItem:true, exact:true, path:"/",name:"Home",view:<Home/>},
        {navItem:true, exact:false, path:"/about",name:"About",view:<About/>},
        {navItem:true, exact:false, path:"/offer",name:"Offer",view:<Offer/>},
        {navItem:false, exact:false, path:"/examination",name:"Examination",view:<Examination/>},
        {navItem:false, exact:false, path:"/glasses",name:"Glasses",view:<Glasses/>},
        {navItem:false, exact:false, path:"/lenses",name:"Lenses",view:<Lenses/>},
        {navItem:true, exact:false, path:"/offices",name:"Offices",view:<Offices/>},
        {navItem:true, exact:false, path:"/contact",name:"Contact",view:<Contact/>},
        {navItem:false, exact:false, path:"/comingsoon",name:"Comingsoon",view:<Comingsoon/>},                
        {navItem:false, exact:false, path:"/error",name:"Error",view:<Error backLink={{name:"back to Home",href:"/"}}/>},
        {navItem:false, exact:false, path:"/privacy",name:"Privacy",view: <PrivacyPolicy backLink={{name:"back to Home",href:"/"}}/>},                
        {navItem:false, exact:false, path:"*",name:"any",view:<Redirect to="/error"/>}
    ]
};
const homeCfg = [
    
];

export {
    appCfg,
    homeCfg
}