import React, { Component } from 'react'
import { connect } from 'react-redux'

import { columnNameOnchange, addColumn } from '../../actions/'
import BookmarkAddColumn from '../../components/Columns/BookmarkAddColumn'

const mapStateToProps = state => {
  return { value: state.bookmarks.name,
    columns: state.bookmarks.columns }
}

@connect(mapStateToProps)
export default class ShowBookmarkAddColumn extends Component {
  constructor (props) {
    super(props)

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddClick = this.handleAddClick.bind(this)
    this.handlePressEnter = this.handlePressEnter.bind(this)
  }

  // Changing value of add column block input
  handleInputChange (e) {
    const { dispatch } = this.props
    dispatch(columnNameOnchange(e.target.value))
  }

  // Adding new column by button click
  handleAddClick (e) {
    const { dispatch } = this.props
    if (this.props.value && this.props.value !== '') {
      // if there is no columns with current value
      if (this.props.columns.every((el) => el.name !== this.props.value)) {
        dispatch(addColumn(this.props.value)) 
      } else {
        // show message if column with current value already exists
        alert('The column already exists')
      }
    }
  }

  // Adding new column by Enter press
  handlePressEnter (e) {
    const { dispatch } = this.props
    if (e.key === 'Enter') {
      if (this.props.value && this.props.value !== '') {
        if (this.props.columns.every((el) => el.name !== this.props.value)) {
          dispatch(addColumn(this.props.value))
        } else {
          alert('The column already exists')
        }
      }
    }
  }

  render () {
    return (
      <BookmarkAddColumn onChange={this.handleInputChange}
        value={this.props.value}
        onClick={(e) => this.handleAddClick(e)}
        onKeyPress={(e) => this.handlePressEnter(e)} />
    )
  }
}
