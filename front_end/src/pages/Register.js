import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'

const Register = ({closeModal}) => {

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
                    <label>Username </label>
                    <input type="text" name="Username" placeholder="username"></input>
                </div>

                <div>
                    <label>Email </label>
                    <input type="email" name="Email" placeholder="username"></input>
                </div>

                <div>
                    <label>Password </label>
                    <input type="text" name="Password" placeholder="Password"></input>
                </div>

                <div>
                    <label>Confirm Password </label>
                    <input
                        type="text"
                        name="Confirm Password"
                        placeholder="Password"
                    ></input>
                </div>
                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "Register" 
                value="Register"
                />
                
            </form>
        </div>
    )
    
}

export default Register