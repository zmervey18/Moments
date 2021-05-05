import React from 'react'
import JournalEntryCard from './JournalEntryCard'

const JournalEntryList = ({journalEntries}) => {
    return (
        <div>
            <JournalEntryCard
            journalEntries={journalEntries}/>
            <JournalEntryCard/>
            <JournalEntryCard/>
            <JournalEntryCard/>
        </div>
    )
}

export default JournalEntryList
