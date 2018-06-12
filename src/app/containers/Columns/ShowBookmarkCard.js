import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DragSource, DropTarget } from 'react-dnd'

import { wasUpdated, showStars, showIssues } from '../../additional/additionalFunc'
import BookmarkCard from '../../components/Columns/BookmarkCard'

import { deleteBookmark } from '../../actions/'

const mapStateToProps = state => {
  return { list: state.bookmarks.list }
}

const cardSource = {
  beginDrag (props) {
    return {
      id: props.card,
      itemList: props.list
    }
  },
  endDrag (props, monitor) {

  },
  isDragging (props, monitor) {
    return props.card === monitor.getItem().id
  }
}

const cardTarget = {
  canDrop () {
    return false
  },

  hover (props, monitor, component) {
    if (monitor.isOver({ shallow: true })) {
      const draggedId = monitor.getItem().id
      const overId = props.card
      // move a bookmark if the current one isn't over itself
      if (draggedId !== overId) {
        props.moveCard(draggedId, overId)
      }
    }
  }
}

@DropTarget('bookmark', cardTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOverCurrent: monitor.isOver({ shallow: true })
}))
@DragSource('bookmark', cardSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
@connect(mapStateToProps)
export default class ShowBookmarkCard extends Component {
  constructor (props) {
    super(props)

    this.handleDeleteBookmark = this.handleDeleteBookmark.bind(this)
  }

  // Deleting a bookmark by click
  handleDeleteBookmark (e) {
    const { dispatch } = this.props
    dispatch(deleteBookmark(this.props.card, this.props.columnName))
  }

  render () {
    const itemList = this.props.list
    const card = this.props.card
    const { connectDragSource, connectDropTarget, isDragging } = this.props

    return (
      connectDragSource &&
      connectDropTarget &&
      connectDragSource(
        connectDropTarget(
          <div>
            <BookmarkCard imgUrl={itemList[card].owner.avatar_url}
              htmlUrl={itemList[card].html_url}
              fullName={itemList[card].full_name}
              description={itemList[card].description}
              updatedAt={wasUpdated(itemList[card].updated_at)}
              stars={showStars(itemList[card].stargazers_count)}
              issues={showIssues(itemList[card].open_issues)}
              onClick={(e) => this.handleDeleteBookmark(e)}
              dragging={isDragging}
              id={card.toString()}
              key={card}
            />
          </div>
        )
      )
    )
  }
}
