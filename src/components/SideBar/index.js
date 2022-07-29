import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoN from '../../assets/imgs/nlogo.png'
import LogoSubtitle from '../../assets/imgs/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faHome,
  faUser,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const SideBar = () => (
  <div className="nav">
    <Link className="logo" to="/">
      <img src={LogoN} alt="nick masters logo" />
      <img className="logoSubtitle" src={LogoSubtitle} alt="nick masters" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#fffdd0" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#fffdd0" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faDiagramProject} color="#fffdd0" />
      </NavLink>

      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#fffdd0" />
      </NavLink>
    </nav>

    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/nicholas-masters2002/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#fffdd0" />
        </a>
      </li>

      <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/nixkhm">
          <FontAwesomeIcon icon={faGithub} color="#fffdd0" />
        </a>
      </li>
    </ul>
  </div>
)
export default SideBar
