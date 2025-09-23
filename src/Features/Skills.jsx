function Skills() {
    return (
        <div style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: 'cover',
                height: '100vh',
                padding: '80px 20px 20px',
            }}>
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Skills</h1>
            <div className="skills-container">
                <div className="skill">
                    <h2>Frontend Development</h2>
                    <ul>
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>HTML5 & CSS3</li>
                        <li>Responsive Design</li>
                        <li>UI Implementation</li>
                    </ul>
                </div>
                <div className="skill">
                    <h2>Backend Development</h2>
                    <ul>
                        <li>Python</li>
                        <li>Flask Framework</li>
                        <li>API Development</li>
                        <li>Database Integration</li>
                        <li>Server Management</li>
                    </ul>
                </div>
                <div className="skill">
                    <h2>Graphic Design</h2>
                    <ul>
                        <li>Figma</li>
                        <li>Canva</li>
                        <li>UI/UX Design</li>
                        <li>Brand Design</li>
                        <li>Digital Graphics</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills;