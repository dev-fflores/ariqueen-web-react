import './AuthForm.css'
import logoGoogle from './../assets/google_logo_svg.svg'

const LogInPage = () => {
  return (
    <>
      Log In Page
      <div className='auth-form-container'>
        <p className='auth-form__title'>Log In</p>
        <form className='auth-form' action="">
          <input className='auth-form__input' type="text" placeholder="Username"/>
          <input className='auth-form__input' type="password" placeholder="Password"/>
          <div className='separator'>
            <hr className="line"/>
            <span className="text">Or sign up with</span>
            <hr className="line"/>
          </div>
          <button className='auth-form__sn auth-form__google'>
            <img src={logoGoogle} alt="Google Logo"/>
          </button>
          <button>Log In</button>
        </form>
      </div>
    </>
  );
};

export default LogInPage;

