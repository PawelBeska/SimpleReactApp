const navLink = (props) => {
    return(<a className="collapse-item" href={props.href}>{props.text}</a>);
}

export default navLink;