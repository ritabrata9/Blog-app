// Blog tablets on home screen
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { Link, useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const BlogList = ({ blogs, title }) => {

    const location = useLocation();
    const { blog } = location.state || {};
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        if (blog) {
            setShowToast(true);
            const timer = setTimeout(() => setShowToast(false), 4000);
            return () => clearTimeout(timer);
        }
    }, [blog]);
    const handleClick = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        }).then(() => {
            navigate(0);
        })
    }
    return (
        <div className="blog-list">
            <h2 className="font-bold text-2xl text-[#f1356d]">{title}</h2>
            {/* creating template for interating thr
            u blogs array and printing properly */}
            {blogs.slice().reverse().map((blog) => (
                <div className="blog-preview" key={blog.id} title='View Blog'>
                    {/* key is unique value that react uses to keep track */}
                    <div className="flex justify-between items-center">

                        <Link to={`/blogs/${blog.id}`}>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <h2>{blog.title}</h2>

                            </div>
                            <p>Written by {blog.author}</p>
                        </Link>

                        <div className="relative group">
                            <IconButton
                                title="Delete blog"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleClick(blog.id);
                                }}
                                sx={{
                                    color: '#f1356d',
                                    '&:hover': {
                                        color: 'white',
                                        backgroundColor: '#f1356d',
                                    },
                                    transition: 'color 0.2s, background-color 0.2s',
                                }}
                            >
                                <DeleteIcon color="inherit" />
                            </IconButton>                        
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
export default BlogList;