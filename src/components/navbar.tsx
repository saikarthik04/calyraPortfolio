import { useGSAP } from "@gsap/react"
import gsap from 'gsap';
gsap.registerPlugin(useGSAP)
const Navbar = () => {
    useGSAP(
        () => {
            gsap.from('.linkitem',{
                delay:1,
                y : -40,
                opacity: 0,
                stagger:{
                    each: 0.3
                }
              });
        }
    );
  return (
    <div className="flex justify-evenly pt-5 h-20 ">{ ['about','work','studio','contact'].map((item) =>{
        return (
        <div>
        <a className="font-sans hover:underline-offset-4 hover:underline linkitem">{item}</a>
        </div>
    )

    }) } </div>
  )
}

export default Navbar