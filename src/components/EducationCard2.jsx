

function EducationCard2(props){
    return <>
        <div className="motion-preset-fade-lg motion-delay-700 w-1/5 flex flex-col items-center rounded-2xl border-4 border-red-500 p-4">
        
            <h1 className="w-[90%] text-2xl text-wrap text-center m-1 "> {props.standard}</h1>
            <hr className="w-[90%] text-2xl m-1"/>
            <h1 className="w-[90%] text-2xl text-wrap text-center m-1"> {props.stream} </h1>
            <hr className="w-[90%] text-2xl m-1"/>
            <h1 className="w-[90%] text-2xl text-wrap text-center m-1 mb-10"> {props.name} </h1>

            <div className="rounded-full border-gray-600 border-3 bg-black w-70 h-70 flex items-center justify-center">
                <h1 className="text-6xl font-bold text-amber-200">{props.percentage}%</h1>
            </div>
        </div>
    </>
}

export default EducationCard2