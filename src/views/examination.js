import React,{Component} from "react";
import ExaminationExt from "../components/examination-ext";

class Examination extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <ExaminationExt/>
            </main>
        );
    }
}

export default Examination;