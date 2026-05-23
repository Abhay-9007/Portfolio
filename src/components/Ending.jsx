
import TwinkleBG from "./Twinkle_BG"
import ConnectCard from "./ConnectCard"

function Ending() {
    return (
        <>  
            {/* <TwinkleBG className="z-0 absolute bottom-0 right-0" /> */}
            <div className="h-screen">
                <h1 className="text-8xl text-center pt-50 font-bold p-10">
                    Feel Free to <span className="text-red-500">Connect</span> 
                </h1>
                <div className="h-1/2 flex flex-row justify-center pt-20">
                    <ConnectCard 
                        name="Coding Profiles" 
                        n1="Leetcode" 
                        l1="https://leetcode.com/u/Abhay_Pratap_9007/"
                        n2="Codeforces"
                        l2="https://codeforces.com/profile/abhaypratapsingh9007/"
                        n3="Codechef" 
                        l3="https://www.codechef.com/users/abhay9007"
                    />
                    <ConnectCard 
                        name="Coding Profiles" 
                        n1="GitHub" 
                        l1="https://github.com/Abhay-9007"
                        n2="LinkedIn"
                        l2="https://www.linkedin.com/in/abhay-pratap-singh-21103b2aa/"
                        n3="GFG"
                        l3="https://www.geeksforgeeks.org/profile/abhaypratapdqk6?tab=activity"
                    />
                    <ConnectCard 
                        name="Social" 
                        n1="Instagram" 
                        l1="https://www.instagram.com/__abhay.p/"
                        n2="Email"
                        l2="mailto:abhaypratpsingh9007@gmail.com"
                        n3="Contant Number" 
                        l3="tel:+917037900711"
                    />
                </div>
            </div>
        </>
    )
}


export default Ending