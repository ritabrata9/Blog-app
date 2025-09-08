// PARENT or ROOT component for all other pages

import BlogDetails from './BlogDetails';
import Create from './Create';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
            {/* /create is the browser path while /Create is the element(arrow function) imported from Create.js */}
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App

