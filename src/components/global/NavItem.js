const navItem = (props) => {
    return <li className="nav-item">
        <a className="nav-link collapsed" href={"#"+props.url} data-toggle="collapse" data-target="#collapseTwo"
           aria-expanded="true" aria-controls="collapseTwo">
            <i className={"fas fa-fw " + props.icon}></i>
            <span>{props.name}</span>
        </a>
        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo"
             data-parent="#accordionSidebar">
            <div className="bg-white py-2 collapse-inner rounded">
                <h6 className="collapse-header">Custom Components:</h6>
                {props.children}
            </div>
        </div>
    </li>
}

export default navItem;