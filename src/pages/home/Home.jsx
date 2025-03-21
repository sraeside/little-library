import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Widget from '../../components/widget/widget';
import Featured from '../../components/featured/Featured';
import Chart from '../../components/chart/Chart';
import './home.css';


const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className='home-container'>
                <Navbar />
                <div className='widgets'>
                    <Widget type='products'/>
                    <Widget type='wishlist'/>
                </div>
                <div className='charts'>
                    <Featured />
                    <Chart title='Number of Books Read Per Year' aspect={2 / 1} />
                </div>
            </div>
        </div>
    );
};

export default Home;