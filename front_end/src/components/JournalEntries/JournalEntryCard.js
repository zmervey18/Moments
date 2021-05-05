import React from 'react'
import journal from '../../static/journal.svg'

const JournalEntryCard = ({journalEntries, id, onDelete, body, title}) => {
    return (
        <div className="journal-entry-card">
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default JournalEntryCard
