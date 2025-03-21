import { useState, useEffect } from 'react';
import { collection, getCountFromServer, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import './widget.css'

const Widget = ({ type }) => {
    const [count, setCount] = useState(0);

    let data;

    switch (type){
        case 'products':
            data={
                title:'BOOKS IN LIBRARY',
                link: 'See all books',
                query: 'products',
                icon: (
                    <MenuBookOutlinedIcon 
                        className='widget-icon'
                        style={{
                            color: '#2764d7',
                            backgroundColor: '#2765d754'
                        }} 
                    />
                )
            };
            break;
        case 'wishlist':
            data={
                title:'WISHLIST',
                link: 'View wishlist',
                query: 'wishlist',
                icon: (
                    <AutoAwesomeOutlinedIcon 
                        className='widget-icon'
                        style={{
                            color: 'goldenrod',
                            backgroundColor: 'rgba(218, 165, 32, 0.2)'
                        }} 
                    />
                )
            };
            break;
        default:
            break;
    }

    useEffect(() => {
        const getCount = async(query) => {
            const coll = collection(db, query);
            const snapshot = await getCountFromServer(coll);
            setCount(snapshot.data().count);
        };

        getCount(data.query);
    }, [type]);


    return (
        <div className='widget'>
            <div className='widget-left'>
                <span className='widget-title'>{data.title}</span>
                <span className='widget-counter'>{count}</span>
                <span className='widget-link'>{data.link}</span>
            </div>
            <div className='widget-right'>
                <div>
                    {data.icon}
                </div>
            </div>
        </div>
    );
};

export default Widget;
