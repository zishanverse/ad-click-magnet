

//const Spline = dynamic(() => import('@splinetool/react-spline'), {
//  ssr: false,
//});
import Spline from '@splinetool/react-spline/next';

export default function Section3Model() {
  return (
    <div>
      <Spline
        scene="https://prod.spline.design/KHokVySkT2jgUhp4/scene.splinecode" 
      />
    </div>
  );
}