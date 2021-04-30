import './BenefitListItem.css'

const BenefitListItem = ({image, subtitle, alt, textClass}) => {
    return (
        <div className="BenefitListCard">
            <img 
            src={image} 
            alt={alt}
            className="BenefitListImage"
            >
            </img>
            <div className={textClass}>
            <h3>{subtitle}</h3>
            </div>
        </div>
    )
}

export default BenefitListItem
