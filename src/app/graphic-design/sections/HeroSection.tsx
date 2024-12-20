
import '../graphic.css';
import React, { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io"; //logo
import { TextGenerateEffect } from '@/components/ui/TextGenerateEffect';
import { Input, Label } from '../../../components/ui/Form';
import { cn } from "@/lib/utils";

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};




const HeroSection = () => {
const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
    const [status, setStatus] = useState({
        message: "",
        isError: false
      });

  

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setStatus({ message: "Submitting...", isError: false });
  
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
  
        if (result.success) {
          setStatus({ message: "Form submitted successfully!", isError: false });
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",
          });
        } else {
          setStatus({ 
            message: result.error || "Failed to submit form.", 
            isError: true 
          });
        }
      } catch (error) {
        console.log(error);
        setStatus({ 
          message: "An error occurred while submitting the form.", 
          isError: true 
        });
      }
    };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const scrollToSection = () => {
    const targetElement = document.querySelector(".portfolio-sec-container");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };


    return (
      <section  className="graphic-page-hero-sec-container flex justify-center items-center text-white py-16 text-center">
        <div className="graphic-page-hero-sec-content flex-col justify-center items-center mt-10 w-[80%]">
          
          <TextGenerateEffect className="graphic-page-hero-sec-head" color={"contact-us-main-head"} words={"adClickMagnet"} />
          
          <TextGenerateEffect className="graphic-page-hero-sec-head" color={"contact-us-main-head"} words={"Creative Graphic Design"} />
            
      
           <p className="graphic-page-hero-sec-para-last">Specialized in Branding and Content Creation</p>
           <p className="graphic-page-hero-sec-para" >Since 2022, we craft designs that captivate, communicate, and leave a lasting impression. Let’s create something extraordinary together!</p>
           <div className="flex items-center justify-center w-[100%] mt-7">
            <button onClick={() => setIsPopupOpen(true)} className="service-hero-sec-content-button" type="button" >Get Started</button>
            <button onClick={scrollToSection} className="service-hero-sec-content-button see-more" type="button" >See More</button>
        
           </div>
        </div>


        {/* Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center pt-[20%] md:pt-[7%] h-[100vh] popup-z-index">
          <div className="service-page-popup">
            <div className="bg-blur rounded-2xl flex-col">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <IoMdCloseCircle className="text-4xl text-white"/>
            </button>
            
            <h2 className="service-page-popup-head">Get Started</h2>
            
            <form className="my-8" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname"  placeholder="Tyler" type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" >Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required />
                </LabelInputContainer>
              </div>
                
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" >Email Address</Label>
                <Input id="email" type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required placeholder="projectmayhem@fc.com" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <Input id="phoneNumber" value={formData.phoneNumber}
                  onChange={handleChange} name="phoneNumber" placeholder="+911234567889" type="text" />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Drop a Message</Label>
                <Input id="message" type="text"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required placeholder="What can we help you with?" />
              </LabelInputContainer>
              
              {status.message && (
                <div className={`mb-4 p-4 rounded ${
                  status.isError 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-100' 
                    : 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-100'
                }`}>
                  {status.message}
                </div>
              )}


              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />

        
            </form>
          </div>
          </div>
        </div>
      )}
      </section>
    );
  };
  
  export default HeroSection;
  