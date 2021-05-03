import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const Register = ({SignupToLoginModalTransition, closeModal}) => {

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
            <form>
                <div>
                    <label>Email: </label>
                    <input type="email" name="Email" placeholder="journaller@moments.com"></input>
                </div>

                <div>
                    <label>Password: </label>
                    <input type="text" name="Password" placeholder="Password"></input>
                </div>

                <div>
                    <label>Confirm Password: </label>
                    <input
                        type="text"
                        name="Confirm Password"
                        placeholder="Password"
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