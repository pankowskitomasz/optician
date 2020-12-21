import React,{Component} from "react";
import LensesExt from "../components/lenses-ext";

class Lenses extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <LensesExt/>
            </main>
        );
    }
}

export default Lenses;