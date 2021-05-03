import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'

// import SignUp from './SignUp'
// Modal.setAppElement('#root')

const Login = ({closeModal}) => {

    // const [signupModalIsOpen,setSignupModalIsOpen]=useState(false)

    return (
        <div>
            <div className="closeModalIcon">
                <RiCloseCircleFill onClick={closeModal}/>
            </div>
            <div>
                <h1>Welcome to Moments</h1>
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

            {/* <div>
                <h4>Not signed up yet?</h4>
                <Button 
                buttonStyle="btn--red" 
                text= "Get Journalling" 
                event= {() => setSignupModalIsOpen(true)}
                />
                <Modal isOpen={signupModalIsOpen} onRequestClose={() => setSignupModalIsOpen(false)}>
                    <SignUp 
                    setSignupModalIsOpen={setSignupModalIsOpen}
                    />
                </Modal>
            </div> */}
        </div>
    )
}

export default Login