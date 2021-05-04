import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Register = ({SignupToLoginModalTransition, closeModal}) => {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()

    const handleSubmit = () => {
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            console.log(email, password, confirmPassword)
            // make API call
        }
    }
    return (
        
        <div>
            <Link to='/' className='text-link'>  
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
            </Link>
            <div>
                <h3>Welcome to Moments</h3>
            </div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input type="email" name="Email" placeholder="journaller@moments.com"
                    onChange={e => setEmail(e.target.value)}
                    ></input>
                </div>

                 <div>
                    <label>Password: </label>
                    <input type="text" name="Password" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="text"
                        name="Confirm Password"
                        placeholder="Confirm Password"
                        onChange={e => setConfirmPassword(e.target.value)}
                    ></input>
                </div>
                <br/>
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "Register" 
                value="Register"
                />
                </div>
            </form>
            <div>
                <h3>Already a member?</h3>
                
                <Link to='/login' style={{textDecoration:"none"}}>  
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                text= "Login here!" 
                event= {SignupToLoginModalTransition}
                />
                </div>
                </Link>
            </div>
        </div>
    )
    
}

export default Register


                    // <div>
                    //     <label>Reminder Frequency </label> 
                    // </div>
                    // <div>
                    //     <input type="checkbox"/> <span>None</span> 
                    //     <input type="checkbox"/> <span>Daily</span>
                    //     <input type="checkbox"/> <span>Weekly</span>
                    // </div> 
           