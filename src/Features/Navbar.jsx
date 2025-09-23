import { useState, useEffect } from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'skills', 'projects', 'experience', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (let section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="navbar">
            <div className='nav-buttons'>
                <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
                    <button>Home</button>
                </a>
                <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>
                    <button>Skills</button>
                </a>
                <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
                    <button>Projects</button>
                </a>
                <a href="#experience" className={activeSection === 'experience' ? 'active' : ''}>
                    <button>Experience</button>
                </a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
                    <button>Contact</button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar;