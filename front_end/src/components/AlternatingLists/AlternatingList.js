import React from 'react'
import BenefitListItem from './BenefitListItem'
import knowledge from '../../static/knowledge.svg'
import sleep from '../../static/sleep.svg'
import journal from '../../static/journal.svg'
import './BenefitListItem.css'

const AlternatingList = () => {
    return (
        <div className="BenefitListVerticalContainer">
            <div className="BenefitListContainer">
                <BenefitListItem
                image={sleep}
                subtitle="Journaling helps you sleep better."
                alt="Woman Sleeping"
                textClass="TextContainerRight"
                />
                <BenefitListItem
                image={journal}
                subtitle="Journaling reduces stress and anxiety."
                alt="Woman facing a big journal"
                textClass="TextContainerLeft"
                />

                <BenefitListItem
                image={knowledge}
                subtitle="Journaling helps you learn from your experiences."
                alt="Woman gazing at a static page"
                textClass="TextContainerRight"
                />
            </div>
        </div>
    )
}

export default AlternatingList
