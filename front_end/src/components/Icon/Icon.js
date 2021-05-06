import del from './../../static/Icon_Delete.svg'

const Icon = ({icon, event}) => {
    return (
        <button
        onClick={event}
        className={`icon`}
        >
        <img className='icon_image' src={del} alt="delete"/>
        </button>
    )
}

export default Icon
