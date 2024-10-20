import { HoverEffect } from "../ui/card-hover-effect";
import Image from "next/image";
import img from '../../public/images/logo/adclickmagnetlogogrey.png'
 
export default function Section5() {
  return (
    <>
    <div className="logo-service">
      <div className=" flex items-center">
        <Image height={150} width={150} src={img} alt="acm logo" />
        <p className="services">Services</p>
      </div>
      <h2 className="our-services-head">Our Digital Services</h2>
    </div>
    <div className="max-w-5xl mx-auto sec5-cards-cont">
      <HoverEffect items={projects} />
    </div>
    </>
  );
}
export const projects = [
  {
    title: "Google Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "https://stripe.com",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/google-ads_evce9b.png"
  },
  {
    title: "Meta Ads",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "https://netflix.com",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/metaads_zuynul.png"
  },
  {
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "https://google.com",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/graphic_kcngq5.png"
  },
  {
    title: "Meta",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "https://meta.com",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346057/developer_zapbki.png"
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "/",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346057/seo_xhgl2x.png"
  },
  {
    title: "Email Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
    link: "https://microsoft.com",
    imageUrl: "https://res.cloudinary.com/deepcnbrz/image/upload/v1729346056/graphic_kcngq5.png"
  },
];