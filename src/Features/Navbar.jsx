import { Link } from 'react-router-dom';


function Navbar() {
    return (
        <nav>
            <div className='nav-buttons'>
                <Link to="/"><button>Home</button></Link>
                <Link to="/Skills"><button>Skills</button></Link>
                <Link to="/Projects"><button>Projects</button></Link>
                <Link to="/Experience"><button>Experience</button></Link>
                <Link to="/Contact"><button>Contact</button></Link>
            </div>
        </nav>
    )
}

export default Navbar;