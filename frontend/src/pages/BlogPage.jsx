import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Blog | The FixSir - Sports Therapy & Wellness Tips</title>
                <meta name="description" content="Read the latest articles on sports massage, Hijama cupping therapy, injury recovery, and wellness tips from The FixSir in Durban." />
                <link rel="canonical" href="https://www.thefixsir.co.za/blog" />
            </Helmet>
            <Navbar />
            <div className="pt-20">
                <Blog />
            </div>
            <Footer />
        </div>
    );
};

export default BlogPage;
