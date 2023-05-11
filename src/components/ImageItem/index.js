import './index.css'

function ImageItem(props) {
    console.log(props)
    const { image, checkingFn } = props
    const { imageUrl, thumbnailUrl } = image
    const imageOnClickFunction = () => {
        checkingFn(imageUrl)
    }
    return (
        <li>
            <button type="submit" className="button" onClick={imageOnClickFunction}>
                <img src={thumbnailUrl} alt="thumbnail" className="image-item-style" />
            </button>
        </li>
    )
}

export default ImageItem
