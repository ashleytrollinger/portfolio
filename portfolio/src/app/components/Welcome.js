import React from 'react';
import Image from 'next/image';
import './Welcome.css';
// Importing the image
import bitmoji from '../images/bitmoji.png';


export default function Welcome() {
    return (
        <section className="welcome-section">
            <div className="image-container">
                <Image src={bitmoji} alt="Bitmoji photo of Ashley" />
            </div>
            <p>Hello! Welcome to a website dedicated to me, Ashley Trollinger.</p>
        </section>
    )
}