import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Footer from '../components/Footer';

const AboutPage = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <div className="min-h-screen bg-white">
            <Helmet>
                <title>About Us | The FixSir - Sports Massage & Hijama in Durban</title>
                <meta name="description" content="Learn about The FixSir — certified sports massage therapist and Hijama cupping practitioner in Musgrave, Durban." />
                <link rel="canonical" href="https://www.thefixsir.co.za/about" />
            </Helmet>
            <Navbar />
            <div className="pt-20">
                <About />
            </div>
            <Footer />
        </div>
    );
};

export default AboutPage;
