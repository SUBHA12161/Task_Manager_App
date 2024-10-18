import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('token');  // Remove the token
        navigate('/login');  // Redirect to login
    }, [navigate]);

    return <div>Logging out...</div>;
};

export default Logout;