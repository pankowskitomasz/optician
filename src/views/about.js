import React,{Component} from "react";
import AboutShort from "../components/about-short";
import AboutExt from "../components/about-ext";

class About extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <AboutShort/>
                <AboutExt/>
            </main>
        );
    }
}

export default About;