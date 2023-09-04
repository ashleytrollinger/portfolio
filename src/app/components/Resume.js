import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <section className='resume-section'>
            <div>
                <h2>My Resume</h2>
            </div>
            <div className='link-to'>
                <a href={'../images/resume.pdf'} download>
                    <h3><span>Download my Resume</span></h3>
                </a>
            </div>
            <div className='skills'>
                <div className='side-one'>
                    <h5>Front-End Proficiencies</h5>
                    <ol>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Bootstrap</li>
                        <li>React</li>
                        <li>version control/Git</li>
                        <li>Responsive Design</li>
                    </ol>
                    <br></br>
                    <h5>Dev Tool Proficiencies</h5>
                    <ol>
                        <li>Git</li>
                        <li>npm</li>
                    </ol>

                </div>
                <div className='side-two'>
                    <h5>Back-End Proficiencies</h5>
                    <ol>
                        <li>APIs</li>
                        <li>NodeJS</li>
                        <li>Express</li>
                        <li>Model View Controller (MVC)</li>
                        <li>Progressive Web Applications (PWA)</li>
                    </ol>
                    <br></br>
                    <h5>Database Proficiencies</h5>
                    <ol>
                        <li>MySQL</li>
                        <li>Sequelize</li>
                        <li>NoSQL</li>
                        <li>SQLite</li>
                        <li>MongoDB</li>
                    </ol>
                </div>
            </div>
        </section>
    )
}