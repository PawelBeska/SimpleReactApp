import NavItem from './NavItem'
import NavLink from './NavLink'
const sidebarComponent = (props) => {

    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#index.html">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SimpleReactApp</div>
            </a>

            <hr className="sidebar-divider my-0"/>
            <NavItem url="users" name="Użytkownicy">
                <a className="nav-link" href="#">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </NavItem>

            <hr className="sidebar-divider"/>

            <div className="sidebar-heading">
                Interface
            </div>

            <NavItem url="users" name="Użytkownicy">
                <NavLink text={'Dodaj użytkownika'} url={'users/create'} />
                <NavLink text={'Lista użytkowników'} url={'users'}/>
            </NavItem>

        </ul>
    );
}

export default sidebarComponent;