import './App.css'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Navbar from './components/navbar';
import Contact from './components/contact';
import { ScrollTrigger } from 'gsap/all';
import Work from './components/work';
import SplineViewer from './components/splineheroScence';
function App() {
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   },1000);
  //   return () => clearTimeout(timer);
  // }, []);
  // if (loading) {
  //   return <Loader />
  // }
  return (
    <div>
      <Navbar/>
      <div className='h-screen relative z-1'>
      <SplineViewer/>
      {/* <Canvas>
          <ambientLight intensity={0.4} />
          <directionalLight position={[18, 10, 5]} />
          <Model />
        </Canvas> */}
        </div>
      <Hero/>
      <Work/>
      {/* banner */}
      <Contact/>
    </div>
  )
}

export default App

gsap.registerPlugin(useGSAP,ScrollTrigger);

const Hero = () => {
  useGSAP(
    () => {
      // gsap code here...
      gsap.from('.box',{
        duration:3,
        ease: "bounce.out",
        y: 280,
        opacity:0,
        overflowY: "hidden"
      });
      gsap.to('.aimSec .aim', {
        transform:"translateX(-85%)",
        scrollTrigger: {
          trigger: ".aimSec",
          scroller:"body",
          markers: false,
          scrub: 4,
          start: " top 0%",
          end:"top -100%",
          pin: true
        },
      });
    },
  );

  return (
    <>
    <div className=" flex justify-center bg-scroll h-0 -mt-7 relative">
      <img src='../assets/calyra.svg' className='h-screen box' />
    </div>
     <div className='h-screen aimSec bg-blue-700 justify-center items-center'>
     <h1 className='aim w-max  '>* we create experiences *</h1>
   </div>
   </>
  );
}