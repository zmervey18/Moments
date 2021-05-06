import React from 'react'
import Icon from '../Icon/Icon'
const JournalEntryCard = ({id, onDelete, body, title, image, date, prompt}) => {
    return (
        <div className="journal-entry-card">
            <p>{prompt}</p>
            <p>{title}</p>
            <p>{body}</p>
            <p>{date}</p>
            <img src={image} alt="" className="entry-image"/>
            <Icon 
            className="deckIcon"
            event={()=>onDelete(id)}
            />
        </div>
    )
}

export default JournalEntryCard
