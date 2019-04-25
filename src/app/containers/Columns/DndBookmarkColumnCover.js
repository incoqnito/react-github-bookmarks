import React, { Component } from 'react'
import { connect } from 'react-redux'

import DndBookmarkColumn from '../../containers/Columns/DndBookmarkColumn'
import { moveBookmark } from '../../actions'

const mapStateToProps = state => {
  return { columns: state.bookmarks.columns }
}

@connect(mapStateToProps)
export default class DndBookmarkColumnCover extends Component {
  constructor (props) {
    super(props)

    this.moveCard = this.moveCard.bind(this)
    this.findBookmark = this.findBookmark.bind(this)
  }

  // Changing bookmark position
  moveCard (id, atIndex) {
    const { dispatch } = this.props
    const { findedColumnName: idColumnName, index: indexOfId } = this.findBookmark(id)
    const { findedColumnName: atIndexColumnName, index: indexOfatIndex } = this.findBookmark(atIndex)

    dispatch(moveBookmark(id, idColumnName, indexOfId, atIndexColumnName, indexOfatIndex))
  }

  // Finding a column name and an index of bookmark card
  findBookmark (id) {
    const columns = this.props.columns
    if (!Number.isInteger(id)) {
      return {
        findedColumnName: id,
        index: 0
      }
    }
    const column = columns.filter(col => col.cards.includes(id))[0]
    const findedColumnName = column.name
    const findedCard = column.cards.indexOf(id)
    return {
      findedColumnName: findedColumnName,
      index: findedCard
    }
  }

  render () {
    return (
      <DndBookmarkColumn moveCard={this.moveCard}
        findBookmark={this.findBookmark}
        columnName={this.props.columnName}
        cards={this.props.cards} />
    )
  }
}
