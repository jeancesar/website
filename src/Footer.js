import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="card-footer is-justify-content-center p-3">
            <div className="buttons are-large">
                <a href="https://instagram.com/jeancesar.dev" className="button is-link is-inverted has-text-primary"
                    target="_blank" title="Ir para o Instagram" rel="noreferrer">
                    <span className="icon">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </span>
                </a>
                <a href="https://twitter.com/jeancesardev" className="button is-link is-inverted has-text-primary"
                    target="_blank" title="Ir para o X" rel="noreferrer">
                    <span className="icon">
                        <FontAwesomeIcon icon={faSquareXTwitter} />
                    </span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;