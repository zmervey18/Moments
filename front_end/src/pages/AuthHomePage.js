import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import AuthNavbar from '../components/Header/AuthNavbar'
import Footer from '../components/Footer/Footer'

import Button from '../components/Button/Button'
import AlternatingListAuthHomePage from '../components/AlternatingLists/AlternatingListAuthHomePage'

import Journalling from '../pages/Journalling'
Modal.setAppElement('#root')

const AuthHomePage = () => {
    const [journallingModalIsOpen,setJournallingModalIsOpen]=useState(false)


    const openJournallingModal = () => {
        setJournallingModalIsOpen(true)
    }
    const closeJournallingModal = () => {
        setJournallingModalIsOpen(false)
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

            <AlternatingListAuthHomePage 
            journallingModal={openJournallingModal}
            />

             {/* Setting up modal for signing up */}
            <div className="modal">
            <Modal style={customStyles} isOpen={journallingModalIsOpen} onRequestClose={closeJournallingModal}>
                <Journalling 
                modalOpen = {journallingModalIsOpen}
                closeModal = {closeJournallingModal}
                />
            </Modal>
            </div>

            <Footer /> 
        </div>
    )
}

export default AuthHomePage
