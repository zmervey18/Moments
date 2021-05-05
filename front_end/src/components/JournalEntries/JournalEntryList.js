import React from 'react'
import JournalEntryCard from './JournalEntryCard'

const JournalEntryList = ({journalEntries, onDelete}) => {
    return (
        <div>
            {(journalEntries.length > 0) ?
            journalEntries.map(entry => (
            <JournalEntryCard
            key={entry._id}
            id={entry._id}
            onDelete={onDelete}
            body={entry.body}
            title={entry.title}/>))
            : ("No entries") }
        </div>
    )
}

export default JournalEntryList
