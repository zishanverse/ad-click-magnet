import Image from "next/image";
import { CardBody, CardContainer, CardItem } from "../ui/3dCard";

import React, { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import gsap from 'gsap';
gsap.registerPlugin(ScrollTrigger);




function Cards3dSections({content, className, translate} : {content: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]}; className?: string;translate?: string;}) {
    const triggerRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const hscroll = gsap.fromTo(
      sectionRef.current,
      {translateX:0},
      {
        translateX: translate || "-100%",
        ease: "none",
        duration: 2,
        scrollTrigger:{
          trigger: triggerRef.current,
          scroller: "body",
          start: "top -40%",
          end: "27% top",
          scrub: 2,
          pin: true
        }
      }
    )
    return () => {
      hscroll.kill();
    }

  })
  return (
    <>
    <div ref={triggerRef} className={`services-secs-main-container h-[150vh] overflow-hidden flex-col justify-center items-center text-center services-3dcard-main-container ${className}`}>
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.head}</h2>
        <div ref={sectionRef} className="flex mt-[60px] card-3d-container">
            {content.cards.map((each,index) => (
            <CardContainer key={index} className="inter-var text-left" containerClassName="">
                    <CardBody className="w-[20%] mr-[50px] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white"
                        >
                        {each.head}
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                        >
                            {each.para}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={each.img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                            alt="thumbnail"
                        />
                        </CardItem>
                        <div className="flex justify-start items-center mt-10">
                        
                        
                        </div>
                    </CardBody>
            </CardContainer>
            ))}
        </div>
        
    </div>
    
    <div className={`services-secs-main-container overflow-hidden flex-col justify-center items-center text-center mobile-services-3dcard-main-container ${className}`}>
        <p className="services-secs-para">{content.mainpara}</p>
        <h2 className="services-secs-head">{content.head}</h2>
        
              
        <div className="flex mt-[60px] mobile-card-3d-container">
            {content.cards.map((each,index) => (
            <CardContainer key={index} className="inter-var text-left" >
                    <CardBody className="md:w-[20%] mr-[50px] bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]  sm:w-[30rem] h-auto rounded-xl p-6 border mobile-card-3d">
                        <CardItem
                        translateZ="50"
                        className="text-xl font-bold text-neutral-600 dark:text-white mobile-card-3d-head"
                        >
                        {each.head}
                        </CardItem>
                        <CardItem
                        as="p"
                        translateZ="60"
                        className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300 mobile-card-3d-para"
                        >
                            {each.para}
                        </CardItem>
                        <CardItem translateZ="100" className="w-full mt-4">
                        <Image
                            src={each.img}
                            height="1000"
                            width="1000"
                            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl mobile-card-3d-img"
                            alt="thumbnail"
                        />
                        </CardItem>
                        <div className="flex justify-start items-center mt-10">
                        
                        
                        </div>
                    </CardBody>
            </CardContainer>
            ))}
        </div>
    </div>
    
    </>
  )
}

export default Cards3dSections

