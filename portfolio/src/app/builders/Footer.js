import React from 'react';
import Image from 'next/image';
import './Footer.css';
// Importing logos
import github from "../images/githubmark.png";
import instagram from "../images/instagram-icon.png";
import linkedin from "../images/linkedin.png";
export default function Footer() {
    return (
        <footer className="footer">
            <div>
                <a
                    href="https://github.com/ashleytrollinger"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={github}
                        alt="Github"
                        className="logo"
                    />
                </a>
            </div>
            <div>
                <a
                    href="https://linkedin.com/in/ashley-trollinger-a3276826a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={linkedin}
                        alt="LinkedIn"
                        className="logo"
                    />
                </a>
            </div>
            <div>
                <a
                    href="https://www.instagram.com/ashaleetalotta/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image
                        src={instagram}
                        alt="Instagram"
                        className="logo"
                    />
                </a>
            </div>
        </footer>
    )
}