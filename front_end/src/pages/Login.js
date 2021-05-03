import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'

// import SignUp from './SignUp'
// Modal.setAppElement('#root')

const Login = ({closeModal, LoginToSignupModalTransition}) => {

    // const [signupModalIsOpen,setSignupModalIsOpen]=useState(false)

    return (
        <div>
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
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
                <br/>
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "Login" 
                value="Login"
                />
                </div>
            </form>

            <div>
                <h3>Not signed up yet?</h3>
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                text= "Sign up now!" 
                event= {LoginToSignupModalTransition}
                />
                </div>
            </div>
        </div>
    )
}

export default Login