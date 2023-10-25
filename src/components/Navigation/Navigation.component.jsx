import './navigation.styles.scss'

import logo from '../../assets/logo.svg';

const Navigation = () => {
    return (
        <nav className='nav-container flex'>
            <div className='heading-left'>
                <img className='logo-icon' src={logo} alt='Logo'></img>
            </div>
            <ul className='nav-links flex underline-indicators' style={{'--gap': '3rem'}}>
                <li className='numbered-title'><span>01</span>Destinations</li>
                <li className='numbered-title'><span>02</span>Crew</li>
                <li className='numbered-title'><span>03</span>Technology</li>
            </ul>
        </nav>
        
    )
}

export default Navigation;