import './index.css'
import {Component} from 'react'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  onFirstNameButton = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  onLastNameButton = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  getFirstName = () => {
    const {firstName} = this.state
    return firstName ? 'Joe' : null
  }

  getLastName = () => {
    const {lastName} = this.state
    return lastName ? 'Jonas' : null
  }

  getFirstNameContainer = () => {
    const {firstName} = this.state
    return firstName ? 'firstNameContainer' : null
  }

  getLastNameContainer = () => {
    const {lastName} = this.state
    return lastName ? 'lastNameContainer' : null
  }

  render() {
    const firstNameContainer = this.getFirstNameContainer()
    const firstName = this.getFirstName()
    const lastNameContainer = this.getLastNameContainer()
    const lastName = this.getLastName()
    return (
      <div className="ShowHideContainer">
        <h1 className="title">Show/Hide</h1>
        <div className="ShowHideButtonsContainer">
          <div className="ButtonContainer">
            <button className="button" onClick={this.onFirstNameButton}>
              Show/Hide Firstname
            </button>
            <div className={firstNameContainer}>
              <p>{firstName}</p>
            </div>
          </div>
          <div className="ButtonContainer">
            <button className="button" onClick={this.onLastNameButton}>
              Show/Hide Lastname
            </button>
            <div className={lastNameContainer}>
              <p>{lastName}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
