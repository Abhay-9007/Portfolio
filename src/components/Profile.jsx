import TwinkleBG from "./Twinkle_BG.jsx"
import Leetcode from '../assets/Green_Leetcode.png'
import GFG from '../assets/Green_GFG.png'
import Codeforces from '../assets/Green_Codeorces.png'
import Codechef from '../assets/Green_Codechef.png'
import Github from '../assets/Green_Github.png'


function Profile() {
    return (
        <>
            <h1 className="text-6xl absolute top-90 left-150 z-10">
                Go Green
            </h1>
            
            <TwinkleBG />

            <section className="profile_Sticker h-screen w-screen z-20 p-10 flex flex-col justify-center items-center mt-200">
                    <h1 className="pb-5 text-7xl text-white-500 font-bold">Github</h1>
                    <img 
                        onClick={() => window.open("https://github.com/Abhay-9007")}   
                        className="pb-10"
                        src={Github} 
                        alt="Green_Github.img" />
                    {/* <p className="text-4xl">Question's Solved : 650+</p>
                    <p className="text-4xl">Contest Rating : 1500+</p> */}
            </section>
            <section className="profile_Sticker h-screen w-screen z-20 p-10 flex flex-col justify-center items-center mt-200">
                    <h1 className="pb-5 text-7xl text-white-500 font-bold">Leetcode</h1>
                    <img 
                        onClick={() => window.open("https://leetcode.com/u/Abhay_Pratap_9007/")}   
                        className="pb-10"
                        src={Leetcode} 
                        alt="Green_Leetcode.img" />
                    <p className="text-4xl">Question's Solved : 650+</p>
                    <p className="text-4xl">Contest Rating : 1500+</p>
            </section>
            <section className="profile_Sticker h-screen w-screen z-30 p-10 flex flex-col justify-center items-center mt-200">
                    <h1 className="pb-5 text-7xl text-white-500 font-bold">CodeForces</h1>
                    <img 
                        onClick={() => window.open("https://codeforces.com/profile/abhaypratapsingh9007/")}   
                        className="pb-10"
                        src={Codeforces} 
                        alt="Green_Codeforces.img" />
                    {/* <p className="text-4xl">Question's Solved : 200+</p> */}
                    {/* <p className="text-4xl">Contest Rating : 1500+</p> */}
            </section>
            <section className="profile_Sticker h-screen w-screen z-40 p-10 flex flex-col justify-center items-center mt-200">
                    <h1 className="pb-5 text-7xl text-white-500 font-bold">CodeChef</h1>
                    <img 
                        onClick={() => window.open("https://www.codechef.com/users/abhay9007")}   
                        className="pb-10"
                        src={Codechef} 
                        alt="Green_Codechef.img" />
                    <p className="text-4xl">Question's Solved : 450+</p>
                    <p className="text-4xl">Contest Rating : 950+</p>
            </section>
            <section className="profile_Sticker h-screen w-screen z-50 p-10 flex flex-col justify-center items-center mt-200">
                    <h1 className="pb-5 text-7xl text-white-500 font-bold">GeeksForGeeks</h1>
                    <img 
                        onClick={() => window.open("https://www.geeksforgeeks.org/profile/abhaypratapdqk6?tab=activity")}   
                        className="pb-10"
                        src={GFG} 
                        alt="Green_GFG.img" />
                    <p className="text-4xl">Question's Solved : 600+</p>
                    {/* <p className="text-4xl">Contest Rating : 1500+</p> */}
            </section>
            
        </>
    )
}

export default Profile