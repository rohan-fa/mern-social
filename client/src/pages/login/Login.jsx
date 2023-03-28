import './login.css'

function Login() {
  return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">SnowSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on SnowSocial.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder='Email' className='loginInput' />
                    <input placeholder='Password' className='loginInput'/>
                    <button className='loginButton'>Log In</button>
                    <span className="loginForgot">forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Login
