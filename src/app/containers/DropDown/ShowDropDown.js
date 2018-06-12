import React, { Component } from 'react'
import { connect } from 'react-redux'

import { dropdownHide } from '../../actions/'
import DropDown from '../../components/DropDown/DropDown'

const mapStateToProps = state => {
  return {
    items: state.search.items,
    dropdown: state.search.dropdown
  }
}

@connect(mapStateToProps)
export default class ShowDropDown extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }

  componentWillMount () {
    // Creating the event listener for mousedown event
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount () {
    // Deleting the event listener for mousedown event
    document.removeEventListener('mousedown', this.handleClick, false)
  }

  //  Getting ref of the dropdown block
  ddBox = React.createRef();

  // Handlick a click outside the dropdown block
  handleClick = (e) => {
    const { dispatch } = this.props
    // Hide the dropdown if the click was outside the block
    if (this.props.dropdown && !this.ddBox.current.contains(e.target)) {
      dispatch(dropdownHide())
    }
  }

  render () {
    return (
      <div>
        {
          (this.props.dropdown)
            ? <DropDown ddBox={this.ddBox}
              items={this.props.items} />
            : null
        }
      </div>
    )
  }
}
