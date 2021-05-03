import "./BenefitListItem.css";
import Button from '../Button/Button'

const JournallingListItem = ({
  image,
  subtitle,
  alt,
  textClass,
  reverse = false,
  journallingModal,
  guidedJournallingModal
}) => {

  
  return (
    <div className="BenefitListCard">
      <img
        src={image}
        alt={alt}
        className={`BenefitListImage ${reverse ? "second" : "first"}`}
      ></img>
      <div className={`${textClass} ${reverse ? "first" : "second"}`}>

       <div className="formButton">
                <Button 
                buttonStyle="btn--blue" 
                text= {subtitle} 
                event={journallingModal}
                // event={guidedJournallingModal}
                
                />
        </div>
        
      </div>
    </div>
  );
};

export default JournallingListItem;
