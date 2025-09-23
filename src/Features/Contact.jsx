import { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div style={{
                backgroundImage: "url('/bg.png')",
                backgroundSize: 'cover',
                height: '100vh',
                padding: '80px 20px 20px',
            }}>
            <h1 style={{textAlign: 'center', marginBottom: '50px'}}>Contact Me</h1>
            
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Get In Touch</h3>
                    <div className="contact-details">
                        <p>✉️ ongerinewton10@gmail.com</p>
                        <p>📞 +254 113734235</p>
                        <p>📍 Nairobi, Kenya</p>
                    </div>
                    
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/newton-orina/" target="_blank" rel="noopener noreferrer">
                            💼 LinkedIn
                        </a>
                        <a href="https://github.com/Ongeri123" target="_blank" rel="noopener noreferrer">
                           💻  GitHub
                        </a>
                        <a href="https://www.instagram.com/_o.n.g.e.r.i/" target="_blank" rel="noopener noreferrer">
                           🅾  Instagram
                        </a>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;