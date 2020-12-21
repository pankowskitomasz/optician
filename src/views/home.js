import React,{Component} from "react";
import AboutShort from "../components/about-short";
import ContactForm from "../components/contact-form";
import IndexSlider from "../components/index-slider";
import Tiles from "../components/tiles";

class Home extends Component{
    render(){
        return(
            <main className="minh-100vh bg-white">  
                <IndexSlider/>
                <Tiles/>
                <AboutShort/>
                <ContactForm/>
            </main>
        );
    }
}

export default Home;