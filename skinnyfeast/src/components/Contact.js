import React, {Component} from 'react';
import {FaLocationArrow, FaWhatsapp} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BiTimeFive} from 'react-icons/bi'
import {IconContext} from 'react-icons';

import background from '../images/LogoSkinnyFeast.png'
import Email from './Email';

class Contact extends Component {
    
    render() {
        return (
            <div>
                <div style={{
                    backgroundImage: `url(${background})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundColor: 'black',
                    backgroundImagePosition: 'fixed'
                    }}>
                    
                    <h1 style={{color:'rgb(245, 102, 66)'}}>Get In Touch</h1> 
                    
                    <Email />
                    
                    <IconContext.Provider 
                    value={{ 
                        style: {
                            verticAlign: 'center',
                            fontSize: '35px',
                            color: "rgb(245, 102, 66)"
                        }}}>
                        <div style={{color:'rgb(245, 102, 66)'}}>
                            <FaLocationArrow />
                            <h2 style={{color:'white'}}>Location:</h2>
                            Broadacres,
                            <br />
                            Fourways
                        </div>
                        <br />
                        <div style={{color:'white'}}>
                            <FaWhatsapp />
                            <h2 style={{color:'white'}}>WhatsApp Only:</h2>
                            082 809 9959
                            <br />
                            Office number in process
                        </div>
                        <br />
                        <div style={{color:'rgb(245, 102, 66)'}}>
                            <MdEmail />
                            <h2 style={{color:'white'}}>Email:</h2>
                            info@skinnyfeast.co.za
                        </div>
                        <br />
                        <div style={{color:'white'}}>
                            <BiTimeFive />
                            <h2 style={{color:'white'}}>Operating Hours:</h2>
                            Monday - Friday: 9:00 AM - 5:00 PM
                            <br />
                            Saturday: 9:00 AM - 1:00 PM
                            <br />
                            Sunday & Public Holidays: Closed
                        </div>
                    </IconContext.Provider>
                </div>
            </div>      
        )
    }
}

export default Contact;

//Conatct will have a form
//Details on how to contact the person
//Operating Hours