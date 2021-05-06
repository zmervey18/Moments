import React from 'react'
import Footer from '../components/Footer/Footer'
import AuthNavbar from '../components/Header/AuthNavbar'
import JournalEntryList from '../components/JournalEntries/JournalEntryList'

const JournalEntries = ({onDelete, journalEntries, invalidateToken}) => {
    return (
        <div>
            <AuthNavbar
            invalidateToken= { invalidateToken }
            />

            <JournalEntryList
            onDelete={onDelete}
            journalEntries={journalEntries}
            />
            
            <Footer/>
            
        </div>
    )
}

export default JournalEntries
