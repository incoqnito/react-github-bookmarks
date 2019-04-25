import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addBookmark } from '../../actions'

import DropDownButton from '../../components/DropDown/DropDownButton'

const mapStateToProps = state => {
  return { columns: state.bookmarks.columns,
    items: state.search.items }
}

@connect(mapStateToProps)
export default class ShowDropDownButton extends Component {
  constructor (props) {
    super(props)

    this.handleClickButton = this.handleClickButton.bind(this)
  }

  // Adding a bookmark by click on the button
  handleClickButton (e) {
    const { dispatch } = this.props
    if (!this.hasBookmark(this.props.itemId, this.props.columns)) {
      let bookmarkItem = {}
      this.props.items.forEach((el, i) => {
        if (el.id === this.props.itemId) {
          bookmarkItem = this.props.items[i]
        }
      })
      dispatch(addBookmark(bookmarkItem))
    }
  }

  // Checking the current bookmark is added or not
  hasBookmark (id, columns) {
    const result = columns.every(el => el.cards.includes(id) === false)
    return !result
  }

  render () {
    return (
      <DropDownButton onClick={(e) => this.handleClickButton(e)}
        added={this.hasBookmark(this.props.itemId, this.props.columns)} />
    )
  }
}
