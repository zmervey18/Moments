import './ImageTile.css'

const ImageTile = ({image, title, alt}) => {
    return (
        <div className='center'>
            <img 
            className='imageTile'
            src={image} 
            alt={alt}>
            </img>
            <h4>{title}</h4>
        </div>
    )
}

export default ImageTile
