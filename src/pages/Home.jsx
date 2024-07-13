import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from 'gsap'
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";
import img from "../pics/mosq.png"

gsap.registerPlugin(useGSAP, ScrollTrigger, MotionPathPlugin)

const Home = () => {
    const container = useRef();

    useGSAP(() => {
        gsap.timeline({
            defaults: { duration: 1 },
            scrollTrigger: {
                trigger: "#path",
                scrub: 3,
                start: "top",
                end: "bottom",
            },
        }).to(
            "#moving",
            {
                stagger: 0.5,
                motionPath: {
                    path: "#path",
                    align: "#path",
                    alignOrigin: [0.5, 0.5],
                    //autoRotate: true,
                },
                ease: "cubic-bezier(0,1.04,0,1.01)"
            }
        )

    }, { scope: container })

    return (
        <div className='bg-red-50' ref={container}>
            {/* <h1 class="header-section">Scroll to see a timeline animation</h1> */}
            <img id="moving" src={img} alt="" className="w-32" />

            <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-50 0 1860 3600">
                <path className="line03 line" d="M 10 1200  1860 1200" strokeWidth={10} stroke="gray"></path>
                <path className="line04 line" d="M 10 2000  1860 2000" strokeWidth={10} stroke="gray"></path>
                <path className="line05 line" d="M 10 2800 1860 2800" strokeWidth={10} stroke="gray"></path>


                <path id="path" class="theLine"
                    d="M 1010 -95 C 1010 90 1123 720 536 710 C 519 709 506 709 490 711 C 473 714 358.187 718.682 146.249 844.249 C -70.78 1103.95 14.857 1306.805 137.249 1507.249 C 282.515 1612.786 1584.834 1474.822 1710.249 1645.249 C 1835.665 1815.676 1714.757 2171.998 1642.249 2241.249 C 1545.451 2403.675 254.384 2180.83 104.249 2411.249 C -45.885 2641.668 14.421 2845.36 132.249 2966.249 C 250.78 3087.463 1582.519 2858.373 1657.249 3267.249"
                    fill="none" stroke="gray" stroke-width="10px" />




            </svg>
        </div>
    )
}

export default Home;