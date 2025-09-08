import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link to="/">
                <h1>Ritabrata's Blog</h1>
            </Link>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" style={{
                    color: "white",
                    backgroundColor: '#f1356d',
                    borderRadius: '8px',
                }}>✚ New Blog</Link>

                {/* use Link to instead of a href to make browser handle routing hence prevents reloading the page */}
                {/* a href restarts the entire React app, losing all in-memory state.
                Link Preserves React app state and behaves like an SPA. */}

            </div>
        </nav>
    );
}

export default Navbar;
// to be imported by App.js which is the main component of component tree