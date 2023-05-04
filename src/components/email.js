//We were having problems for the .env files. We moved the .env to the 'root folder' and followed
//the instructions on: https://stackoverflow.com/questions/59911706/module-not-found-error-cant-resolve-fs-in-node-modules-dotenv-lib

import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './email.css';
import Typography from '@mui/material/Typography';

//Importing from React context
import ThemeContext from '../ThemeContext';


// .env files
console.log(process.env)
const firstEmail = process.env.REACT_APP_YOUR_SERVICE_ID
const secondEmail = process.env.REACT_APP_YOUR_TEMPLATE_ID
const thirdEmail = process.env.REACT_APP_YOUR_PUBLIC_KEY


export default function ContactUs() {

    const myVar = React.useContext(ThemeContext);
    console.log('TEST ' + myVar)

    function sendEmail(e) {


        e.preventDefault(); //This is important, I'm not sure why, but the email won't send without it

        emailjs.sendForm(firstEmail, secondEmail, e.target, thirdEmail)
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
    }

    return (
        <div className="contact-container">
            <form className="contact-form" onSubmit={sendEmail}>
                <Typography variant="h2" style={{ color: '#587D71' }}>
                    Contact Inforamtion
                </Typography>
                <div className="form-inputs">
                    <div className="form-group">
                        <input type="text" name="from_name" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <input type="email" name="from_email" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <div className="form-group">
                        <textarea name="html_message" placeholder="Message" rows="5" />
                    </div>
                </div>
                <div className="form-actions">
                    <input type="submit" value="Send Message" />
                </div>
            </form>
        </div>
    );
}

