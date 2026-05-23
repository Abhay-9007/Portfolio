import Education from "./Education.jsx"
import Intro from "./Intro.jsx"
import LandingPage from "./LandingPage.jsx"
import Project from "./Project.jsx"
import Slider from "./Slider.jsx"
import Projects_Section from './Projects_Section.jsx'
import TwinkleBG from "./Twinkle_BG.jsx"
import Ending from "./Ending.jsx"
import AATest from "./AATest.jsx"


function Home() {

    return (
        <>
            
            <LandingPage/>
            <Intro/>
            <Slider/>
            <Education/>
            {/* <TwinkleBG/> */}
            {/* <Projects_Section/> */}
            <Ending/>
            {/* <AATest/> */}
            {/* <div className="">
                <h1 className="text-6xl font-bold px-14">
                    {"PROJECT'S ->"}
                </h1>
                <Project className="z-10 bg-violet-500"/>
                <Project className="z-20 bg-green-500"/>
                <Project className="z-30 bg-blue-500"/>
            </div> */}

            {/* <div className="flex items-end justify-center h-screen" >
                <img className="h-100 flex justify-center items-center" 
                src="https://preview.redd.it/i-think-you-all-know-the-drill-dead-body-pngs-feel-free-to-v0-rnj1si3kzwn51.png?width=720&format=png&auto=webp&s=fd09ddc7ce52090a61ad30f3fb38baf4f1ed9160"/>
                <h1>Hello</h1>
            </div> */}
        </>
    )
}

export default Home