import {Component} from 'react'
import './index.css'

class Login extends Component {
  state = {loginUserName: '', loginPassword: '', isValid: true}

  submitLoginDetails = event => {
    const {loginUserName, loginPassword} = this.state
    event.preventDefault()
    const userData = localStorage.getItem('userDetails')
    const parsedData = JSON.parse(userData)
    const {userName, password} = parsedData
    if (userName === loginUserName && password === loginPassword) {
      const {history} = this.props
      history.replace('/movies')
      console.log(true)
      this.setState(prevState => ({isValid: !prevState.isValid}))
    } else {
      this.setState(prevState => ({isValid: !prevState.isValid}))
      console.log(false)
    }
    this.setState({loginUserName: '', loginPassword: ''})
  }

  saveUserName = event => {
    this.setState({loginUserName: event.target.value})
  }

  saveUserPassword = event => {
    this.setState({loginPassword: event.target.value})
  }

  render() {
    const {loginUserName, loginPassword, isValid} = this.state

    const loginForm = (
      <div className="login-page-container">
        <form
          className="login-form-container"
          onSubmit={this.submitLoginDetails}
        >
          <h1 className="login-head">Login</h1>
          <div className="login-form-input-container">
            <label className="login-label" htmlFor="user-name">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your name here"
              className="login-input"
              value={loginUserName}
              id="user-name"
              onChange={this.saveUserName}
              required
            />
            <label className="login-label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password here"
              className="login-input"
              value={loginPassword}
              id="password"
              onChange={this.saveUserPassword}
              required
            />
            {isValid ? (
              ''
            ) : (
              <p className="warning-message">Invalid Credentials</p>
            )}
            <button type="submit" className="login-btn">
              Login
            </button>
          </div>
        </form>
      </div>
    )
    return loginForm
  }
}

export default Login
