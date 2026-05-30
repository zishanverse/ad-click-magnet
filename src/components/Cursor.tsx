"use client";

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isDesktop, setIsDesktop] = useState(false);
    
    useEffect(() => {
        const cursor = cursorRef.current;
        
        // Check for desktop once on mount
        const checkIsDesktop = () => window.innerWidth > 1028;
        setIsDesktop(checkIsDesktop());

        if (!cursor || !isDesktop) return;

        // Set up optimized quickTo setters
        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power2.out" });
        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power2.out" });

        const links = document.querySelectorAll("a");

        const onMouseMove = (e: MouseEvent) => {
            xTo(e.clientX);
            yTo(e.clientY);
        };

        const onMouseEnterLink = () => {
            gsap.to(cursor, {
                scale: 4,
                duration: 0.3
            });
        };

        const onMouseLeaveLink = () => {
            gsap.to(cursor, {
                scale: 1,
                duration: 0.3
            });
        };

        // Event listeners with proper cleanup
        document.addEventListener("mousemove", onMouseMove);
        
        links.forEach(link => {
            link.addEventListener("mouseenter", onMouseEnterLink);
            link.addEventListener("mouseleave", onMouseLeaveLink);
        });

        // Cleanup
        return () => {
            document.removeEventListener("mousemove", onMouseMove);
            links.forEach(link => {
                link.removeEventListener("mouseenter", onMouseEnterLink);
                link.removeEventListener("mouseleave", onMouseLeaveLink);
            });
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return (
        <div ref={cursorRef} className="custom-cursor">
            <span className="cursor-text">View</span>
        </div>
    );
}