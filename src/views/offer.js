import React,{Component} from "react";
import Tiles from "../components/tiles";
import TilesExt from "../components/tiles-ext";

class Offer extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <Tiles/>
                <TilesExt/>
            </main>
        );
    }
}

export default Offer;