import React from 'react';

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <a href='#welcome'>Welcome</a>
                </li>
                <li>
                    <a href='#about'>About Me</a>
                </li>
                <li>
                    <a href='#resume'>Resume</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </nav>
    )
}