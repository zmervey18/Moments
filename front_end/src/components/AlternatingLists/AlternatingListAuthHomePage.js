import JournallingListItem from "./JournallingListItem";
import guided from "../../static/guided.svg";
import freestyle from "../../static/freestyle.svg";
import browse from "../../static/browse.svg";
import browse_journal from "../../static/browse_journal.svg";
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
                journallingModal={journallingModal}
                />

                <JournallingListItem
                image={guided}
                subtitle="Guided Journalling"
                alt="Car on a road"
                textClass="TextContainerLeft"
                reverse={true}
                guidedJournallingModal={guidedJournallingModal}
                
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
