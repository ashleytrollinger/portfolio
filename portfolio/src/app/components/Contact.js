import React from 'react';
import './Contact.css';

export default function Contact() {
    return (
        <section className='contact-section'>
            <h2>Contact</h2>
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