import { toggleMenu } from '../../utils'
import logo from '../../assets/[PLACEHOLDER LOGO].png'

const Headline = () => {
  return (
    <header id="projects" className="header">
      <div className="header__points"></div>
      <div className="header__stars"></div>
      <a className="header__project-brand" href="#projects">
        Project
      </a>
      <nav className="header__nav">
        <ul>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#main">About us</a>
          </li>
          <li>
            <a href="#stories">Stories</a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
        <div className="nav-dropdown">
          <a href="#projects">Projects</a>
          <a href="#main">About us</a>
          <a href="#stories">Stories</a>
          <a href="#footer">Contact</a>
        </div>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        <div className="line line__1"></div>
        <div className="line line__2"></div>
        <div className="line line__3"></div>
      </div>
      <div className="header__hero">
        <img className="hero__logo" src={logo} alt="PLACEHOLDER LOGO" />
        <h1>Your Headline Here</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
          eiusmod.
        </h2>
      </div>
    </header>
  )
}

export default Headline
