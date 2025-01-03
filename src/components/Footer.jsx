import React, { useState, useEffect } from 'react';
import Footer1 from './Footer1';
import Footer2 from './Footer2'

const Footer = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            {width < 1200 ? <Footer2 /> : <Footer1 />}
        </>
    );
};

export default Footer;
