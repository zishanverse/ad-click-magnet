"use client"

import React,{useRef,useState} from 'react'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/services-components/HeroSection';
import Section2 from '@/components/services-components/Section2';
import Section3 from '@/components/services-components/Section3';
import Section4 from '@/components/services-components/Section4';
import Section7 from '@/components/services-components/Section7';
import Section8 from '@/components/services-components/Section8';
import FAQ from '@/components/services-components/FAQ';

//logos
import { GiCardboardBoxClosed } from "react-icons/gi";
import { PiBaseballCapDuotone } from "react-icons/pi";
import { SiAffinitydesigner } from "react-icons/si";
import { CgFileDocument,CgLoadbarDoc } from "react-icons/cg";
import { IoDocumentTextOutline } from "react-icons/io5";

//ui animation
import { TracingBeam } from "../../components/ui/TracingBeam";
import ContactOurExperts from '@/components/services-components/ContactOurExperts';




const heroContent = {
    heading: "Branding Services",
    para: "From brand exploration and development to refreshes and rebrands, our world-class brand designers create cohesive, scalable brand experiences. Learn more and book a call today.",
    imgUrl: "https://cdn.sanity.io/images/k0dlbavy/production/745fa5bedb9310bd461d7b69073547d975fab304-1200x1200.png?auto=format&fit=max&q=100&w=1200"
}
const section2 = [
  {
    id: 1,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/smokey_white_logo_wdokst.jpg",
    customer: "Smokey",
    industry: "Restaurant"
  },
  {
      id: 2,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/blind_by_design_white_logo_vfpxim.jpg",
      customer: "Blinds",
      industry: "Interior"
  },
  {
      id: 3,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/pgroomer_white_logo_geg0ou.jpg",
      customer: "PGroomer",
      industry: "Tools..."
  },
  {
    id: 4,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/sisli_white_logo_ohjfsp.jpg",
    customer: "Silsi",
    industry: "Restaurant"
  },
  {
    id: 5,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696497/iq_white_logo_cufpld.jpg",
    customer: "IQ Home Care",
    industry: "Cleaning..."
  },
  
  {
      id: 6,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696499/canada_view_white_logo_zdclw9.jpg",
      customer: "Canada View",
      industry: "Cleaning..."
  },
  {
      id: 7,
      imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/jen_thomsan_white_logo_mkjyma.jpg",
      customer: "Jen Thomson",
      industry: "Realtor..."
  },
  {
    id: 8,
    imgUrl: "https://res.cloudinary.com/dgdgrniut/image/upload/v1734696498/donjon_white_logo_wb1gvt.jpg",
    customer: "DonGon",
    industry: "Restaurant"
  },
]


const section3:{mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; image: string;} = {
  mainpara: "BUILT FOR BRAND, CREATIVE & MARKETING TEAMS",
  heading: [
    {  
      text: "Strategic",
      className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "branding",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "for",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {   
        text: "every",
        className: "text-black dark:text-white-500 tracking-wider",
    },
    {
        text: "business",
        className: "text-black dark:text-white-500 tracking-wider",
    },
],
  para1: "Brands are fueled by a mixture of emotion and strategy. The true art of branding design is combining both—to stand out from the competition and forge memorable connections.",
  para2: "Our global team of brand experts, who’ve worked at top brand design agencies and well-known brands, will help you grow and elevate your brand. Whether it's a logo or a complete brand development, we help you express what makes your brand unique.", 
  image: "https://i.pinimg.com/736x/19/db/4c/19db4c0e7d30bf925f95eb2a0cacc566.jpg"
}





const section4: {mainpara: string; head: string; cards: {logo: React.ReactNode; head: string; para: string;}[]} = {
  mainpara: "COMPREHENSIVE SOLUTIONS",
  head: "Full-scope branding services",
  cards: [
    {
      logo: <GiCardboardBoxClosed  className='text-3xl'/>,
      head: "Brand development",
      para: "Starting from scratch? Craft a robust, one-of-a-kind foundation that ensures engagement and resonance across all the platforms and audiences."
    },
    {
      logo: <PiBaseballCapDuotone  className='text-3xl'/>,
      head: "Brand design",
      para: "From fundamentals like logos, colors and typography to templates and custom image libraries, get tools you need to get to market faster."
    },
    {
      logo: <SiAffinitydesigner  className='text-3xl'/>,
      head: "Logo design",
      para: "Need help updating existing logos or creating new ones? Create a range of options, including static and animated logos suitable for a range of applications."
    },
    {
      logo: <CgFileDocument  className='text-3xl'/>,
      head: "Brand guidelines",
      para: "Ensure brand consistency, capture your distinct voice and tone and gather ad templates, logos, images and iconography all in one place for ease of use and scale."
    },
    {
      logo: <CgLoadbarDoc  className='text-3xl'/>,
      head: "Brand story development",
      para: "Your brand has a feel as well as a look. Develop a narrative that speaks to this essence and can be expressed time and again."
    },
    {
      logo: <IoDocumentTextOutline  className='text-3xl'/>,
      head: "Rebranding services",
      para: "From a refresh to a full rebrand, revitalize your brand seamlessly with a global network of branding talent that brings diverse perspectives and signature expertise."
    },
  ]
}



const section7: {mainpara: string; heading: {text: string; className: string;}[]; para1: string; para2: string; button: string} = {
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
      text: "Branding",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  {
      text: "Services",
      className: "lg:text-4xl text-white dark:text-white-500 tracking-wider",
  },
  
],
  para1: "Leverage the power of AI to improve efficiency and cost savings in our design services. ACM’s AI-enhanced workflows streamline the creation of brand creative, delivering up to 60% savings for our customers.",
  para2: "This ensures that every project is handled with precision, enhancing both the quality and speed of your creative production. Experience unparalleled efficiency and innovation with our AI-driven design solutions, tailored to elevate your brand’s image.",
  button: "AI Design Service" 
}

const section8: {mainpara: string; heading: string; cards: {title: string; count: string; para: string;}[]} = {
  mainpara: "Strike Up The Brand",
  heading: "Branding services that maximize speed, value and impact",
  cards: [
    {
      title: "PROJECTS COMPLETED",
      count: "5,750+",
      para: "Brand design projects completed and counting"
    },
    {
      title: "TOTAL CUSTOMERS",
      count: "1,300+",
      para: "Total customers used our brand design services"
    },
    {
      title: "TOTAL HOURS",
      count: "55000+",
      para: "hours dedicated to branding services"
    },
    {
      title: "CUSTOMER SATISFACTION 5/5",
      count: "4",
      para: "Average branding project approval rating"
    },
  ] 
}

const faq:{mainpara: string; people: {id: number;name: string;designation: string;image: string;}[]; list: {id: string;title: string; description: string;}[]} = {
  mainpara: "Brand Design FAQs",
  people: [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ],
  list: [
    {
      id: "1",
      title: "Are branding services included in all ACM subscriptions?",
      description: "That's correct! ACM's design subscription includes branding and brand identity development services. Our creative services are available within your chosen subscription tier, giving you the flexibility to scale your branding needs and requirements. This means you canleverage additional services like social media creative, video production and creative campaign development to boost your brand identity to new heights."
    },
    {
      id: "2",
      title: "What is the minimum commitment for ACM's branding services?",
      description: "ACM subscriptions require a one-year commitment. We focus on annual plans because our services are most effective for ongoing creative needs, rather than one-off branding projects. With a year-long commitment, you unlock access to all our design services. This lets you not only scale and elevate your brand identity but also tap into the expertise of a dedicated team that understands your brand and transforms your creative vision into reality. The longer you partner with us, the more value you'll extract for branding campaigns and all aspects of your brand growth."
    },
    {
      id: "3",
      title: "Do you do custom branding plans?",
      description: "Absolutely! We specialize in custom brand development plans. Our tiered packages are designed to be adaptable, catering to each client's specific needs. This flexibility allows us to adjust the number of credits if your project demands a more complex approach. However, if the pre-set credits within a plan align with your requirements, you can utilize them directly to achieve your branding goals."
    },
    {
      id: "4",
      title: "What are branding services?",
      description: "Branding services are a suite of strategic solutions designed to shape and enhance a company's identity, fostering recognition and trust among its target audiences. These comprehensive services typically include brand development, design and storytelling, all aimed at creating a cohesive and memorable brand experience. Branding is much more than a logo-it is the embodiment of how your brand is perceived through color, design, font and your story."
    },
    {
      id: "5",
      title: "What billing options do you offer?",
      description: "We offer credit card billing or invoicing."
    },
    {
      id: "6",
      title: "What are the benefits of branding services?",
      description: "Branding services offer plenty of benefits, such as enhancing a company's visibility, credibility and market position. A well-crafted brand identity fosters recognition, instills trust and sets a business apart from competitors. With a cohesive brand strategy, companies can establish a strong emotional connection with their audience, leading to increased loyalty and customer retention. (In fact, 81% of consumers need to trust a brand to consider buying.)"
    },
    {
      id: "7",
      title: "Who's a best fit for your branding services?",
      description: "ACM excels in crafting robust brand identities, particularly for high-growth brands looking to launch, rebrand, and scale across diverse channels. Our expertise extends to bigger enterprises seeking a well-structured brand identity that resonates internally and externally. Collaborating with platforms like Shopify, Amazon, and Salesforce, we deliver meticulously tailored creative assets at scale. However, we can also take on less comprehensive projects, like logo design or iconography. Many of our customers also use our branding services in conjunction with our other creative services, such as ad and web design."
    },
    {
      id: "8",
      title: "How much do traditional branding agencies charge?",
      description: "On average, branding agencies charge up to $1,000 USD per hour, with branding packages reaching as high as $100,000 or more. Branding consultants may charge between $300 and $700 per hour, depending on the scope of the job. For reference, Pepsi paid over $1 million for their logo. ACM's transparent pricing structure not only enables cost savings on comprehensive branding services, it provides access to additional creative services that further elevate your brand"
    },

  ]
}

function BrandingServices() { 
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
        <div ref={pageMainRef} className='page-main'>
          <div className='tracing-beam'>
            <TracingBeam>
              <section data-bgcolor="#070707" data-textcolor="#ffffff">
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              </section>
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb="rounded-b-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
            </TracingBeam>
          </div>

          <div className='mobile-tracing-beam'>
              <section data-bgcolor="#070707" data-textcolor="#ffffff">
                <HeroSection heading={heroContent.heading} para={heroContent.para} />
              </section>
              <Section2 Cards={section2}/>
              <Section3  content={section3} roundb="rounded-t-[50px]" />
              <Section4 content={section4} roundb="rounded-b-[50px]"/>
              <Section7 content={section7}/>
              <Section8 content={section8}/>
              <ContactOurExperts />
              <FAQ  content={faq}/>
              <Footer />
          </div>
        </div>


      </>

  )
}

export default BrandingServices