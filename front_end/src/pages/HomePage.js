import React, { useState } from 'react'
import Modal from 'react-modal'


import Header from '../components/Header/Header'
import ImageTile from '../components/Image/ImageTile'
import ideas from '../static/ideas.svg'
import my_universe from '../static/my_universe.svg'
import AlternatingList from '../components/AlternatingLists/AlternatingList'

import FeatureList from '../components/FeaturesList/FeatureList'
import Button from '../components/Button/Button'
import Footer from '../components/Footer/Footer'

import SignUp from './SignUp'
Modal.setAppElement('#root')

const HomePage = () => {

const [signupModalIsOpen,setSignupModalIsOpen]=useState(false)

    return (
        <div>
            <Header />
            <ImageTile
            image={ideas}
            title="Reflect with us"
            alt="Man with thought bubbles around him"
            />            
            <AlternatingList />
            <FeatureList />
            <ImageTile 
            image={my_universe}
            title="Document your world"
            alt="Woman pointing at a globe"
            />
            <div className="Center">
                <h3>Ready to start journalling?</h3>
                <Button 
                buttonStyle="btn--red" 
                text= "Get Journalling" 
                event= {() => setSignupModalIsOpen(true)}
                />
            </div>

            {/* Modal setup for registration page. Opens on clicking "Get Journalling" button */}
            <Modal 
                isOpen={signupModalIsOpen} 
                onRequestClose={() => setSignupModalIsOpen(false)}
                style={
                    {
                        overlay:{
                            backgroundColor: 'rgba(0, 0, 0, .7)'
                        },
                        content:{
                            position:'fixed',
                            top:'50%',
                            left:'50%',
                            // bottom:'-50%',
                            // right:'-50%',
                            transform:'translate(-50%, -50%)',
                            padding:'50px',
                            zIndex:1000
                        }

                    }
                }
                >
                <SignUp 
                setSignupModalIsOpen={setSignupModalIsOpen}
                />
            </Modal>

            <Footer /> 

        </div>
    )
}

export default HomePage
