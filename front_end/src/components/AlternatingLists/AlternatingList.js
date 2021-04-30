import React from 'react'
import BenefitListItem from './BenefitListItem'

import knowledge from '../../static/knowledge.svg'
import sleep from '../../static/sleep.svg'
import journal from '../../static/journal.svg'

const AlternatingList = () => {
    return (
        <div>
            <BenefitListItem
            image={sleep}
            subtitle="Journaling helps you sleep better."
            alt="Woman Sleeping"
            />
            
            <BenefitListItem
            image={journal}
            subtitle="Journaling reduces your stress and anxiety."
            alt="Woman facing a big journal"
            />

            <BenefitListItem
            image={knowledge}
            subtitle="Journaling helps you learn from your experiences."
            alt="Woman gazing at a static page"
            />
        </div>
    )
}

export default AlternatingList
