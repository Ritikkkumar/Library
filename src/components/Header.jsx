import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return(
        <>
        <div className="header">
            <ul>
                <Link to="/">
                <li>Home</li>
                </Link>
                <Link to="/browsebooks">
                <li>Browse Books</li>
                </Link>
                <Link to="/addbooks">
                <li>Add Books</li>
                </Link>
            </ul>
        </div>
        </>
    )
}

export default Header;