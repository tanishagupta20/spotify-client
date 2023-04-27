import React from 'react'
import './Login.css'
import loginLogo from './assets/login-logo.jpg'

function Login() {
  return (
    <div className='login'>

      <div className='logo-name'>
        <img className="login-logo" src={loginLogo} alt="Spotify-logo" />
        <h1 className='spotify-text'>Spotify</h1>
      </div>

      <hr></hr>

      <div className='login-form'>

        <button className='cont-email btn-props border-hover'>CONTINUE WITH EMAIL</button>

        <hr></hr><span className='or-span'>OR</span><hr></hr>

        <div className='left-label-div'><label for="email-usn" className='input-label'>Email address or username</label>
          <input type="text" id="email-usn" className='ip-box border-hover' name="email/usn" placeholder='Email address or username' />

          <label for="pwd" className='input-label'>Password</label>
          <input type="password" id="pwd" className='ip-box border-hover' name="pwd" placeholder='Password' />

          <a href="" className='forgot-pwd'>Forgot your password?</a>

          <div className='rem-box'>
            <div>
              <input type="checkbox" className='ip-rem-check' /><span className='remember-me'>Remember me</span>
            </div>
            <button className='login-btn'>LOG IN</button>
          </div>

          <hr className='hz-line'></hr>

          <h3 className='signup-heading'>Don't have an account?</h3>

          <button className='signup-btn btn-props border-hover'>SIGN UP FOR SPOTIFY</button>

        </div>
      </div>


    </div>
  )
}

export default Login