import { useState } from "react";
import { Navigate } from "react-router-dom";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Ahona');
    const [isAdded, setisAdded] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setisAdded(true);
        });
    };
    
    // ✅ Conditional redirect
    if (isAdded) {
        return <Navigate to="/" replace state = {{blog: {author}}}/>;
    }
    return (
        <div className="create">
            <h2 className="text-2xl">Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label className="text-left block">Blog title:</label>
                <input

                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-[6px_10px] my-[10px] border border-[#ddd] box-border block"
                />
                <label >Blog body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    class="w-full p-[6px_10px] my-[10px] border border-[#ddd] box-border block"
                ></textarea>

                <label>Blog author:</label>
                <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full p-[6px_10px] my-[10px] border border-[#ddd] box-border block">
                    <option value="Ritabrata">Ritabrata</option>
                    <option value="Ahona">Ahona</option>
                </select>
                <button
                // triggers form submission by default
                    className="bg-[#f1356d] text-white border-0 p-2 rounded-lg cursor-pointer">Add Blog</button>
            </form>
        </div>
    );
}
export default Create;
