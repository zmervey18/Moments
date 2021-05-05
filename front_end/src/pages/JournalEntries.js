import React from 'react'
import Footer from '../components/Footer/Footer'
import AuthNavbar from '../components/Header/AuthNavbar'
import JournalEntryList from '../components/JournalEntries/JournalEntryList'

const JournalEntries = () => {
    return (
        <div>
            <AuthNavbar/>

            <JournalEntryList/>
            
            <Footer/>
            
        </div>
    )
}

export default JournalEntries
