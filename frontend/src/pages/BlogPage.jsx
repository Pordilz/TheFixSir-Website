import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

const BlogPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <div className="pt-20">
                <Blog />
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
