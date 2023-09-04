import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className='contact-section'>
            <h2>Contact</h2>
            <p>Please reach out if you have any feedback, constructive critism <br></br>(as long as it wont make me cry), or if you want to work together! Job offers/ interest in <br></br>employment are also always welcome!</p>
            <form
                id="contactform"
                action="https://formsubmit.io/send/ashley@trollingers.com"
                method="POST"
            >
                <input name="name" type="text" placeholder="Your Name" required />
                <input name="email" type="email" placeholder="Your Email" required />
                <textarea name="comment" placeholder="Your Message" rows="3" required></textarea>

                {/* You can keep this input field to specify the FormSubmit service */}


                <input value="Submit" type="submit" />
            </form>
        </section>
    )
}