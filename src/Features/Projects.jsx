function Projects() {
    return (
        <div style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: 'cover',
                height: '100vh',
                padding: '80px 20px 20px',
            }}>
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Projects</h1>
            <div className="projects-container">
                <div className="project-row">
                    <div className="project-card">
                        <h3>Project 1</h3>
                        <p>Description of your first project</p>
                        <div className="project-tech">
                            <span>React</span>
                            <span>JavaScript</span>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="/project1.png" alt="Project 1" loading="lazy" />
                    </div>
                </div>
                <div className="project-row">
                    <div className="project-card">
                        <h3>Project 2</h3>
                        <p>Description of your second project</p>
                        <div className="project-tech">
                            <span>Python</span>
                            <span>Flask</span>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="/project2.png" alt="Project 2" loading="lazy" />
                    </div>
                </div>
                <div className="project-row">
                    <div className="project-card">
                        <h3>Project 3</h3>
                        <p>Description of your third project</p>
                        <div className="project-tech">
                            <span>Figma</span>
                            <span>Design</span>
                        </div>
                    </div>
                    <div className="project-image-container">
                        <img src="/project3.png" alt="Project 3" loading="lazy" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;