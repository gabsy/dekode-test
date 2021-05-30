const PostFeaturedImg = (props) => {
    return (
        <div className="post-featured-image">
            <figure>
                <img src={props.imgSrc} alt={props.title}/>
                <figcaption className="text-small">
                    <div className="inner-block-small">
                    {props.caption}
                    {/* In optics, violet is a spectral color: It refers to the color of any different single wavelength of light on the short wavelength end of the visible spectrum, between approximately 380 and 450 nanometers. */}
                    </div>
                </figcaption>
            </figure>
            <blockquote>
            {props.quote}
            {/* “The process of making the dye was long, difficult and expensive” */}
            </blockquote>
        </div>
    )
}

export default PostFeaturedImg
