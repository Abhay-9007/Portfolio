import EducationCard from "./EducationCard"
import EducationCard2 from "./EducationCard2"

function Education(){
    return (
        <div className="w-full flex gap-20 px-45 py-20 justify-center ">
            <EducationCard percentage={75} standard={"10th"} stream="Science" name="Kanha Makhan Public School"/>
            <EducationCard2 percentage={88} standard={"12th"} stream="Science" name="Kanha Makhan Public School"/>
            <EducationCard percentage={71} standard={"B.Tech"} stream="CS" name="GLA Mathura"/>
        </div>
    )
}

export default Education