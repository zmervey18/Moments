const FeatureListCard = ({image, title, subtitle, alt}) => {
    return (
        <div>
            <img 
            src={image} 
            alt={alt}>
            </img>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default FeatureListCard
