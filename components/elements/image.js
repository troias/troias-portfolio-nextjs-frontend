import { getStrapiMedia } from "../../utils/media"
import Image from "next/image"
// import PropTypes from "prop-types"
// import { mediaPropTypes } from "utils/types"

const NextImage = ({ media, collection, ...props }) => {

  
  const { url, alternativeText, width, height } = media.data.attributes


  console.log("media", media)
  console.log("media widh", width);

  const loader = ({ src, width }) => {
    return getStrapiMedia(src)
  }

  // The image has a fixed width and height
  if (props.width && props.height) {
    return (
      <Image loader={loader} src={url} alt={alternativeText || ""} {...props} />
    )
  }

  // The image is responsive
  return (
    <Image
     
      loader={loader}
      layout="responsive"
      width={width}
      height={height}
      objectFit="contain"
      src={url}
      alt={alternativeText || ""}
      {...props}
    />
  )
}

// Image.propTypes = {
//   media: mediaPropTypes,
//   className: PropTypes.string,
// }

export default NextImage
