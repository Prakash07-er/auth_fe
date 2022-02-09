import {Link} from "react-router-dom"

export default function Navbar() {
    return(
          <nav>
            <div class="nav-wrapper">
            <a href="#" class="brand-logo">Logo</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/signin">Signin</Link></li>
            </ul>
            </div>
         </nav>
    )
}