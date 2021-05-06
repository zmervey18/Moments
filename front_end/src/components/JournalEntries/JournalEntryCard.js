import React from 'react'
import Icon from '../Icon/Icon'
const JournalEntryCard = ({id, onDelete, body, title, image}) => {
    return (
        <div className="journal-entry-card">
            <p>{title}</p>
            <p>{body}</p>
            <img src={image} alt="" className="entry-image"/>
            <Icon 
            className="deckIcon"
            event={()=>onDelete(id)}
            />
        </div>
    )
}

export default JournalEntryCard
