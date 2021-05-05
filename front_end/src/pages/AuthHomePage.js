import React, { useState } from 'react'
import Modal from 'react-modal'
import AuthNavbar from '../components/Header/AuthNavbar'
import Footer from '../components/Footer/Footer'

import AlternatingListAuthHomePage from '../components/AlternatingLists/AlternatingListAuthHomePage'

import Journalling from '../pages/Journalling'
import GuidedJournalling from '../pages/GuidedJournalling'
import AddMoments from './AddMoments'
Modal.setAppElement('#root')

const AuthHomePage = ({invalidateToken, addEntry}) => {
    const [journallingModalIsOpen,setJournallingModalIsOpen]=useState(false)
    const [guidedJournallingModalIsOpen,setGuidedJournallingModalIsOpen]=useState(false)
    const [momentsModalIsOpen,setMomentsModalIsOpen]=useState(false)


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
                />
            </Modal>
            </div>

            {/* Setting up modal for guided journalling */}
            <div className="modal">
            <Modal style={customStyles} isOpen={guidedJournallingModalIsOpen} onRequestClose={closeGuidedJournallingModal}>
                <GuidedJournalling 
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
