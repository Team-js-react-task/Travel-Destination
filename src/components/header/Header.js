
import { Link } from "react-router-dom";


function Header(props) {
    return (

        <>

            <h1>Welcome to our site</h1>
            <nav>
                <Link to="/"> Home</Link>
            </nav>

        </>
    )
}

export default Header;