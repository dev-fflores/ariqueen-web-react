import './AuthForm.css'
function SignUpPage() {
  return (
    <>
      Sign Up Page
      <div className='auth-form-container'>
        <p className='auth-form__title'>Sign Up</p>
        <form action="">
          <input type="text" placeholder="Username"/>
          <input type="email" placeholder="Email"/>
          <input type="password" placeholder="Password"/>
          <input type="password" placeholder="Confirm Password"/>
          <button>Sign Up</button>
        </form>
      </div>
    </>
  );
}

export default SignUpPage;