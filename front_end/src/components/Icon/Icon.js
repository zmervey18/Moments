import del from './../../static/Icon_Delete.svg'

const Icon = ({icon, event}) => {
    const ElementStyle = {
        // width: '50%',
        margin: '1em',
        display: 'flex',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        margin: 'auto'
    }
    return (
        <button
        onClick={event}
        className='icon_image'
        style={ElementStyle}
        >
        <img className='icon_image' src={del} alt="delete"/>
        </button>
    )
}

export default Icon
