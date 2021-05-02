import logo from './../../static/logo_with_text.svg'
import { Link } from 'react-router-dom'
import Button from './../Button/Button'
import './navbar.css'
const unauthNavbar = ({openRegistrationModal}) => {
    return (
        <nav className="navBar">
            <Link to='/'><img className='logo left' src={logo} alt="Moments Logo"></img></Link>
            <div className="buttonsContainer">
                <Link to='/sign_up'>
                    <Button 
                        buttonStyle="btn--blue" 
                        text= "Sign Up" 
                        event= {openRegistrationModal}
                    /> 
                </Link> 
                <Link to='/login'>   
                    <Button 
                        buttonStyle="btn--blue" 
                        text= "Login" 
                    /> 
                </Link>  
            </div>
        </nav>
    )
}

export default unauthNavbar
