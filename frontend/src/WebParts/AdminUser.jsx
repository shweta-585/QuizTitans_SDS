import '../styles/adminuser.css';
import { useNavigate } from 'react-router-dom';

const AdminUser = () => {

    const navigate = useNavigate();

    const HandleAdmin = () => {
        navigate('/admin');
    }
    const HandleUser = () => {
        navigate('/student');
    }
  return (
    <div className='admin-user-login'>
        <h2>Welcome to QuizTitans</h2>
        <div className="login-btns">
            <button className='admin-btn' onClick={HandleAdmin}>Admin Login</button>
            <button className='user-btn' onClick={HandleUser}>User Login</button>
        </div>
    </div>
  );
};

export default AdminUser;
