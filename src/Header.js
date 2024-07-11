import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faLanguage } from '@fortawesome/free-solid-svg-icons';
import Logo from './images/profile.jpg'
function Header() {
    return (
        <header className="card-header is-shadowless">
            <div className="is-flex is-flex-direction-column is-align-items-center mx-auto pt-4">
                <figure className="image is-128x128">
                    <img className="is-rounded" src={Logo} alt="Minha foto de rosto em cartoon" />
                </figure>
                <h1 className="title is-2 comfortaa-bold mt-3">Jean Cesar.DEV</h1>
                <h2 className="subtitle comfortaa-medium">Software Developer & Tech Lead</h2>
            </div>
            <button className="card-header-icon" id="btn-dark-mode" aria-label="Dark Mode">
                <span className="icon">
                    <FontAwesomeIcon icon={faLightbulb} />
                </span>
            </button>
            <a href="en/" className="card-header-icon" id="btn-language" aria-label="Dark Mode" title="Ver em inglês">
                <span className="icon">
                    <FontAwesomeIcon icon={faLanguage} />
                </span>
            </a>
        </header>
    );
}

export default Header;