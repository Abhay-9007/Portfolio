import LISA from '../assets/LISA.png'

function Projects_Section() {
    return (
        <>
            <section className="project_Sticker  z-10">
                <div className="w-6/10 p-10 flex-col flex justify-center">
                    <h1 className="text-5xl p-5 pl-10 font-bold text-red-500">
                        LISA
                    </h1>
                    <p className="project_info">
                        This is an <span className="text-gray-500">Solo Project</span>, developed to assist me manage my routine and daily tasks.
                    </p>
                    <p className="project_info">
                        It can persist my notes, reminders, and tasks.
                    </p>
                    <p className="project_info">
                        Even manages my TimeTable.
                    </p>
                    <p className="project_info">
                        Coded in <span className="text-gray-500">Python, using Flask, GTTs, SpeechRecognition </span>and more.
                    </p>
                    <p className="project_info">
                        Deployed by using <span className="text-gray-500">Python Anywhere</span>.
                    </p>
                </div>
                <div className="w-4/10 bg-black flex items-center justify-center"> 
                    <img src={LISA} alt="LISA" />
                </div>
            </section>

            {/* VIOLET */}
            <section className="project_Sticker  z-20">
                <div className="w-4/10 bg-black flex items-center justify-center"> 
                    <img src={LISA} alt="LISA" />
                </div>
                <div className="w-6/10 p-10 flex-col flex justify-center">
                    <h1 className="text-5xl p-5 pl-10 font-bold text-red-500">
                        LISA
                    </h1>
                    <p className="project_info">
                        This is an <span className="text-gray-500">Solo Project</span>, developed to assist me manage my routine and daily tasks.
                    </p>
                    <p className="project_info">
                        It can persist my notes, reminders, and tasks.
                    </p>
                    <p className="project_info">
                        Even manages my TimeTable.
                    </p>
                    <p className="project_info">
                        Coded in <span className="text-gray-500">Python, using Flask, GTTs, SpeechRecognition </span>and more.
                    </p>
                    <p className="project_info">
                        Deployed by using <span className="text-gray-500">Python Anywhere</span>.
                    </p>
                </div>
            </section>

            {/* GREEN */}
            <section className="project_Sticker z-30">
                <div className="w-6/10 p-10 flex-col flex justify-center">
                    <h1 className="text-5xl p-5 pl-10 font-bold text-red-500">
                        LISA
                    </h1>
                    <p className="project_info">
                        This is an <span className="text-gray-500">Solo Project</span>, developed to assist me manage my routine and daily tasks.
                    </p>
                    <p className="project_info">
                        It can persist my notes, reminders, and tasks.
                    </p>
                    <p className="project_info">
                        Even manages my TimeTable.
                    </p>
                    <p className="project_info">
                        Coded in <span className="text-gray-500">Python, using Flask, GTTs, SpeechRecognition </span>and more.
                    </p>
                    <p className="project_info">
                        Deployed by using <span className="text-gray-500">Python Anywhere</span>.
                    </p>
                </div>
                <div className="w-4/10 bg-black flex items-center justify-center"> 
                    <img src={LISA} alt="LISA" />
                </div>
            </section>
        </>
    )
}

export default Projects_Section