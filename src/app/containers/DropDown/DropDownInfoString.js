import React, { Component } from 'react'

import InfoString from '../../components/DropDown/InfoString'
import { wasUpdated, showStars, showIssues, showLicense } from '../../additional/additionalFunc'

export default class DropDownInfoString extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <InfoString updatedAt={wasUpdated(this.props.updatedAt)}
        stars={showStars(this.props.stars)}
        issues={showIssues(this.props.issues)}
        license={showLicense(this.props.license)} />
    )
  }
}
