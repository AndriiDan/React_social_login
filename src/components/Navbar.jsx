import avatar from "../img/smile.jpg";

const Navbar = () => {
    return (
        <div className="navbar">
            <span className="logo">React App</span>
            <ul className="list">
                <li className="listItem">
                    <img src={avatar} alt="" className="avatar" />
                </li>
                <li className="listItem">Andrii Dan</li>
                <li className="listItem">Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
