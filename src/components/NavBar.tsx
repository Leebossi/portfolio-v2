import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={"/work"}>work</Link>
                </li>
                <li>
                    <Link to={"/bike"}>bike</Link>
                </li>
                <li>
                    <Link to={"/coffee"}>coffee</Link>
                </li>
            </ul>
        </nav>
    )
}