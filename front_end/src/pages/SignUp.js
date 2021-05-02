import Button from '../components/Button/Button'
import { RiCloseCircleFill } from 'react-icons/ri'

const SignUp = ({setSignupModalIsOpen}) => {

    return (
        
        <div>
            <div>
                <RiCloseCircleFill onClick={() => setSignupModalIsOpen(false)}/>
            </div>
            <div>
                <h1>Welcome to Moments</h1>
            </div>
            
            <form>
                <div>
                    <label>Email </label>
                    <input type="email" name="Email" placeholder="email"></input>
                </div>

                <div>
                    <label>Password </label>
                    <input type="text" name="Password" placeholder="password"></input>
                </div>

                <div>
                    <label>Confirm Password </label>
                    <input
                        type="text"
                        name="Confirm Password"
                        placeholder="password"
                    ></input>
                </div>

                <div>
                    <div>
                        <label>Reminder Frequency </label> 
                    </div>
                    <div>
                        <input type="checkbox"/> <span>None</span> 
                        <input type="checkbox"/> <span>Daily</span>
                        <input type="checkbox"/> <span>Weekly</span>
                    </div> 
                </div>

                <Button 
                buttonStyle="btn--red" 
                type="submit"
                text= "SignUp" 
                value="SignUp"
                />
                
            </form>
            
        </div>
    )
    
}

export default SignUp