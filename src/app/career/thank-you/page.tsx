"use client"

import React,{useRef,useState} from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import '../../../components/app.css'
import '../../../components/services-components/components.css'
import "./thank.css"

function ThankYou() {
    const pageMainRef = useRef<HTMLDivElement | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (arg?: boolean) => {
        setIsOpen(arg ?? !isOpen);
    
        if (pageMainRef.current) {
          if (!isOpen) {
            pageMainRef.current.classList.add("display-none-mobile-navbar");
          } else {
            pageMainRef.current.classList.remove("display-none-mobile-navbar");
          }
        }
      };
  return (
    <>
        <Navbar mobileOverlayOpen={toggleMenu} isOpen={isOpen}/>
            <div className="thankyou-main-container">
                <div className="thanks-bg-blur">
                    <Image src="https://res.cloudinary.com/dgdgrniut/image/upload/c_crop,ar_16:9/v1734527641/acm_white_logo-removebg-preview_qgn8qq_hs2io7.png" alt="" height={300} width={300} />
                    <h1 className="thankyou-head"> Thank You for Applying!</h1>
                    <p className="thankyou-para">We’ve received your application and appreciate your interest in joining our team. Our recruitment team will review your submission, and we’ll reach out to you soon if your profile matches our requirements. Best of luck!</p>
                    <Link href="/"> <button className="service-hero-sec-content-button thankyou-btn">Back To Home</button></Link>
                </div>
            </div>
        <Footer />
    </>
  )
}

export default ThankYou