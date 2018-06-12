import React, { Component } from 'react'
import { connect } from 'react-redux'

import BookmarkColumnHead from '../../components/Columns/BookmarkColumnHead'
import { deleteColumn } from '../../actions'

const mapStateToProps = state => {
  return { columns: state.bookmarks.columns }
}

@connect(mapStateToProps)
export default class ShowBookmarkColumnHead extends Component {
  constructor (props) {
    super(props)
    this.state = { sticky: false }

    this.handleDeleteColumn = this.handleDeleteColumn.bind(this)
    this.onScroll = this.onScroll.bind(this)
  }

  componentDidMount () {
    // Creating the event listener for a scroll event
    window.addEventListener('scroll', this.onScroll, false)
  }
  componentWillUnmount () {
    // Deleting the event listener for a scroll event
    window.removeEventListener('scroll', this.onScroll, false)
  }

  // Changing column head style between position relative and fixed
  onScroll () {
    if (window.pageYOffset >= 106 && !this.state.sticky) {
      this.setState({ sticky: true })
    } else if (window.pageYOffset < 106 && this.state.sticky) {
      this.setState({ sticky: false })
    }
  }

  // Handling a click on column delete button
  handleDeleteColumn (e) {
    const { dispatch } = this.props
    // delete any column except the Collection column
    if (this.props.name !== 'Collection') {
      const props = this.props
      const columnCards = props.columns.filter(el => el.name === props.name)[0].cards
      dispatch(deleteColumn(this.props.name, columnCards))
    } else {
      // message if trying delete the Collection column
      alert("You can't delete the collection column")
    }
  }

  render () {
    return (
      <BookmarkColumnHead name={this.props.name}
        onClick={(e) => this.handleDeleteColumn(e)}
        sticky={this.state.sticky} />
    )
  }
}
