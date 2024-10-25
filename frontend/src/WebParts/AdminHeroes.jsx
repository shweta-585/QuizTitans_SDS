import React from 'react';
import '../styles/navbar.css';
import { useNavigate } from 'react-router-dom';

const AdminHeroes = () => {
    const navigate = useNavigate();

    return (

        <div>
            <div className="admin-heroes">
                <button onClick={() => navigate('/create')}>Create Quiz</button>
            </div>
        </div>
    );
};

export default AdminHeroes;
