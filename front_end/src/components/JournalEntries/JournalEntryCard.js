import React from 'react'
import journal from '../../static/journal.svg'

const JournalEntryCard = ({journalEntries}) => {
    return (
        <div>
            {journalEntries}
            <h3>Title</h3>
            <p>Date:</p>
            <p>Prompt</p>
            <p>Journal entry:</p>
            <img src={journal}/>
            
        </div>
    )
}

export default JournalEntryCard
