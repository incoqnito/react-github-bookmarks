import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'

import ShowBookmarkCard from '../../containers/Columns/ShowBookmarkCard'

const mapStateToProps = state => {
  return { columns: state.bookmarks.columns }
}

const cardTarget = {
  drop () {
    //
  },
  hover (props, monitor, component) {
    const isOver = monitor.isOver({ shallow: true })
    const currentColumn = props.findBookmark(monitor.getItem().id).findedColumnName
    const isDifferentColumn = currentColumn !== props.columnName
    // when the mouse pointer is over different column
    if (isOver && isDifferentColumn) {
      props.moveCard(monitor.getItem().id, props.columnName)
    }
  }
}

@DropTarget('bookmark', cardTarget, connect => ({
  connectDropTarget: connect.dropTarget()
}))
@connect(mapStateToProps)
export default class DndBookmarkColumn extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const { connectDropTarget } = this.props
    const cards = this.props.cards

    return (
      connectDropTarget &&
      connectDropTarget(
        <div style={{'minHeight': '100px', 'width': '250px'}}
          id={this.props.columnName} >
          {cards.map(card =>
            <ShowBookmarkCard card={card}
              columnName={this.props.columnName}
              moveCard={this.props.moveCard}
              findBookmark={this.props.findBookmark} />
          )}
        </div>
      )
    )
  }
}
