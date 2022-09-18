import { Link } from "react-router-dom";
import avatar from "../img/smile.jpg";

const Navbar = ({ user }) => {
    return (
        <div className="navbar">
            <span className="logo">
                <Link className="link" to="/">React App</Link>
            </span>

            {user ? (
                <ul className="list">
                    <li className="listItem">
                        <img src={avatar} alt="" className="avatar" />
                    </li>
                    <li className="listItem">Andrii Dan</li>
                    <li className="listItem">Logout</li>
                </ul>
            ) : (<Link className="link" to="/login">Login</Link>)}
        </div>
    )
}

export default Navbar
