import { Link } from 'react-router-dom'

function Navbar(){
    return <>
        {/* <nav className="flex justify-between p-4 mx-5"> */}
        <nav className="absolute w-screen z-100 rounded-2xl backdrop-blur-sm flex justify-between items-center font-semibold p-5 pr-10  top-0 left-0 ">
            <p className="text-red-500 font-bold text-4xl mx-3 motion-preset-slide-down">
                Abhay Here
            </p>
            <div className="flex gap-10 text-[20px] ">
                {/* <Link className="" to='/'>Home</Link>
                <Link to='/profiles'>Profile's</Link>
                <Link to='/accounts'>Account's</Link>
                <Link to='/card'>Card</Link> */}
                <Link className="hover:text-red-500 motion-preset-rebound-down motion-delay-400" to='/'>Home</Link>
                <Link className="hover:text-red-500 motion-preset-rebound-down motion-delay-500" to='/projects'>Project's</Link>
                <Link className="hover:text-red-500 motion-preset-rebound-down motion-delay-450" to='/profiles'>Profile's</Link>
                <Link className="hover:text-red-500 motion-preset-rebound-down motion-delay-550" to='/card'>Card</Link>
            </div>
        </nav>
    </>

}

export default Navbar