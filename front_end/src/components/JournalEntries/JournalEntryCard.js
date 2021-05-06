import React from 'react'
import Icon from '../Icon/Icon'
import './Journalling.css'
const JournalEntryCard = ({id, onDelete, body, title, image, date, prompt}) => {
    return (
        <div className="lastSelector">
        <div className="card">
            {prompt ? <h3>{prompt}</h3> : <h3>{title}</h3>}
            <div className="journal-text">
            <p>{body}</p>
            <p>{date}</p>
            </div>
            <img src={image} alt="" className="entry-image"/>
            {!date ? null : <Icon 
            className="deckIcon"
            event={()=>onDelete(id)}
            />}
            
        </div>
        </div>
    )
}

export default JournalEntryCard
