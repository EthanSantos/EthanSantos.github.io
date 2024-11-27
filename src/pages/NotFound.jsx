// src/pages/NotFound.jsx
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="text-center mt-20">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-lg mb-8">Uh oh! The page you are looking for does not exist. How did you even get here?</p>
            <Link to="/about" className="text-blue-500 hover:underline">
                Go Back to Home
            </Link>
        </div>
    );
};

export default NotFound;