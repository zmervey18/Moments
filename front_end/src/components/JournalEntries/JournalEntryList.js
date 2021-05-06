import React from 'react'
import JournalEntryCard from './JournalEntryCard'

const JournalEntryList = ({journalEntries, onDelete}) => {
    return (
        <div>
            {(journalEntries.length > 0) ?
            journalEntries.map(entry => (
            <JournalEntryCard
            key={entry.pk}
            id={entry.pk}
            onDelete={onDelete}
            body={entry.body}
            title={entry.title}
            image={entry.image}
            />))
            : ("No entries") }
        </div>
    )
}

export default JournalEntryList
