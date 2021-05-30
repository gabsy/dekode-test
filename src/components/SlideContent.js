const SlideContent = (props) => {
    return (
        <div className="slide-content">
            <img src={props.slideImg} alt={props.slideImgAlt}/>
            <h2>
                <a href={props.slideLink}>
                    {props.slideTitle}
                </a>
            </h2>
            <div className="slide-date text-small">
                {props.slideDate}
            </div>
            <p>
            {props.slideText}
            </p>
        </div>
    )
}

export default SlideContent
