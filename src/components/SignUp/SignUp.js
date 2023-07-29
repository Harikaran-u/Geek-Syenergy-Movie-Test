import {Link} from 'react-router-dom'
import {Component} from 'react'
import './index.css'

const professionList = [
  {id: 1, profession: 'Doctor'},
  {id: 2, profession: 'Dentist'},
  {id: 3, profession: 'Engineer'},
  {id: 4, profession: 'Teacher'},
  {id: 5, profession: 'Lawyer'},
  {id: 6, profession: 'Pharmacist'},
  {id: 7, profession: 'Architect'},
  {id: 8, profession: 'Journalist'},
  {id: 9, profession: 'Mechanic'},
  {id: 10, profession: 'Artist'},
]

class SignUp extends Component {
  state = {
    name: '',
    password: '',
    email: '',
    phoneNumber: '',
    userProfession: professionList[0].profession,
    isValid: false,
  }

  componentDidMount() {
    const item = localStorage.getItem('userDetails')
    if (item) {
      this.setState(prevState => ({isValid: !prevState.isValid}))
    }
  }

  updateUserName = event => {
    this.setState({name: event.target.value})
  }

  updateUserPassword = event => {
    this.setState({password: event.target.value})
  }

  updateUserEmail = event => {
    this.setState({email: event.target.value})
  }

  updatePhoneNumber = event => {
    const {phoneNumber} = this.state
    if (phoneNumber.length < 10) {
      this.setState({phoneNumber: event.target.value})
    } else if (event.nativeEvent.inputType === 'deleteContentBackward') {
      this.setState({phoneNumber: event.target.value})
    }
  }

  submitDetails = event => {
    event.preventDefault()
    const {name, password, phoneNumber, email, userProfession} = this.state
    const userDetails = {
      userName: name,
      password,
      phoneNumber,
      email,
      userProfession,
    }
    const userDetailsJson = JSON.stringify(userDetails)
    localStorage.setItem('userDetails', userDetailsJson)
    this.setState(prevState => ({
      isValid: !prevState.isValid,
    }))
    console.log(userDetails)
  }

  changeProfession = event => {
    this.setState({userProfession: event.target.value})
  }

  render() {
    const {
      name,
      password,
      email,
      phoneNumber,
      userProfession,
      isValid,
    } = this.state

    const formContainer = (
      <form className="sign-up-form" onSubmit={this.submitDetails}>
        <h1 className="form-head">Signup</h1>
        <div className="form-input-container">
          <label className="label-text" htmlFor="userName">
            User Name
          </label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your name here"
            value={name}
            className="user-input"
            onChange={this.updateUserName}
            required
          />
          <label className="label-text" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password here"
            value={password}
            className="user-input"
            onChange={this.updateUserPassword}
            required
          />
          <label className="label-text" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email here"
            value={email}
            className="user-input"
            onChange={this.updateUserEmail}
            required
          />
          <label className="label-text" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            type="number"
            id="phoneNumber"
            placeholder="Enter your phone number here"
            value={phoneNumber}
            className="user-input"
            onChange={this.updatePhoneNumber}
            required
          />
          <label className="label-text" htmlFor="profession">
            Profession
          </label>

          <select
            id="profession"
            className="user-input"
            defaultValue={userProfession}
            onChange={this.changeProfession}
            required
          >
            {professionList.map(eachProfession => (
              <option value={eachProfession.profession} key={eachProfession.id}>
                {eachProfession.profession}
              </option>
            ))}
          </select>

          <button type="submit" className="sign-up-btn">
            Signup Now
          </button>
        </div>
      </form>
    )

    const successMessage = (
      <div className="success-container">
        <img alt="success-img" src="success.png" className="success-img" />
        <p className="login-message">Kindly please Login...</p>
        <Link to="/login" className="route-link">
          <button type="submit" className="login-btn">
            Login Now
          </button>
        </Link>
      </div>
    )
    const signUp = (
      <div className="main-container">
        {isValid ? successMessage : formContainer}
      </div>
    )
    return signUp
  }
}

export default SignUp
