import { Link, useMatch, useResolvedPath } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        <img src="src\Components\a.png"  className="nav-logo" alt="logo" />
      </Link>
      <ul>
        <CustomLink to="./Home">Home</CustomLink> 
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="./catagories">Catagories</CustomLink>
        <CustomLink className="write-btn" to="/Write">Write</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
