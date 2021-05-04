import JournallingListItem from "./JournallingListItem";
import guided from "../../static/guided.svg";
import freestyle from "../../static/freestyle.svg";
import browse from "../../static/browse.svg";
import browse_journal from "../../static/browse_journal.svg";
import moments from "../../static/moments.svg";
import "./BenefitListItem.css";

const AlternatingListAuthHomePage = ({journallingModal, guidedJournallingModal}) => {
    return (
       
        <div className="BenefitListVerticalContainer">
            <div className="BenefitListContainer">
                <JournallingListItem
                image={freestyle}
                subtitle="Freestyle Journalling"
                alt="Woman facing a big journal and writing"
                textClass="TextContainerRight"
                event={journallingModal}
                />

                <JournallingListItem
                image={guided}
                subtitle="Guided Journalling"
                alt="Car on a road"
                textClass="TextContainerLeft"
                reverse={true}
                event={guidedJournallingModal}
                
                />

                <JournallingListItem
                image={moments}
                subtitle="Add Moments"
                alt="Car on a road"
                textClass="TextContainerRight"
                event={guidedJournallingModal}
                
                />

                <JournallingListItem
                image={browse}
                subtitle="Browse moments"
                alt="Man standing in front of a photo album"
                textClass="TextContainerLeft"
                reverse={true}
                />

                <JournallingListItem
                image={browse_journal}
                subtitle="Browse Journal Entries"
                alt="Man facing a page with content"
                textClass="TextContainerRight"
                />

               
            </div>
 
        </div>
    )
}

export default AlternatingListAuthHomePage
