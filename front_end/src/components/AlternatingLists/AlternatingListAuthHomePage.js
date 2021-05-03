import JournallingListItem from "./JournallingListItem";
import guided from "../../static/guided.svg";
import freestyle from "../../static/freestyle.svg";
import browse from "../../static/browse.svg";
import browse_journal from "../../static/browse_journal.svg";
import "./BenefitListItem.css";

const AlternatingListAuthHomePage = () => {
    return (
       
        <div className="BenefitListVerticalContainer">
            <div className="BenefitListContainer">
                <JournallingListItem
                image={guided}
                subtitle="Guided Journalling"
                alt="Car on a road"
                textClass="TextContainerRight"
                />

                <JournallingListItem
                image={freestyle}
                subtitle="Freestyle Journalling"
                alt="Woman facing a big journal and writing"
                textClass="TextContainerLeft"
                reverse={true}
                />

                <JournallingListItem
                image={browse}
                subtitle="Browse moments"
                alt="Man standing in front of a photo album"
                textClass="TextContainerRight"
                />

                <JournallingListItem
                image={browse_journal}
                subtitle="Browse Journal Entries"
                alt="Man facing a page with content"
                textClass="TextContainerLeft"
                reverse={true}
                />

               
            </div>
 
        </div>
    )
}

export default AlternatingListAuthHomePage
