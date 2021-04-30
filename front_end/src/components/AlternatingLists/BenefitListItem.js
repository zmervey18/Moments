import React from 'react'


const BenefitListItem = ({image, subtitle, alt}) => {
    return (
        <div>
            <img 
            src={image} 
            alt={alt}>
            </img>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default BenefitListItem
