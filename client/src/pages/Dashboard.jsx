import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DashProfile, DashSidebar } from '../components';

const Dashboard = () => {
    const location = useLocation();
    const[tab, setTab] = useState('');

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const  tabfromURL = urlParams.get('tab');
        if (tabfromURL) {
            setTab(tabfromURL);
        }
    },[location.search]);

    return (
        <div className='min-h-screen flex flex-col md:flex-row'>
            <div className="">
                {/* Sidebar */}
                <DashSidebar/>
            </div>
            {/* profile... */}
            {
                tab === 'profile' && <DashProfile/>
            }
        </div>
    )
}

export default Dashboard;