

import HeroSection from "@/components/homeSections/HeroSection";

import Section2 from "@/components/homeSections/Section2";
import Section3 from "@/components/homeSections/Section3";
import Section5 from "@/components/homeSections/Section5";
import Section6 from "@/components/homeSections/Section6";
import AboutSection from "@/components/homeSections/AboutSection";
import TeamSection from "@/components/homeSections/TeamSection";
import Section7 from "@/components/homeSections/Section7";
import Section8 from "@/components/homeSections/Section8";
import Section9 from "@/components/homeSections/Section9";
import Footer from "@/components/Footer";
import ClientVideSec from "@/components/homeSections/ClientVideSec";
//import { useEffect, useState } from "react";
//import Loading from "@/components/Loading";
//import TextSection from '@/components/TextSection'

export default function Home() {
  //const [loading, setLoading] = useState(false);
//
  //useEffect(() => {
  //  setLoading(true);
  //}, []);

  
    return (
      <div className="dark:bg-balck bg-black overflow-hidden">
        <HeroSection />
        <div className="after-hero-sec">

          <Section2 />
          <Section3 />
          <Section5 />
          <AboutSection />
          <TeamSection />
          <Section6 />
          <Section7 />
          <ClientVideSec />
          <Section8 />
          <Section9 />
          <Footer />
        </div>
      </div>
    );

}

//<>
//      {!loading ? (
//        
//      ) : (
//        <Loading />
//      )}
//</>

