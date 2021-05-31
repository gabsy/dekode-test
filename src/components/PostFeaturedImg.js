const PostFeaturedImg = (props) => {
    return (
        <div className="post-featured-image">
            <figure>
                <img src={props.imgSrc} alt={props.title}/>
                <figcaption className="text-small">
                    <div className="inner-block-small">
                    {props.caption}
                    </div>
                </figcaption>
            </figure>
            <blockquote>
            {props.quote}
            </blockquote>
        </div>
    )
}

export default PostFeaturedImg
