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

// import React from 'react';
// import emailjs from 'emailjs-com';

// export default function ContactUs() {

//     function sendEmail(e) {
//         e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

//         emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
//             .then((result) => {
//                 window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
//             }, (error) => {
//                 console.log(error.text);
//             });
//     }

//     return (
//         <form className="contact-form" onSubmit={sendEmail}>
//             <input type="hidden" name="contact_number" />
//             <label>Name</label>
//             <input type="text" name="from_name" />
//             <label>Email</label>
//             <input type="email" name="from_email" />
//             <label>Subject</label>
//             <input type="text" name="subject" />
//             <label>Message</label>
//             <textarea name="html_message" />
//             <input type="submit" value="Send" />
//         </form>
//     );
// }