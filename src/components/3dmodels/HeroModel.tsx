"use client"

//import dynamic from 'next/dynamic';
//
//const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
//  ssr: false,
//});
import Spline from '@splinetool/react-spline/next';

import '../app.css';


export default function HeroModel() {
  
  return (
    <div className='home-model'>
      <Spline
        scene="https://prod.spline.design/xGBBKsEMeyKcN8gb/scene.splinecode"
        />
    </div>
  );
}

