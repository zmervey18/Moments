import logo from ''

const unauthNavbar = () => {
    return (
        <nav className="navBar">
            <Link to='/'><img className='logo left' src={logo} alt="Moments Logo"></img></Link>
            <div className="buttonsContainer">
                <Link to='/'>
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Home" 
                        className="right" 
                    /> 
                </Link>
                <Link to='/'>
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Deck" 
                        className="right" 
                    /> 
                </Link> 
                <Link to='/'>   
                    <Button 
                        buttonStyle="btn--white" 
                        text= "Study Now" 
                        className="right"
                        
                    /> 
                </Link>  
            </div>
        </nav>
    )
}

export default unauthNavbar
