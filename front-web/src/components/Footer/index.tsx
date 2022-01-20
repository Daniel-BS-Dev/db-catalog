import {ReactComponent as Instagram} from '../../assets/image/instagram.svg';
import {ReactComponent as GitHub} from '../../assets/image/github.svg';
import {ReactComponent as Linkedin} from '../../assets/image/linkedin.svg';
import './styles.css';

const Footer = () => (
<footer className='home-footer bg-primary'>
    <div className="home-footer-container">
        <div className="home-footer-title">
            <address>Daniel Benedito da Silva</address>
        </div>
        <div className="home-footer-images">
            <a href='https://www.linkedin.com/in/daniel-benedito-b99546213' target="_blank" rel="noreferrer" ><Linkedin className='imgFooter'/></a>
            <a href='https://www.instagram.com/danielbenedito3' target="_blank" rel="noreferrer" ><Instagram className='imgFooter'/></a>
            <a href='https://github.com/Daniel-BS-Dev' target="_blank" rel="noreferrer" ><GitHub className='imgFooter'  /></a>
        </div>
    </div>
</footer>
);

export default Footer;