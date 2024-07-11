import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function Author() {
    return (
        <p className="has-text-white has-text-centered is-size-7">Made with <FontAwesomeIcon className='has-text-danger' icon={faHeart} /> by
            <strong className="has-text-white">Jean Cesar.DEV</strong>
        </p>
    );
}

export default Author;