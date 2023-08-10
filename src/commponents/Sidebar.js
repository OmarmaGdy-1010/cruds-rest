import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
function Sidebar() {
    return (
        <div className='leftbar'>
            <ul>
                <li><Link to='/All'>All product</Link></li>
                <li><a href='/#'>Category</a></li>
                <li><a href='/#'>price</a></li>
            </ul>
        </div>
    );
}

export default Sidebar;