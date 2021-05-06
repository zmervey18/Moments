import React from 'react'
import JournalEntryCard from './JournalEntryCard'

const JournalEntryList = ({journalEntries, onDelete}) => {
    console.log(journalEntries)
    return (
        <div>
            {(journalEntries.length > 0) ?
            journalEntries.map(entry => (
            <div className="journal-entry">
            <JournalEntryCard
            key={entry.pk}
            id={entry.pk}
            onDelete={onDelete}
            date={entry.date}
            body={entry.body}
            title={entry.title}
            image={entry.image}
            prompt={entry.prompt}
            />
            </div>))
            : ("No entries") }
        </div>
    )
}

export default JournalEntryList
