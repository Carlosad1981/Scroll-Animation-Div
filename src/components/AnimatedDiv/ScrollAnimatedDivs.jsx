import './scroll-animated-div.css';
import React, { useRef } from 'react';
import useScrollAnimatedDivs from './Hooks/useScrollAnimatedDivs';

function ScrollAnimatedDivs({ children, centralZoneHeight = 400 }) {
    const containerRef = useRef(null);
    useScrollAnimatedDivs(containerRef, centralZoneHeight);

    return (
        <div ref={containerRef} className="cd-animated-container">
            {children}
        </div>
    );
}

export default ScrollAnimatedDivs;
