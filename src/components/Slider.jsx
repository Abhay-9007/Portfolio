function Slider() {

    const skills = [
        "Python",
        "Java",
        "HTML",
        "CSS",
        "Tailwind",
        "React",
        "JavaScript",
        "SQL",
        "Node",
        "Express",
    ]

    return (
        <div className="overflow-hidden w-full py-10 my-40">

            <div className="flex animate-scroll">

                <div className="flex   gap-8 pr-8">
                    {skills.map((item, index) => (
                        <div key={index} className="slider_lang">
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>

                <div className="flex  gap-8 pr-8">
                    {skills.map((item, index) => (
                        <div key={index} className="slider_lang">
                            <h1>{item}</h1>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    )
}

export default Slider