import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams(); // allows us to grab route parameters by destructuring
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    return (
        <div className="blog-details">
            {isPending && (
                <div className="flex justify-center h-screen">
                    <CircularProgress />
                </div>
            )}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                </article>
            )}
        </div>

    );
}
export default BlogDetails;