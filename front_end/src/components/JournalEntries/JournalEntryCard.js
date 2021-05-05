import React from 'react'
import journal from '../../static/journal.svg'
import Icon from '../Icon/Icon'
const JournalEntryCard = ({journalEntries, id, onDelete, body, title}) => {
    return (
        <div className="journal-entry-card">
            <p>{title}</p>
            <p>{body}</p>
            <Icon 
            className="deckIcon"
            event={()=>onDelete({id})}
            />
        </div>
    )
}

export default JournalEntryCard
