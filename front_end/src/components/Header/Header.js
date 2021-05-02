import UnauthNavbar from './UnauthNavbar'
import AuthNavbar from './AuthNavbar'
const Header = ({openRegistrationModal}) => {
    return (
        <div>
            {/* (userIsAuthorised ? <AuthNavbar /> : <UnauthNavbar />) */}
            <UnauthNavbar 
            openRegistrationModal={openRegistrationModal}
            />
        </div>
    )
}

export default Header

