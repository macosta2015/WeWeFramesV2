import React from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';
import Typography from '@mui/material/Typography';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault(); //This is important, I'm not sure why, but the email won't send without it

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
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

