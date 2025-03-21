import './featured.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


const Featured = () => {
    return (
        <div className='featured'>
            <div className='featured-top'>
                <h1 className='featured-title'>Reading Goal</h1>
                <MoreVertIcon font-size='small' />
            </div>
            <div className='featured-bottom'>
                <div className='featured-chart'>
                    <CircularProgressbar 
                        value={85} 
                        text={'85%'} 
                        strokeWidth={5} 
                        styles={buildStyles ({
                            pathColor: `#5487E5`,
                            textColor: '#5487E5',
                        })}
                    />
                </div>
                <p className='featured-chart-title'>Books read this year</p>
                <p className='featured-chart-amount'>34</p>
                <p className='featured-chart-description'>Keep up the reading little book worm!</p>
                <div className='summary'>
                    <div className='summary-item'>
                        <div className='summary-item-title'>Target for year</div>
                        <div className='summary-item-result'>
                            <AddOutlinedIcon fontSize='small' />
                            <div className='summary-item-result-amount'>40 books</div>
                        </div>
                    </div>
                    <div className='summary-item'>
                        <div className='summary-item-title'>This Month</div>
                        <div className='summary-item-result negative'>
                        <KeyboardArrowDownOutlinedIcon fontSize='small' />
                            <div className='summary-item-result-amount'>2 books</div>
                        </div>
                    </div>
                    <div className='summary-item'>
                        <div className='summary-item-title'>Last Month</div>
                        <div className='summary-item-result positive'>
                            <KeyboardArrowUpOutlinedIcon fontSize='small' />
                            <div className='summary-item-result-amount'>3 books</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;