
import { urlFor } from "../../sanity"
import imageUrlBuilder from '@sanity/image-url';



const Image = ({ identifier, image }) => {
    
  return (
    <div className={identifier === "images" ? "images" : "image"}>
      <img src={urlFor(image).auto("format")} />
      {/* {imageUrl && <img className={styles.images} src={imageUrl} />} */}
    </div>
  )
}

export default Image