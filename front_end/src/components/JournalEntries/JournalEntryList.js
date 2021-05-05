import React from 'react'
import JournalEntryCard from './JournalEntryCard'

const JournalEntryList = ({journalEntries, onDelete}) => {
    return (
        <div>
            {(journalEntries.length > 0) ?
            journalEntries.map(entry => (
            <JournalEntryCard
            key={entry.id}
            id={entry.id}
            onDelete={onDelete}
            body={entry.body}
            title={entry.title}/>))
            : ("No entries") }
        </div>
    )
}

export default JournalEntryList
