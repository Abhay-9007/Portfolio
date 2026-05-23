import TwinkleBG from "./Twinkle_BG"
import LISA from "../assets/LISA.png"
import F1 from "../assets/F1.png"



function Project() {
    return(
        <> 
        {/* duration-1000 hover:-translate-x-320 absolute right-[-1330px] */}
            {/* <TwinkleBG /> */}
            <div className="w-screen h-screen fixed">
                <div className="relative w-screen hover:transition-transform duration-1000 hover:-translate-x-320  right-[-1330px] h-[90vh] mt-20 ">
                    <p className="absolute bottom-30 rotate-270 font-bold text-7xl text-red-500 ">LISA</p> 
                    
                    <img
                        className="absolute top-0 left-20 w-1/2 m-10 object-cover border-3 border-gray-500 rounded-3xl"
                        src={LISA} 
                        alt="LISA Image" />

                    <div className="absolute top-100 right-20">
                        <div className="">
                            <p className="project_info">
                                <span className="text-gray-500">Features</span>
                            </p>
                            <p className="project_info">
                                Intelegent Command Line Interface
                            </p>
                            <p className="project_info">
                                Voice Recognition and Text to Speech
                            </p>
                            <p className="project_info">
                                Fullly Encrypted Data Storage
                            </p>
                            <p className="project_info">
                                TimeTable Management
                            </p>
                            <p className="project_info">
                                Vulgarity detection and Abuse.
                            </p>
                            <p className="project_info">
                                Web Browser Support
                            </p>
                        </div>
                    </div>

                    <div className="absolute top-20 right-70">
                        <div className="">
                            <p className="project_info">
                                <span className="text-gray-500">Tool Used</span>
                            </p>
                            <p className="project_info">Speech Recgnition
                            </p>
                            <p className="project_info">GTTs Google Text to Speech
                            </p>
                            <p className="project_info">
                                Flask and PyGame
                            </p>
                            <p className="project_info">
                                Web Browser
                            </p>
                        </div>
                    </div>


                    <div className="absolute bottom-20 left-100">
                        <div className="">
                            <p className="project_info">
                                <span className="text-gray-500">Flask Powered</span> 24*7 Available.
                            </p>
                            <p className="project_info">
                                It can persist my notes, reminders, and tasks.
                            </p>
                            <p className="project_info">
                                Capable of <span className="text-gray-500">Web Browsing</span>.
                            </p>
                            <p className="project_info">
                                Inbuild smart <span className="text-gray-500">Iteration cycle</span> of last 3 commands
                            </p>
                            <p className="project_info">
                                Advance File Management.
                            </p>
                            <p className="project_info">
                                Coded in <span className="text-gray-500">Python </span>.
                            </p>
                            <p className="project_info">
                                Deployed by using <span className="text-gray-500">Python Anywhere</span>.
                            </p>
                            
                            <p className="project_info">

                            </p>
                        </div>
                    </div>
                </div>
            
        
                <div
                onClick={() => window.open("https://web-d2.vercel.app/")}   
                className="absolute bottom-[-320px] left-30 w-[90vw] h-[50vh] hover: translate-transform duration-1000 hover:-translate-y-[320px]">
                    <p className="text-red-500 font-bold text-7xl">F1 Test</p>

                    <img                    
                        className=" absolute top-10 right-10 w-2/5 m-10 object-cover border-3 border-gray-500 rounded-3xl"
                        src={F1} 
                        alt="F1 Test Image" />

                    <div className="absolute bottom-20 left-0">
                        <div className="">
                            <p className="project_info">
                                A Web Based Game.
                            </p>
                            <p className="project_info">
                                A Reaction Time Testing Game.
                            </p>
                            <p className="project_info">
                                Have a Leaderboard, using <span className="text-gray-500">Local Storage</span>.
                            </p>
                            <p className="project_info">
                                You have o press <span className="text-gray-500">"Enter"</span> or click the button when all lights are green.
                            </p>
                            <p className="project_info">
                                Coded in <span className="text-gray-500">HTML, CSS </span> And <span className="text-gray-500"> JS</span>.
                            </p>
                            <p className="project_info">
                                Deployed by using <span className="text-gray-500">Vercel</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="h-screen w-screen">
                <h1 className="text-6xl absolute top-90 left-150 z-10">
                    Projects
                </h1>
                
                <TwinkleBG />
                
                <div className="absolute rigth-0 ">
                    LISA
                </div>
            </div> */}
        </>
        
    )
}

export default Project