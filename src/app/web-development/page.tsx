"use client"

import React from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section2 from '@/components/services-components/Section2';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section6 from '@/components/services-components/Section6';
import Section7 from '@/components/services-components/Section7';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';
import Cards3dSections from '@/components/services-components/Cards3dSections';
// logos
import { FcCollect } from "react-icons/fc";
import { GrPlan } from "react-icons/gr";
import { GiWireframeGlobe } from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";
import { BiSolidBookContent } from "react-icons/bi";
import { SiTestcafe } from "react-icons/si";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';

const heroContent = {
    heading: "Website Development",
    para: "Your website is the first impression of your company and speaks volumes about your work, not just in terms of the information that it carries but more importantly through the experience it gives to website visitors. ",
    imgUrl: "https://i.pinimg.com/736x/ea/a4/bf/eaa4bf626bc139948956117cdb53b02e.jpg"
}
const section2 = [
  {
      id: 1,
      imgUrl: "https://www.commercialdesignindia.com/cloud/2023/03/23/tI16mkGo-image.png",
      customer: "Deloitte",
      industry: "Tech"
  },
  {
      id: 2,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7WmioB86esKm0iy-crHfKL9WzTi-O9ri-A&s",
      customer: "Moderna",
      industry: "Heathc..."
  },
  {
      id: 3,
      imgUrl: "https://ms-f7-sites-prod-cdn.akamaized.net/docs/stories/787157-chipotle-retailers-azure/resources/04ec8017-81cb-4b3b-b3a4-a7a3cd29c1f7/1209721216221477916_1209721216221477916",
      customer: "chipotle",
      industry: "Food"
  },
  {
      id: 4,
      imgUrl: "https://filecenter.deltaww.com/news/images/album/news_default.jpg?w=305",
      customer: "Delta",
      industry: "Telecom"
  },
  {
      id: 5,
      imgUrl: "https://img.foodprocessing.com/files/base/ebm/foodprocessing/image/2023/09/Pepsico.650cc18c5f449.png?auto=format%2Ccompress&w=640&width=640",
      customer: "Pepsico",
      industry: "Food"
  },
  {
      id: 6,
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbOo6Qs4bmldUhw7s_yufF3XHwbwK7bRr2pQ&s",
      customer: "Lockheed...",
      industry: "Defence"
  },
  {
      id: 7,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/736472e7079951373aa33646f75d519428026466-1200x678.png?auto=format&fit=max&q=100&w=1200",
      customer: "Opa!",
      industry: "Consumer..."
  },
  {
      id: 8,
      imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/4f986ebd49b52907be569e401ef25b191b412700-800x936.png?auto=format&fit=max&q=100&w=800",
      customer: "Shopify",
      industry: "E-commerce..."
  },
]

const section3 = {
    mainpara: "BUILT FOR TECH, STRATEGY & DIGITAL TEAMS",
    heading: [
      {  
        text: "Web",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "development",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "for",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {   
        text: "websites",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {
        text: "that",
        className: "text-black dark:text-white-500 tracking-wider",
      },
      {  
        text: "excel",
        className: "text-black dark:text-white-500 tracking-wider",
      },
    ],
    para1: "The need for reliable, scalable websites has never been greater. When your priority is a seamless digital experience, ACM’s flexible web development services are the solution.",
    para2: "Our global team of expert web developers can help with everything from concept and planning to implementation, integrating the latest in front-end, back-end, and full-stack solutions for a truly comprehensive digital presence.",
    image: "https://res.cloudinary.com/deepcnbrz/image/upload/v1730822005/Screenshot_2024-11-05_212211_hhbsos.png"
  };


const section4: {mainpara: string; head: string;para?: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "MULTIFACETED SOLUTIONS",
  head: "Comprehensive web development services",
  para: "The website design and development process is an essential aspect of creating an effective online presence. Whether you’re starting a new website or revamping an existing one, it’s important to understand the steps involved in the process. In this guide, we’ll cover the key stages of the website design and development process, from concept to launch.",
  cards: [
    {
      logo: <FcCollect className='text-3xl' />,
      head: "Requirements Gathering",
      para: "Define your website’s objectives, audience, and content focus. This foundation provides a clear vision to guide design and development, ensuring the website achieves its goals."
    },
    {
      logo: <GrPlan className='text-3xl' />,
      head: "Research and Planning",
      para: "Analyze your audience and competitors, and explore design trends. Use this research to inform decisions about website functionality, and content for a focused user experience."
    },
    {
      logo: <SiTestcafe className='text-3xl' />,
      head: "Testing",
      para: "Complete rigorous testing, including device compatibility. Detect and resolve bugs to ensure your website runs smoothly, meeting high-quality standards for performance."
    },
    {
      logo: <GiWireframeGlobe className='text-3xl' />,
      head: "Wireframe Designing",
      para: "Create wireframes to map your website’s layout and structure. This step visualizes each page’s design and guides the development process with a strong blueprint."
    },
    {
      logo: <CgWebsite className='text-3xl' />,
      head: "Website Development",
      para: "Translate designs into code, add functionalities, and ensure a seamless user experience. This phase includes debugging and quality checks for a fully functional, high-quality website."
    },
    {
      logo: <BiSolidBookContent className='text-3xl' />,
      head: "Content Creation",
      para: "Craft engaging, SEO-optimized content that reflects your brand. This includes text, images, and media, contributing to a consistent and impactful user experience."
    },
  ]
}



const section6 = { 
    mainpara: "PLATFORM PROFICIENCY",
    heading: [
      {
        text: "In-depth",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "platform",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "expertise",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "for",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "web",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "solutions",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "that",
        className: "text-white dark:text-white-500 tracking-wider",
      },
      {  
        text: "perform",
        className: "text-white dark:text-white-500 tracking-wider",
      },
    ],
    para: "Developing robust, multi-platform web solutions requires a deep understanding of each digital ecosystem. ACM’s expert web developers bring platform-specific knowledge and a commitment to building solutions that adapt and excel, no matter the requirements.",
    social: [
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-wordpress-3d-icon-download-in-png-blend-fbx-gltf-file-formats--content-management-system-cms-logo-blogging-coding-lang-pack-logos-icons-7577993.png?f=webp",
        name: "WordPress",
        para: "Create dynamic websites with customized themes and plugins designed to maximize WordPress’s flexibility and extensive capabilities."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREqnkEr6yH3TPgX620adAsMdbzYEb23DoKsA&s",
        name: "Shopify",
        para: "Launch e-commerce platforms with advanced Shopify solutions, tailored for seamless shopping experiences and powerful sales management tools."
      },
      {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYZ-joCjW2IvNmqZOFR8L8WqLQ3nN0rkNkqQ&s",
        name: "Magento",
        para: "Elevate your online store with Magento’s robust, scalable e-commerce capabilities, ideal for businesses needing extensive customization and integrations."
      },
      {
        img: "https://cdn3d.iconscout.com/3d/free/thumb/free-react-3d-icon-download-in-png-blend-fbx-gltf-file-formats--facebook-logo-native-javascript-library-user-interfaces-coding-lang-pack-logos-icons-7578010.png",
        name: "React & Angular",
        para: "Develop fast, responsive applications with React and Angular, offering unparalleled performance and seamless user experiences across all devices."
      },
      {
        img: "https://www.sparkfabrik.com/images/servizi/drupal/drupal@2560.webp",
        name: "Drupal",
        para: "Utilize Drupal’s powerful CMS features to create content-rich websites that adapt to complex requirements and high levels of customization."
      },
    ]
  };
  

const section7 = { 
    mainpara: "FUTURE-READY EFFICIENCY",
    heading: [
      {  
        text: "AI",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "-",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Enhanced",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {   
        text: "Web",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
      {
        text: "Development",
        className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
      },
    ],
    para1: "Use AI to streamline and speed up web development. ACM’s AI workflows optimize coding, debugging, and testing, cutting project timelines by up to 60%.",
    para2: "Our AI-driven approach delivers precision, speed, and quality, enhancing project efficiency. Boost your digital presence with our innovative web development services.",
    button: "AI Web Development Service"
};

const section3dCards: {mainpara: string; head: string; cards: {head: string; para: string; img: string;}[]} = {
    mainpara: "WORKING WITH ACM",
    head: "Experience video excellence in every frame",
    cards: [
      {
          head: "Static Website Designing",
          para: "A static website is a type of website that consists of a set of HTML pages that remain unchanged until they are manually updated.",
          img: "https://5.imimg.com/data5/SELLER/Default/2024/6/428433457/KL/LG/NL/224212668/static-website-designing-service-500x500.jpg"
      },
      {
          head: "E- commerce websites",
          para: "An e-commerce website is an online platform where businesses sell their products or services to customers over the internet.",
          img: "https://plus.unsplash.com/premium_photo-1683758344058-60a1506db480?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      },
      {
        head: "Idea based websites",
        para: "An idea-based website is a digital platform centered around sharing and exploring concepts, innovations, or creative thoughts.",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6f5bc0101084519.5f170c2bc09c7.png"
    },
    {
        head: "Corporate Website",
        para: "A corporate website serves as the digital face of a company, providing a comprehensive overview of its identity, offerings, and values to various stakeholders",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqrj86bI16uGV1kXMZjFqkjm5Svokh6nAbBg&s"
    },
  ]
} 
  

const section8 = {
    mainpara: "PROVEN EXPERTISE",
    heading: "An extension of your team, accelerating your web development pipeline",
    cards: [
      {
        title: "PROJECTS COMPLETED",
        count: "15k+",
        para: "Web dev projects successfully delivered to clients."
      },
      {
        title: "TOTAL CLIENTS",
        count: "900+",
        para: "Clients who have utilized our web development services."
      },
      {
        title: "DEVELOPMENT HOURS",
        count: "150K+",
        para: "Hours spent on high-quality web development."
      },
      {
        title: "CLIENT SATISFACTION",
        count: "4.8/5",
        para: "Average client satisfaction rating for web projects."
      },
    ]
};
  
const faq = { 
    mainpara: "Web Development FAQs",
    people: [
      {
        id: 1,
        name: "John Doe",
        designation: "Senior Web Developer",
        image:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
      },
      {
        id: 2,
        name: "Robert Johnson",
        designation: "Project Manager",
        image:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 3,
        name: "Jane Smith",
        designation: "UX/UI Designer",
        image:
          "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 4,
        name: "Emily Davis",
        designation: "Frontend Developer",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      {
        id: 5,
        name: "Tyler Durden",
        designation: "Backend Developer",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
      },
      {
        id: 6,
        name: "Dora Explorer",
        designation: "SEO Specialist",
        image:
          "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
      },
    ],
    list: [
      {
        id: "1",
        title: "Is SEO optimization included in web development services?",
        description: "Yes, we include SEO best practices in our web development process, ensuring your site is search-engine friendly from the start. Our team can also help you implement additional SEO strategies to enhance your online visibility."
      },
      {
        id: "2",
        title: "What makes our web development services unique?",
        description: "Our approach focuses on combining cutting-edge technology with user-centered design to create sites that are both functional and engaging. We ensure each project is tailored to align with your brand and objectives, with a focus on scalability and performance."
      },
      {
        id: "3",
        title: "Who is best suited for your web development services?",
        description: "Our services are ideal for businesses of all sizes, including startups and enterprises that need robust, scalable websites. We specialize in custom solutions for e-commerce, SaaS platforms, and other digital applications."
      },
      {
        id: "4",
        title: "Do you offer custom web development plans?",
        description: "Yes, we offer custom plans tailored to your project’s scope and complexity. Our team can adjust the level of service to match your needs, providing flexible options for different budgets and goals."
      },
      {
        id: "5",
        title: "What billing options do you offer?",
        description: "We offer both fixed-price and hourly billing options, depending on your project requirements and preferences."
      },
      {
        id: "6",
        title: "What are the benefits of a professionally developed website?",
        description: "A well-developed website serves as a powerful business asset. It can improve user experience, enhance brand credibility, increase conversions, and offer scalability as your business grows. Our team ensures that your website is optimized for performance, accessibility, and SEO."
      },
      {
        id: "7",
        title: "What technologies do you specialize in?",
        description: "We specialize in modern frameworks and tools like React, Node.js, Python, and various CMS platforms. Our team is well-versed in both frontend and backend development to deliver a full-stack solution tailored to your needs."
      },
      {
        id: "8",
        title: "Why is mobile responsiveness important?",
        description: "With most users accessing sites on mobile, having a responsive design is essential. Our development approach ensures your site adapts seamlessly across devices, providing an optimal experience for all users."
      },
      {
        id: "9",
        title: "Do you provide maintenance and support post-launch?",
        description: "Yes, we offer ongoing maintenance and support to keep your website secure and up-to-date. Our team is available for troubleshooting, updates, and enhancements as your business evolves."
      }
    ]
};
  

function WebDev() { 
  
  return (
    <>
    <div className='page-main tracing-beam'>
      <TracingBeam>

        <Navbar />
        <section data-bgcolor="#070707" data-textcolor="#ffffff">
          <HeroSection heading={heroContent.heading} para={heroContent.para} />
        </section>
        <Section2 Cards={section2}/>
        <Section3  content={section3}/>
        <Section4 content={section4} roundb='rounded-b-[50px]'/>
        <Section6 content={section6} translate="-50%"/>
        <Cards3dSections translate='-160%' content={section3dCards} className="rounded-[50px]"/>
        <Section7 content={section7}/>
        <Section8 content={section8}/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
    <div className='page-main mobile-tracing-beam'>
      <TracingBeam>

        <Navbar />
        <section data-bgcolor="#070707" data-textcolor="#ffffff">
          <HeroSection heading={heroContent.heading} para={heroContent.para}/>
        </section>
        <Section2 Cards={section2}/>
        <Section3  content={section3}/>
        <Section4 content={section4} roundb='rounded-b-[50px]'/>
        <Section6 content={section6} translate="-100%"/>
        <Cards3dSections translate='-50%' content={section3dCards} className="rounded-[50px]"/>
        <Section7 content={section7}/>
        <Section8 content={section8}/>
        <ContactOurExperts />
        <FAQ  content={faq}/>
        <Footer />
      </TracingBeam>
    </div>
    </>
  )
}

export default WebDev