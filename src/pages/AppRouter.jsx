import React from 'react'
import {
    Route,
    Routes
} from 'react-router-dom';
import Home from './home/Home';
import About from './About';
import ContactUs from './contact/ContactUs';
import Menu from './Menu';

const AppRouter = () => {
    
    return (
        <Routes>
            <Route path='/' index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Menu" element={<Menu />} />
        </Routes>
    )
}

export default AppRouter
