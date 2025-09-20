function Skills() {
    return (
        <div style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: 'cover',
                height: '100vh',
            }}>
            <h1>Skills</h1>
            <div className="skills-container">
                <div className="skill">
                    <h2>Software Engineering</h2>
                </div>
                <div className="skill">
                    <h2>Frontend</h2>
                </div>
                <div className="skill">
                    <h2>Graphic Designing</h2>
                </div>
            </div>
        </div>
    )
}

export default Skills;