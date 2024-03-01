import './Header.css'
import logoBBG from './../assets/logo_svg.svg';

const Header = () => {
  return (
    <>
      <header className='header'>
        <img className='logo' src={logoBBG} alt="" srcset="" />
      </header>
    </>
  )
}

export default Header