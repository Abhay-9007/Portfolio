
// import img from '../assets/me.png'


// function Card() {
//     return (
//         <>
//             {/* <h1 className="h-150 text-6xl flex items-center justify-center">Card</h1> */}

//             <div className="flex justify-center items-center h-[89vh] ">
//                 <div className="absolute flex w-[70vw] h-[59vh] justify-center items-center  bg-white">

//                     <div className="">
//                         <img className="" src={img} alt="" />
//                     </div>

//                     <div className=" bg-white flex flex-col justify-center items-center  w-3/4 ">
//                         <h1 className='text-6xl font-bold text-black'>
//                             Abhay Pratap Singh
//                         </h1>
//                         <p className='text-black text-3xl font-bold p-5' > 7037900711 </p>
//                         <div className="flex gap-5 align-baseline p-10">
//                             <div className="card_id"> E </div>
//                             <div className="card_id"> L </div>
//                             <div className="card_id"> I </div>
//                             <div className="card_id"> G </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Card



import img from "../assets/me.png";

function Card() {
    return (
        <div className="motion-preset-slide-down h-[85vh]  bg-black flex items-center justify-center p-4 my-15">

            {/* Visiting Card */}
            <div
                className="
                    w-[90vw]
                    max-w-[900px]
                    aspect-[1.75/1]
                    bg-white
                    text-black
                    overflow-hidden
                    shadow-2xl
                    flex
                    flex-row
                "
            >

                {/* Left Image Section */}
                <div className="w-[38%] h-full">
                    <img
                        src={img}
                        alt="Abhay"
                        className="
                            w-full
                            h-full
                            object-cover
                        "
                    />
                </div>

                {/* Right Content Section */}
                <div
                    className="
                        w-[62%]
                        h-full
                        flex
                        flex-col
                        justify-center
                        px-6
                        sm:px-10
                        md:px-14
                    "
                >

                    {/* Name */}
                    <h1
                        className="
                            text-2xl
                            sm:text-3xl
                            md:text-5xl
                            font-black
                            uppercase
                            leading-tight
                            tracking-tight
                        "
                    >
                        Abhay
                        <br />
                        Pratap Singh
                    </h1>

                    {/* Divider */}
                    <div className="w-24 h-[3px] bg-black my-5"></div>

                    {/* Role */}
                    <p
                        className="
                            text-sm
                            sm:text-base
                            md:text-xl
                            font-semibold
                            tracking-[4px]
                            uppercase
                        "
                    >
                        Full Stack Developer
                    </p>

                    {/* Contact */}
                    <div className="mt-8 space-y-2">

                        <p
                            className="
                                text-xs
                                sm:text-sm
                                md:text-lg
                                font-medium
                                tracking-wide
                            "
                        >
                            +91 7037900711
                        </p>

                        <p
                            className="
                                text-xs
                                sm:text-sm
                                md:text-lg
                                font-medium
                                break-all
                            "
                        >
                            abhaypratapsingh9007@gmail.com
                        </p>

                    </div>

                    {/* Bottom Tags */}
                    <div className="flex gap-3 mt-8 flex-wrap">

                        {["Github", "Linkedin", "Instagram"].map((item) => (
                            <div
                                key={item}
                                className="
                                    border
                                    border-black
                                    px-3
                                    py-1
                                    text-xs
                                    sm:text-sm
                                    font-semibold
                                    uppercase
                                    tracking-wider
                                "
                            >
                                {item}
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;