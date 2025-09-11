import { Link } from "react-router-dom";
const NotFound = () => {
    return (
        <div className="flex flex-col items-center  min-h-screen text-gray-800 p-4">
            <h2 className="text-4xl font-bold mb-4">Sorry</h2>
            <p className="text-lg mb-6">That page cannot be found</p>
            <Link
                to="/"
                className="px-6 py-3 text-white rounded-md hover:bg-blue-700 transition"
                style={{ backgroundColor: '#f1356d' }}
            >
                Back to homepage
            </Link>
        </div>

    );
}

export default NotFound;