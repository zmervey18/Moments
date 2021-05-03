import "./BenefitListItem.css";
import Button from '../Button/Button'

const JournallingListItem = ({
  image,
  subtitle,
  alt,
  textClass,
  reverse = false,
  journallingModal
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
                
                />
        </div>
        
      </div>
    </div>
  );
};

export default JournallingListItem;
