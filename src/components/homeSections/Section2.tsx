"use client";

import Image from "next/image";
import adclickImage from "../../public/images/logo/adclickmagnetlogogrey.png"
import { useEffect } from "react";
import {gsap} from 'gsap'
import { TypewriterEffect } from "../ui/typewriter-effect";
 

const words = [
    {
      text: "Bondless",
    },
    {
      text: "Talents",
    },
    {
      text: "One",
    },
    {
      text: "Team",
    },
    {
      text: "Acm.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

export default function Section2() {
    useEffect(() => {
        const t1 = gsap.timeline({
            scrollTrigger:{
                trigger: ".sec2-container",
                start: "80% 50%",
                end: "100% 50%",
                markers: true,
                scrub: 1
            },
            
        })
        t1.to(".text-area-hover", {
            width: "100%"
        })
    })
    return (
      <>
      <div className="Companies-partner mx-6 flex">
        <h2 className="partner-not-ventor">A PARTNER, NOT<br /> A VENDOR</h2>
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/meta-partner.svg" width={100} height={100} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/google-cloud.svg" width={100} height={100} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/google-partner.svg" width={100} height={100} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/shopify.svg" width={100} height={100} alt="company logo"  />
        <Image className="sec2-company-logo" src="https://numerique.vamtam.com/wp-content/uploads/2023/05/tiktok.svg" width={100} height={100} alt="company logo"  />
      </div>  
        <div className="sec2-container">
            <Image width={150} height={150} src={adclickImage} alt="acmlogo" className="mb-3"/>
            
            <TypewriterEffect words={words} />
        </div>
      </>
    )
}

// text hover animation
//<div className="text-area">Bondless Talents One Team Acm</div>
//<div className="text-area-hover">Bondless Talents One Team Acm</div>