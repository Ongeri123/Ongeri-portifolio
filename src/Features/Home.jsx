import React from 'react';
import Navbar from './Navbar';

function Home() {
    return (
        <div style={{
                backgroundImage: "url('/port-bg.png')", 
                backgroundSize: 'cover',   
                backgroundPosition: 'center',  
                backgroundRepeat: 'no-repeat',
                overflow: 'hidden', 
                height: '100vh',
                }}>
            <div className='nav-container'>
                    <Navbar />
                </div>
            <div className='home'>
            <div className='content'>
                <h1>NEWTON ORINA</h1>
                <h2>SOFTWARE ENGINEER & GRAPHIC DESIGNER</h2>
            </div>
        </div>
        </div>
    )
}

export default Home;