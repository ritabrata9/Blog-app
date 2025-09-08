import CircularProgress from "@mui/material/CircularProgress";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: blogs, isPending, error } = useFetch(
    "http://localhost:8000/blogs"
  );

  const location = useLocation();
  const navigate = useNavigate();
  const { blog } = location.state || {}; // get state from Navigate
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (blog) {
      setShowToast(true);
      const timer = setTimeout(() => {
        setShowToast(false);
        navigate(location.pathname, { replace: true }); // clear state so it doesn't reappear
      }, 3000); // toast visible for 3 seconds
      return () => clearTimeout(timer);
    }
  }, [blog, navigate, location.pathname]);

  return (
    <div className="home relative">
      {/* Toast */}
      {showToast && blog && (
        <div className="fixed top-6 right-6 z-50 bg-green-50 border border-green-200 px-6 py-3 rounded-2xl shadow-lg font-semibold text-green-700">
          🎉 Blog by {blog.author} added successfully!
        </div>
      )}

      {/* Blog list and loading states */}
      {error && <div>Couldn’t fetch data</div>}
      {isPending && (
        <div className="flex justify-center h-screen">
          <CircularProgress />
        </div>
      )}
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;
