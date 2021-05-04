import "./BenefitListItem.css";
import Button from '../Button/Button'

const JournallingListItem = ({
  image,
  subtitle,
  alt,
  textClass,
  reverse = false,
  event,
  linkTo
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
          {!linkTo ? <Button 
                buttonStyle="btn--blue" 
                text= {subtitle} 
                event={event}
                /> : 
                <Button 
                buttonStyle="btn--blue" 
                text= {subtitle} 
                linkTo={linkTo}
                />
                }
                
        </div>
        
      </div>
    </div>
  );
};

export default JournallingListItem;
