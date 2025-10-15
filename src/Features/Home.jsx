import React, { useState, useEffect, Suspense } from 'react';
import Navbar from './Navbar';

const Skills = React.lazy(() => import('./Skills'));
const Projects = React.lazy(() => import('./Projects'));
const Contact = React.lazy(() => import('./Contact'));
const Design_Gallery = React.lazy(() => import('./Design_Gallery'));

function Home() {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

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
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Skills />
                </Suspense>
            </section>

            <section id="projects" className="section">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Projects />
                </Suspense>
            </section>

            <section id="design_gallery" className="section">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Design_Gallery />
                </Suspense>
            </section>

            <section id="contact" className="section">
                <Suspense fallback={<div className="loading">Loading...</div>}>
                    <Contact />
                </Suspense>
            </section>

            {showScrollTop && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    )
}

export default Home;