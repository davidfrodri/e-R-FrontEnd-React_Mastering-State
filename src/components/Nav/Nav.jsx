import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className="menu__nav">
      <ul>
        <li>
          <Link to='/'>Projects</Link>
        </li>
        <li>
          <Link to='/'>About us</Link>
        </li>
        <li>
          <Link to='/community'>Stories</Link>
        </li>
        <li>
          <a href="#footer">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
