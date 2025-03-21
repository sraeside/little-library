import './sidebar.css';
import { Link } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';

const Sidebar = () => {
    return (
        <div className='sidebar-container'>
            <div className='logo-container'>
                <Link to='/' className='sidebar-link'>
                    <span className='logo'>littlelibrary</span>
                </Link>
            </div>
            <hr />
            <div className='sidebar'>
                <ul className='sidebar-list'>
                    <p className='sidebar-title'>MAIN</p>
                    <Link to='/' className='sidebar-link'>
                        <li className='sidebar-list-item'>
                            <DashboardIcon className='sidebar-icon' />
                            <span>Dashboard</span>
                        </li>
                    </Link>
                    
                    <p className='sidebar-title'>LIBRARY LIST</p>
                    <Link to='/products' className='sidebar-link'>
                        <li className='sidebar-list-item'>
                            <PersonIcon className='sidebar-icon' />
                            <span>Books</span>
                        </li>
                    </Link>

                    <Link to='/' className='sidebar-link'>
                        <li className='sidebar-list-item'>
                            <PersonIcon className='sidebar-icon' /> 
                            <span>Collections <em>Coming Soon!</em></span>
                        </li>
                    </Link>
                    <p className='sidebar-title'>USER</p>
                    <li className='sidebar-list-item'>
                        <PersonIcon className='sidebar-icon' />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;