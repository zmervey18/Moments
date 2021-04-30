import React from 'react'


const Register = () => {

    return (
        <div>
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

                <input type="submit" value="Register"></input>
            </form>
        </div>
    )
    
}

export default Register