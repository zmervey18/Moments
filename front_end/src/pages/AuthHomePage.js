import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import AuthNavbar from '../components/Header/AuthNavbar'
import Footer from '../components/Footer/Footer'

import AlternatingListAuthHomePage from '../components/AlternatingLists/AlternatingListAuthHomePage'

import Journalling from '../pages/Journalling'
import GuidedJournalling from '../pages/GuidedJournalling'
import AddMoments from './AddMoments'
Modal.setAppElement('#root')

const AuthHomePage = ({invalidateToken, addEntry, onTitleChange, onBodyChange, token}) => {
    const [journallingModalIsOpen,setJournallingModalIsOpen]=useState(false)
    const [guidedJournallingModalIsOpen,setGuidedJournallingModalIsOpen]=useState(false)
    const [momentsModalIsOpen,setMomentsModalIsOpen]=useState(false)
    const [prompts, setPrompts] = useState([])

    const openJournallingModal = () => {
        setJournallingModalIsOpen(true)
    }
    const closeJournallingModal = () => {
        setJournallingModalIsOpen(false)
    }

    const openGuidedJournallingModal = () => {
        setGuidedJournallingModalIsOpen(true)
    }
    const closeGuidedJournallingModal = () => {
        setGuidedJournallingModalIsOpen(false)
    }

    const openMomentsModal = () => {
        setMomentsModalIsOpen(true)
    }
    const closeMomentsModal = () => {
        setMomentsModalIsOpen(false)
    }
      // fetch all entries
    useEffect(() => {
        const fetchPrompts = async () => {
        const res = await fetch('/prompt/', {
            method: 'GET',
            headers: {
            'Content-type': 'application/json',
            'Authorization': `token ${token}`
            },
        })
        const data = await res.json()
        {(data.length <= 1) ? 
        setPrompts(data) : setPrompts([...data])}
        return data
        }
        if (token){fetchPrompts()}
    }, [token])
    const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
    };

    return (
        <div>
            <AuthNavbar
            invalidateToken = {invalidateToken}
            />

            <AlternatingListAuthHomePage 
            journallingModal={openJournallingModal}
            guidedJournallingModal={openGuidedJournallingModal}
            momentsModal={openMomentsModal}
            />

             {/* Setting up modal for journalling */}
            <div className="modal">
            <Modal style={customStyles} isOpen={journallingModalIsOpen} onRequestClose={closeJournallingModal}>
                <Journalling 
                modalOpen = {journallingModalIsOpen}
                closeModal = {closeJournallingModal}
                onTitleChange = {onTitleChange}
                onBodyChange = {onBodyChange}
                addEntry = {addEntry}
                />
            </Modal>
            </div>

            {/* Setting up modal for guided journalling */}
            <div className="modal">
            <Modal style={customStyles} isOpen={guidedJournallingModalIsOpen} onRequestClose={closeGuidedJournallingModal}>
                <GuidedJournalling 
                prompts = {prompts}
                modalOpen = {guidedJournallingModalIsOpen}
                closeModal = {closeGuidedJournallingModal}
                />
            </Modal>
            </div>

            {/* Setting up modal for adding moments */}
            <div className="modal">
            <Modal style={customStyles} isOpen={momentsModalIsOpen} onRequestClose={closeMomentsModal}>
                <AddMoments
                modalOpen = {momentsModalIsOpen}
                closeModal = {closeMomentsModal}
                />
            </Modal>
            </div>

            <Footer /> 
        </div>
    )
}

export default AuthHomePage
