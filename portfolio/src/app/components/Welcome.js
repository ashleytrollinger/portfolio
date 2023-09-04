import React from 'react';
import Image from 'next/image';
import './Welcome.css';
import TypedText from '../builders/TypedText';
// Importing the image
import bitmoji from '../images/bitmoji.png';


export default function Welcome() {
    return (
        <section className="welcome-section">
            <div className="image-container">
                <Image src={bitmoji} alt="Bitmoji photo of Ashley" className='bitmo' />
            </div>
            <p><TypedText /></p>
        </section>
    )
}