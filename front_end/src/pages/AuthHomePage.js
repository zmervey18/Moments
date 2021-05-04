import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import AuthNavbar from '../components/Header/AuthNavbar'
import Footer from '../components/Footer/Footer'

import Button from '../components/Button/Button'
import AlternatingListAuthHomePage from '../components/AlternatingLists/AlternatingListAuthHomePage'

import Journalling from '../pages/Journalling'
import GuidedJournalling from '../pages/GuidedJournalling'
Modal.setAppElement('#root')

const AuthHomePage = ({invalidateToken}) => {
    const [journallingModalIsOpen,setJournallingModalIsOpen]=useState(false)
    const [guidedJournallingModalIsOpen,setGuidedJournallingModalIsOpen]=useState(false)


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
            <AuthNavbar/>
            <Button
            event={invalidateToken}
            text="Invalidate token"
            />

            <AlternatingListAuthHomePage 
            journallingModal={openJournallingModal}
            guidedJournallingModal={openGuidedJournallingModal}
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

            <Footer /> 
        </div>
    )
}

export default AuthHomePage
