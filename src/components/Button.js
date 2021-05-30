const Button = (props) => {
    return (
        <a href={props.btnLink} className="btn">
            {props.btnLabel}
        </a>
    )
}

export default Button
