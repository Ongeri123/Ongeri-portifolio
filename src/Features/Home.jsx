import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

function Home() {
    return (
        <div>
            <Navbar />
            
            <section id="home" className="section" style={{
                backgroundImage: "url('/port-bg.png')", 
                backgroundSize: 'cover',   
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat',
                height: '100vh',
                }}>
                <div className='home'>
                    <div className='content'>
                        <h1>NEWTON ORINA</h1>
                        <h2>SOFTWARE ENGINEER & GRAPHIC DESIGNER</h2>
                    </div>
                </div>
            </section>

            <section id="skills" className="section">
                <Skills />
            </section>

            <section id="projects" className="section">
                <Projects />
            </section>

            <section id="experience" className="section">
                <Experience />
            </section>

            <section id="contact" className="section">
                <Contact />
            </section>
        </div>
    )
}

export default Home;