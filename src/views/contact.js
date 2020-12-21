import React,{Component} from "react";
import ContactData from "../components/contact-data";
import ContactForm from "../components/contact-form";

class Contact extends Component{
    render(){
        return(
            <main className="minh-100vh p-header bg-white">  
                <ContactData/>
                <ContactForm/>
            </main>
        );
    }
}

export default Contact;