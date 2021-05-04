import Button from '../components/Button/Button'
import { Link } from 'react-router-dom'
import { RiCloseCircleFill } from 'react-icons/ri'
import PropTypes from 'prop-types'
import { useState } from 'react'

// import SignUp from './SignUp'
// Modal.setAppElement('#root')

const Login = ({closeModal, LoginToSignupModalTransition, setToken}) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    async function loginUser(credentials) {
        return fetch('/api/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(credentials)
        })
          .then(data => data.json())
    }
    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token['token']);
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
                    <input type="text" name="Email" placeholder="journaller@moments.com"
                    onChange={e => setUsername(e.target.value)}
                    ></input>
                </div>

                 <div>
                    <label>Password: </label>
                    <input type="text" name="Password" placeholder="Password"
                    onChange={e => setPassword(e.target.value)}
                    ></input>
                </div>
                <br/>
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                text= "Login" 
                value="Login"
                type="submit"
                />
                </div>
            </form>

            <div>
                <h3>Not signed up yet?</h3>
                <Link to='/sign-up' style={{textDecoration:"none"}}> 
                <div className="formButton">
                <Button 
                buttonStyle="btn--red" 
                text= "Sign up now!" 
                event= {LoginToSignupModalTransition}
                />
                </div>
                </Link>
            </div>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }
export default Login