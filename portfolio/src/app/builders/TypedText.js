'use client'
import React from 'react';
import Typed from 'typed.js';

export default function TypedText() {
    React.useEffect(() => {
        const options = {
            strings: ["Welcome! My name is Ashley Trollinger and this is my Full Stack Portfolio!"],
            typeSpeed: 50, // Adjust typing speed as needed
        };

        const typed = new Typed('.typed-text', options);

        return () => {
            typed.destroy(); // Cleanup on unmount
        };
    }, []);

    return <span className="typed-text"></span>;
}
