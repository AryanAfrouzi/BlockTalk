import React, { Component } from 'react'
import { withFortmatic } from '../../auth';

import {Redirect} from 'react-router-dom'

class Landing extends Component {
  renderRedirect = () => {
    if (this.props.Fm.loggedIn()) {
      return <Redirect to='/home' />
    }
  }

  render() {
    return (
      <div>
        {this.renderRedirect()}
        landing
      </div>
    )
  }
}

export default withFortmatic(Landing);