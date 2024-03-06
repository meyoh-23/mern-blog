import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DashProfile, DashSidebar } from '../components';

const Dashboard = () => {
    const location = useLocation();
    const[tab, stTab] = useState('');

    useEffect(()=>{
        const urlParams = new URLSearchParams(location.search);
        const  tabfromURL = urlParams.get('tab');
        console.log(tabfromURL);
    },[location.search]);


    return (
        <div className=''>
            <div className="">
                {/* Sidebar */}
                <DashSidebar/>
            </div>
            {/* profile... */}
            {
                tab == 'profile' && <DashProfile/>
            }
        </div>
    )
}

export default Dashboard;