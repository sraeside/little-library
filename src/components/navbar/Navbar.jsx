import './navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='search'>
                    <input className='search-input' type='text' placeholder='Search...' />
                    <SearchIcon />
                </div>
                <div className='nav-items'>
                    <div className='nav-item'>
                        <LanguageIcon className='nav-icon' />
                        English
                    </div>
                    <div className='nav-item'>
                        <FullscreenExitOutlinedIcon className='nav-icon' />
                    </div>
                    <div className='nav-item'>
                        <NotificationsOutlinedIcon className='nav-icon' />
                        <div className='counter'>1</div>
                    </div>
                    <div className='nav-item'>
                        <ChatBubbleOutlineOutlinedIcon className='nav-icon' />
                        <div className='counter'>2</div>
                    </div>
                    <div className='nav-item'>
                        <FormatListBulletedOutlinedIcon className='nav-icon' />
                    </div>
                    <div className='nav-item'>
                        <img 
                            src='https://images.pexels.com/photos/30712819/pexels-photo-30712819/free-photo-of-professional-black-and-white-business-portrait.jpeg'
                            alt='black and white portrait of woman in white collar shirt'
                            className='avatar'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NavBar;