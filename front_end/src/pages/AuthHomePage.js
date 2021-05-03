import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

import Header from '../components/Header/Header'
import AuthNavbar from '../components/Header/AuthNavbar'
import Footer from '../components/Footer/Footer'

import Button from '../components/Button/Button'
import AlternatingListAuthHomePage from '../components/AlternatingLists/AlternatingListAuthHomePage'

const AuthHomePage = () => {
    return (
        <div>
            <AuthNavbar/>
            <AlternatingListAuthHomePage />
            <Footer /> 
        </div>
    )
}

export default AuthHomePage
