import BenefitListItem from "./BenefitListItem";
import guided from "../../static/guided.svg";
import freestyle from "../../static/freestyle.svg";
import browse from "../../static/browse.svg";
import "./BenefitListItem.css";

const AlternatingListAuthHomePage = () => {
    return (
       
        <div className="BenefitListVerticalContainer">
            <div className="BenefitListContainer">
                <BenefitListItem
                image={guided}
                subtitle="Guided Journalling"
                alt="Car on a road"
                textClass="TextContainerRight"
                />

                <BenefitListItem
                image={freestyle}
                subtitle="Freestyle Journalling"
                alt="Woman facing a big journal and writing"
                textClass="TextContainerLeft"
                reverse={true}
                />

                <BenefitListItem
                image={browse}
                subtitle="Browse moments"
                alt="Man standing in front of a photo album"
                textClass="TextContainerRight"
                />
            </div>
 
        </div>
    )
}

export default AlternatingListAuthHomePage
