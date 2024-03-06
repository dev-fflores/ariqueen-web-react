import './Header.css'
import logoBBG from './../assets/logo_svg.svg';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import HomePage from './HomePage';
import GamesPage from './GamesPage';
import AboutUsPage from './AboutUsPage';
import LogInPage from './LogInPage';
import SignUpPage from './SignUpPage';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLanguage } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <>
      <Router>
        <header className='header'>
          <div className='header-logo'>
            <img className='logo__img' src={logoBBG} alt="Logo de Blood Bound Games" srcSet=""/>
            <p className='logo__text'>Blood <br/> Bound Games</p>
          </div>
          <nav className='header-nav'>
            <ul className='nav__list'>
              <li className='nav__item'><Link to='/home' className='nav__link'>Home</Link></li>
              <li className='nav__item'><Link to='/games' className='nav__link'>Games</Link></li>
              <li className='nav__item'><Link to='/about-us' className='nav__link'>About Us</Link></li>
              <li className='nav__item'><Link to='#' className='nav__link'>Contact Me</Link></li>
            </ul>
          </nav>

          <div className='header-auth-buttons'>
            {/* <FontAwesomeIcon className='header-auth-buttons__icon' icon={faLanguage} /> */}
            <Link to='/login' className='header-auth-buttons__login auth__button'>Log In</Link>
            <Link to='/signup' className='header-auth-buttons__signup auth__button auth__button--active'>Sign
              Up</Link>
          </div>
        </header>

        <Routes>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/games" element={<GamesPage/>}/>
          <Route path="/about-us" element={<AboutUsPage/>}/>
          <Route path="/login" element={<LogInPage/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
          <Route path="/" element={<HomePage/>}/>
        </Routes>


      </Router>
    </>
  )
}

export default Header