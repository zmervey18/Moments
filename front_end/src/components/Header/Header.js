import UnauthNavbar from './UnauthNavbar'
import AuthNavbar from './AuthNavbar'
const Header = () => {
    return (
        <div>
            {/* (userIsAuthorised ? <AuthNavbar /> : <UnauthNavbar />) */}
            <UnauthNavbar />
        </div>
    )
}

export default Header

